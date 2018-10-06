import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { CurrentForecast } from './current-forecast.model';

export interface CurrentForecastState extends EntityState<CurrentForecast> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'current-forecast' })
export class CurrentForecastStore extends EntityStore<CurrentForecastState, CurrentForecast> {

  constructor() {
    super();
  }

}

