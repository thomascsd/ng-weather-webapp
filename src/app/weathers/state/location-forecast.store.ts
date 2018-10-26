import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Forecast } from './forecast.model';

export interface LocationForecastState extends EntityState<Forecast> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'location-forecast' })
export class LocationForecastStore extends EntityStore<
  LocationForecastState,
  Forecast
> {
  constructor() {
    super();
  }
}
