import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CurrentForecastComponent } from './current-forecast/current-forecast.component';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';
import { NebularModule } from '../nebular/nebular.module';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';

@NgModule({
  imports: [CommonModule, NebularModule, HttpClientModule],
  declarations: [
    CurrentForecastComponent,
    DaysForecastComponent,
    ForecastItemComponent
  ]
})
export class WeathersModule {}
