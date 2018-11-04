import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationForecastQuery } from '../state/location-forecast.query';
import { ForecastService } from '../state/forecast.service';
import { ForecastDatum } from '../state';

@Component({
  selector: 'app-location-forecast',
  templateUrl: './location-forecast.component.html',
  styleUrls: ['./location-forecast.component.scss']
})
export class LocationForecastComponent implements OnInit {
  forecastData$: Observable<ForecastDatum[]>;

  constructor(
    private query: LocationForecastQuery,
    private servie: ForecastService
  ) {}

  ngOnInit() {
    this.loadData('tokyo');
  }

  changeCity(city: string) {
    this.loadData(city);
  }

  private loadData(city: string) {
    this.forecastData$ = this.query.selectAll({
      limitTo: 5
    });
    this.servie.getLocation(city);
  }
}
