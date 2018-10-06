import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { CurrentForecastStore } from './current-forecast.store';
import { HttpClient } from '@angular/common/http';
import { CurrentForecast } from './current-forecast.model';

@Injectable({ providedIn: 'root' })
export class CurrentForecastService {
  constructor(
    private currentForecastStore: CurrentForecastStore,
    private http: HttpClient
  ) {}

  get(lat: number, lon: number) {
    const url = `/api/getCurrent?lat=${lat}&lon=${lon}`;
    this.http.get(url).subscribe((entities: CurrentForecast) => {
      this.currentForecastStore.set([entities]);
    });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
    // this.currentForecastStore.add(entity);
    // });
  }
}
