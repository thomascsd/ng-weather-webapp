import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ForecastDatum } from './forecast.model';

export interface LocationForecastState extends EntityState<ForecastDatum> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'location-forecast' })
export class LocationForecastStore extends EntityStore<LocationForecastState, ForecastDatum> {
  constructor() {
    super();
  }
}
