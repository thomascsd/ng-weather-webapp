import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';
import { MaterialModule } from '../material/material.module';
import { LocationForecastComponent } from './location-forecast/location-forecast.component';

@NgModule({
  declarations: [DaysForecastComponent, ForecastItemComponent, LocationForecastComponent],
  imports: [CommonModule, MaterialModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class WeathersModule {}
