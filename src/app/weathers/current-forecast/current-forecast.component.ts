import { Component, OnInit } from '@angular/core';
import { CurrentForecastQuery, ForecastService, ForecastDatum } from '../state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.scss']
})
export class CurrentForecastComponent implements OnInit {
  forecastData$: Observable<ForecastDatum[]>;

  constructor(
    private query: CurrentForecastQuery,
    private service: ForecastService
  ) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(
      (pos: Position) => {
        const coords = pos.coords;
        this.forecastData$ = this.query.selectActive(state => state.data);
        this.service.getCurrent(coords.latitude, coords.longitude);
      },
      error => {
        console.log(error);
      }
    );
  }
}
