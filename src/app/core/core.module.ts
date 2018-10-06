import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/authInterceptor';
import { MaterialModule } from '../material/material.module';
import {
  CurrentForecastService,
  CurrentForecastQuery,
  CurrentForecastStore
} from './state/current-forecast';

@NgModule({
  imports: [CommonModule, HttpClientModule, MaterialModule],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    CurrentForecastService,
    CurrentForecastQuery,
    CurrentForecastStore
  ]
})
export class CoreModule {}
