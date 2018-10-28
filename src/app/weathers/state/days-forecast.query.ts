import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { DaysForecastStore, DaysForecastState } from './days-forecast.store';
import { ForecastDatum } from './forecast.model';

@Injectable({ providedIn: 'root' })
export class DaysForecastQuery extends QueryEntity<
  DaysForecastState,
  ForecastDatum
> {
  constructor(protected store: DaysForecastStore) {
    super(store);
  }
}
