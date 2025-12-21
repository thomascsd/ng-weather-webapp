import { Component, inject, OnInit } from '@angular/core';
import { HttpResourceRef } from '@angular/common/http';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ForecastService } from '../../core/services/forecast.service';
import { ForecastDatum } from '../../core/models/forecast.model';
import { ForecastItemComponent } from '../forecast-item/forecast-item.component';

@Component({
  selector: 'app-location-forecast',
  templateUrl: './location-forecast.component.html',
  styleUrls: ['./location-forecast.component.scss'],
  imports: [ForecastItemComponent, MatProgressSpinner],
})
export class LocationForecastComponent implements OnInit {
  private service = inject(ForecastService);
  forecastData!: HttpResourceRef<ForecastDatum[]>;

  constructor() {
    this.loadData('Tokyo');
  }

  ngOnInit() {}

  changeCity(city: string) {
    this.loadData(city);
  }

  private loadData(city: string) {
    this.forecastData = this.service.getLocation(city);
  }
}
