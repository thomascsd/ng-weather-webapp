import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ForecastDatum } from '../models/forecast.model';
import { environment } from './../../../environments/environment';

import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ForecastService {
  constructor(private http: HttpClient) {}

  getDays(lat: number, lon: number) {
    const url = `${environment.apiUrl}/api/forecast/days?lat=${lat}&lon=${lon}`;
    return this.http.get(url).pipe(map(this.toForecastDatums));
  }

  getLocation(city: string) {
    const url = `${environment.apiUrl}/api/forecast/location?city=${encodeURIComponent(city)}`;
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
