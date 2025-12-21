import { Component, inject, OnInit, signal } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ForecastService } from '../../core/services/forecast.service';
import { ForecastItemComponent } from '../forecast-item/forecast-item.component';

@Component({
  selector: 'app-location-forecast',
  templateUrl: './location-forecast.component.html',
  styleUrls: ['./location-forecast.component.scss'],
  imports: [ForecastItemComponent, MatProgressSpinner],
})
export class LocationForecastComponent implements OnInit {
  private service = inject(ForecastService);
  city = signal<string>('Tokyo');
  forecastData = this.service.getLocation(() => this.city());

  constructor() {}

  ngOnInit() {}

  changeCity(city: string) {
    this.city.set(city);
  }
}
