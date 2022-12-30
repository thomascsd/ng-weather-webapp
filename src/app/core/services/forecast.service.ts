import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ForecastDatum } from '../models/forecast.model';

import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ForecastService {
  constructor(private http: HttpClient) {}

  getDays(lat: number, lon: number) {
    const url = `/.netlify/functions/days?lat=${lat}&lon=${lon}`;
    return this.http.get(url).pipe(map(this.toForecastDatums));
  }

  getLocation(city: string) {
    const url = `/.netlify/functions/locations?city=${encodeURIComponent(city)}`;
    return this.http.get(url).pipe(map(this.toForecastDatums));
  }

  private toForecastDatums(forecast: any) {
    const datas = forecast.data as ForecastDatum[];
    let index = 1;
    const newDatas = datas.map((m) => {
      return {
        ...m,
        id: index++,
        city_name: forecast.city_name,
        lon: forecast.lon,
        timezone: forecast.timezone,
        lat: forecast.lat,
        country_code: forecast.country_code,
      } as ForecastDatum;
    });

    return newDatas;
  }
}
