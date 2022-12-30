import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastService } from '../../core/services/forecast.service';
import { ForecastDatum } from '../../core/models/forecast.model';

@Component({
  selector: 'app-location-forecast',
  templateUrl: './location-forecast.component.html',
  styleUrls: ['./location-forecast.component.scss'],
})
export class LocationForecastComponent implements OnInit {
  forecastData$!: Observable<ForecastDatum[]>;

  constructor(private servie: ForecastService) {}

  ngOnInit() {
    this.loadData('Tokyo');
  }

  changeCity(city: string) {
    this.loadData(city);
  }

  private loadData(city: string) {
    this.forecastData$ = this.servie.getLocation(city);
  }
}
