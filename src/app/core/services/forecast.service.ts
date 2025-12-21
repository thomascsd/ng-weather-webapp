import { Injectable } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { ForecastDatum } from '../models/forecast.model';

@Injectable({ providedIn: 'root' })
export class ForecastService {
  constructor() {}

  getDays(req: () => { lat: number; lon: number } | undefined): HttpResourceRef<ForecastDatum[]> {
    return httpResource<ForecastDatum[]>(
      () => {
        const params = req();
        if (!params) {
          return undefined;
        }
        return {
          url: '/.netlify/functions/proxy',
          params: {
            path: encodeURIComponent(`forecast/days?lat=${params.lat}&lon=${params.lon}`),
          },
        };
      },
      {
        parse: (data) => this.toForecastDatums(data),
        defaultValue: [],
      },
    );
  }

  getLocation(city: () => string | undefined): HttpResourceRef<ForecastDatum[]> {
    return httpResource<ForecastDatum[]>(
      () => {
        const cityValue = city();
        if (!cityValue) {
          return undefined;
        }
        return {
          url: '/.netlify/functions/proxy',
          params: {
            path: encodeURIComponent(`forecast/location?city=${cityValue}`),
          },
        };
      },
      {
        parse: (data) => this.toForecastDatums(data),
        defaultValue: [],
      },
    );
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
