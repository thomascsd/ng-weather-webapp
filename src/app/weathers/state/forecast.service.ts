import { Injectable } from '@angular/core';
import { DaysForecastStore } from './days-forecast.store';
import { HttpClient } from '@angular/common/http';
import { Forecast } from './forecast.model';
import { LocationForecastStore } from './location-forecast.store';

@Injectable({ providedIn: 'root' })
export class ForecastService {
  constructor(
    private daysForecastStore: DaysForecastStore,
    private locationForecastStore: LocationForecastStore,
    private http: HttpClient
  ) {}

  getDays(lat: number, lon: number) {
    const url = `/api/getDays?lat=${lat}&lon=${lon}`;
    this.http.get(url).subscribe((entities: Forecast) => {
      this.daysForecastStore.set([entities]);
    });
  }

  getLocation(city: string) {
    const url = `/api/getLocation?city=${city}`;
    this.http.get(url).subscribe((entities: Forecast) => {
      this.locationForecastStore.set([entities]);
    });
  }
}
