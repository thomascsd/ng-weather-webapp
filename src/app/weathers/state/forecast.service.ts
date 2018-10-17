import { Injectable } from '@angular/core';
import { DaysForecastStore } from './days-forecast.store';
import { CurrentForecastStore } from './current-forecast.store';
import { HttpClient } from '@angular/common/http';
import { Forecast } from './forecast.model';

@Injectable({ providedIn: 'root' })
export class ForecastService {
  constructor(
    private daysForecastStore: DaysForecastStore,
    private currentForecastStore: CurrentForecastStore,
    private http: HttpClient
  ) {}

  getCurrent(lat: number, lon: number) {
    const url = `/api/getCurrent?lat=${lat}&lon=${lon}`;
    this.http.get(url).subscribe((entities: Forecast) => {
      this.currentForecastStore.set([entities]);
    });
  }

  getDays(lat: number, lon: number) {
    const url = `/api/get5Days?lat=${lat}&lon=${lon}`;
    this.http.get(url).subscribe((entities: Forecast) => {
      this.daysForecastStore.set([entities]);
    });
  }
}
