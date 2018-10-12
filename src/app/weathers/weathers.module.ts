import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CurrentForecastComponent } from './current-forecast/current-forecast.component';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';
import { NebularModule } from '../nebular/nebular.module';

@NgModule({
  imports: [CommonModule, NebularModule, HttpClientModule],
  declarations: [CurrentForecastComponent, DaysForecastComponent]
})
export class WeathersModule {}
