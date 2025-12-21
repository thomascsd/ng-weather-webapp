import { Component, inject, OnInit } from '@angular/core';
import { ForecastService } from '../../core/services/forecast.service';
import { ForecastDatum } from '../../core/models/forecast.model';
import { ForecastItemComponent } from '../forecast-item/forecast-item.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { HttpResourceRef } from '@angular/common/http';

@Component({
  selector: 'app-days-forecast',
  templateUrl: './days-forecast.component.html',
  styleUrls: ['./days-forecast.component.scss'],
  imports: [ForecastItemComponent, MatProgressSpinner],
})
export class DaysForecastComponent implements OnInit {
  private service = inject(ForecastService);
  forecastData!: HttpResourceRef<ForecastDatum[]>;

  constructor() {
    navigator.geolocation.getCurrentPosition(
      (pos: GeolocationPosition) => {
        this.forecastData = this.service.getDays(pos.coords.latitude, pos.coords.longitude);
      },
      (error) => {
        console.log(error);
      },
    );
  }

  ngOnInit() {}
}
