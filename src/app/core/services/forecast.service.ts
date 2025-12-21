import { Injectable } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { ForecastDatum } from '../models/forecast.model';

@Injectable({ providedIn: 'root' })
export class ForecastService {
  constructor() {}

  getDays(lat: number, lon: number): HttpResourceRef<ForecastDatum[]> {
    const path = `api/forecast/days?lat=${lat}&lon=${lon}`;
    const url = `$/.netlify/function/proxy?path=${encodeURIComponent(path)}`;

    return httpResource<ForecastDatum[]>(() => url, {
      parse: (data) => this.toForecastDatums(data),
      defaultValue: [],
    });
  }

  getLocation(city: string): HttpResourceRef<ForecastDatum[]> {
    const path = `api/forecast/location?city=${encodeURIComponent(city)}`;
    const url = `$/.netlify/function/proxy?path=${encodeURIComponent(path)}`;
    return httpResource<ForecastDatum[]>(() => url, {
      parse: (data) => this.toForecastDatums(data),
      defaultValue: [],
    });
  }

  private toForecastDatums(forecast: any): ForecastDatum[] {
    const data = forecast.data as ForecastDatum[];
    let index = 1;
    const newData = data.map((m) => {
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

    return newData;
  }
}
