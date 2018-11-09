import { Component, OnInit } from '@angular/core';
import { DaysForecastQuery, ForecastService, ForecastDatum } from '../state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-days-forecast',
  templateUrl: './days-forecast.component.html',
  styleUrls: ['./days-forecast.component.scss']
})
export class DaysForecastComponent implements OnInit {
  forecastData$: Observable<ForecastDatum[]>;

  constructor(
    private query: DaysForecastQuery,
    private service: ForecastService
  ) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(
      (pos: Position) => {
        this.forecastData$ = this.query.selectAll({
          limitTo: 8
        });
        this.service.getDays(pos.coords.latitude, pos.coords.longitude);
      },
      error => {
        console.log(error);
      }
    );
  }
}
