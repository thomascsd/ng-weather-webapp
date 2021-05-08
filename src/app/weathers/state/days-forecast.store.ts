import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ForecastDatum } from './forecast.model';

export interface DaysForecastState extends EntityState<ForecastDatum> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'days-forecast' })
export class DaysForecastStore extends EntityStore<
  DaysForecastState,
  ForecastDatum
> {
  constructor() {
    super();
  }
}
