import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';
import { MaterialModule } from '../material/material.module';
import { LocationForecastComponent } from './location-forecast/location-forecast.component';
import { WeathersRoutingModule } from './weathers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    WeathersRoutingModule
  ],
  declarations: [
    DaysForecastComponent,
    ForecastItemComponent,
    LocationForecastComponent
  ]
})
export class WeathersModule {}
