import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { Observable } from 'rxjs';
import { ForecastService } from '../../core/services/forecast.service';
import { ForecastDatum } from '../../core/models/forecast.model';
import { tap } from 'rxjs/operators';
import { ForecastItemComponent } from '../forecast-item/forecast-item.component';

@Component({
  selector: 'app-days-forecast',
  templateUrl: './days-forecast.component.html',
  styleUrls: ['./days-forecast.component.scss'],
  standalone: false,
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
