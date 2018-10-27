import { Injectable } from '@angular/core';
import { DaysForecastStore } from './days-forecast.store';
import { HttpClient } from '@angular/common/http';
import { ForecastDatum } from './forecast.model';
import { LocationForecastStore } from './location-forecast.store';
import { map, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ForecastService {
  constructor(
    private daysForecastStore: DaysForecastStore,
    private locationForecastStore: LocationForecastStore,
    private http: HttpClient
  ) {}

  getDays(lat: number, lon: number) {
    const url = `/api/getDays?lat=${lat}&lon=${lon}`;
    this.http
      .get(url)
      .pipe(
        map(this.toForecastDatums),
        take(5)
      )
      .subscribe((entities: ForecastDatum[]) => {
        this.daysForecastStore.set(entities);
      });
  }

  getLocation(city: string) {
    const url = `/api/getLocation?city=${city}`;
    this.http.get(url).subscribe((entities: ForecastDatum) => {
      this.locationForecastStore.set([entities]);
    });
  }

  private toForecastDatums(forecast: any) {
    const datas = forecast.data as ForecastDatum[];
    const newDatas = datas.map(m => {
      return {
        ...m,
        city_name: forecast.city_name,
        lon: forecast.lon,
        timezone: forecast.timezone,
        lat: forecast.lat,
        country_code: forecast.country_code
      } as ForecastDatum;
    });

    return newDatas;
  }
}
