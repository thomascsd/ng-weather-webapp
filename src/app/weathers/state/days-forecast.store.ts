import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Forecast } from './forecast.model';

export interface DaysForecastState extends EntityState<Forecast> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'days-forecast' })
export class DaysForecastStore extends EntityStore<
  DaysForecastState,
  Forecast
> {
  constructor() {
    super();
  }
}
