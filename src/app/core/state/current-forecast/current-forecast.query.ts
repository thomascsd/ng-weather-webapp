import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CurrentForecastStore, CurrentForecastState } from './current-forecast.store';
import { CurrentForecast } from './current-forecast.model';

@Injectable({ providedIn: 'root' })
export class CurrentForecastQuery extends QueryEntity<CurrentForecastState, CurrentForecast> {

  constructor(protected store: CurrentForecastStore) {
    super(store);
  }

}
