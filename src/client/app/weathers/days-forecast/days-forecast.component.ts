import { Component, OnInit } from '@angular/core';
import {
  DaysForecastQuery,
  ForecastService,
  ForecastDatum,
  DaysForecastStore
} from '../state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-days-forecast',
  templateUrl: './days-forecast.component.html',
  styleUrls: ['./days-forecast.component.scss']
})
export class DaysForecastComponent implements OnInit {
  forecastData$: Observable<ForecastDatum[]>;
  loading$: Observable<boolean>;

  constructor(
    private query: DaysForecastQuery,
    private service: ForecastService,
    private store: DaysForecastStore
  ) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(
      (pos: Position) => {
        this.store.setLoading(true);
        this.forecastData$ = this.query.selectAll({
          limitTo: 8
        });
        this.loading$ = this.query.selectLoading();
        this.service.getDays(pos.coords.latitude, pos.coords.longitude);
      },
      error => {
        console.log(error);
      }
    );
  }
}
