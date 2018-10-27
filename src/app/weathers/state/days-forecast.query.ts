import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { DaysForecastStore, DaysForecastState } from './days-forecast.store';
import { Forecast } from './forecast.model';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DaysForecastQuery extends QueryEntity<
  DaysForecastState,
  Forecast
> {
  constructor(protected store: DaysForecastStore) {
    super(store);
  }

  getForecastData() {
    return this.selectActive(forecast => forecast.data).pipe(take(3));
  }
}
