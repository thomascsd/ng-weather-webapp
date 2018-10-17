import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Forecast } from './forecast.model';

export interface CurrentForecastState extends EntityState<Forecast> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'current-forecast' })
export class CurrentForecastStore extends EntityStore<
  CurrentForecastState,
  Forecast
> {
  constructor() {
    super();
  }
}
