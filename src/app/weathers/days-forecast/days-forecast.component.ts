import { Component, inject, OnInit, signal } from '@angular/core';
import { ForecastService } from '../../core/services/forecast.service';
import { ForecastDatum } from '../../core/models/forecast.model';
import { ForecastItemComponent } from '../forecast-item/forecast-item.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-days-forecast',
  templateUrl: './days-forecast.component.html',
  styleUrls: ['./days-forecast.component.scss'],
  imports: [ForecastItemComponent, MatProgressSpinner],
})
export class DaysForecastComponent implements OnInit {
  private service = inject(ForecastService);
  private location = signal<{ lat: number; lon: number } | undefined>(undefined);
  forecastData = this.service.getDays(() => this.location());

  constructor() {
    navigator.geolocation.getCurrentPosition(
      (pos: GeolocationPosition) => {
        this.location.set({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      },
    );
  }

  ngOnInit() {}
}
