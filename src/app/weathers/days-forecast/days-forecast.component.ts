import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';

import { Observable } from 'rxjs';
import { ForecastService } from '../../core/services/forecast.service';
import { ForecastDatum } from '../../core/models/forecast.model';
import { tap } from 'rxjs/operators';
import { ForecastItemComponent } from '../forecast-item/forecast-item.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-days-forecast',
    templateUrl: './days-forecast.component.html',
    styleUrls: ['./days-forecast.component.scss'],
    imports: [
        ForecastItemComponent,
        MatProgressSpinner,
        AsyncPipe,
    ],
})
export class DaysForecastComponent implements OnInit {
  forecastData$!: Observable<ForecastDatum[]>;
  loading = false;

  constructor(private service: ForecastService) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(
      (pos: GeolocationPosition) => {
        this.loading = true;

        this.forecastData$ = this.service
          .getDays(pos.coords.latitude, pos.coords.longitude)
          .pipe(tap(() => (this.loading = false)));
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
