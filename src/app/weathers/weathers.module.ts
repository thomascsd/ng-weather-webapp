import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { LocationForecastComponent } from './location-forecast/location-forecast.component';

@NgModule({
  declarations: [LocationForecastComponent],
  imports: [CommonModule, MaterialModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class WeathersModule {}
