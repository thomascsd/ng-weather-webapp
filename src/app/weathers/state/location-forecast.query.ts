import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import {
  LocationForecastStore,
  LocationForecastState
} from './location-forecast.store';
import { ForecastDatum } from './forecast.model';

@Injectable({ providedIn: 'root' })
export class LocationForecastQuery extends QueryEntity<
  LocationForecastState,
  ForecastDatum
> {
  constructor(protected store: LocationForecastStore) {
    super(store);
  }
}
