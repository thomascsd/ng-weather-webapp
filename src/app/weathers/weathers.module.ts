import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { LocationForecastComponent } from './location-forecast/location-forecast.component';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';

@NgModule({
    imports: [CommonModule, LocationForecastComponent, ForecastItemComponent, DaysForecastComponent],
    providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class WeathersModule {}
