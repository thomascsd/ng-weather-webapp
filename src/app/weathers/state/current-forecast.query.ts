import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import {
  CurrentForecastStore,
  CurrentForecastState
} from './current-forecast.store';
import { Forecast } from './forecast.model';

@Injectable({ providedIn: 'root' })
export class CurrentForecastQuery extends QueryEntity<
  CurrentForecastState,
  Forecast
> {
  constructor(protected store: CurrentForecastStore) {
    super(store);
  }
}
