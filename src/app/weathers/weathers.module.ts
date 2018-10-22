import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CurrentForecastComponent } from './current-forecast/current-forecast.component';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, MaterialModule],
  declarations: [
    CurrentForecastComponent,
    DaysForecastComponent,
    ForecastItemComponent
  ]
})
export class WeathersModule {}
