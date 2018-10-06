import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentForecastComponent } from './current-forecast/current-forecast.component';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CurrentForecastComponent, DaysForecastComponent]
})
export class WeathersModule {}
