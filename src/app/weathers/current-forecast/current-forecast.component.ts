import { Component, OnInit } from '@angular/core';
import {
  CurrentForecastQuery,
  CurrentForecastStore,
  CurrentForecastService,
  Datum
} from './state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.scss']
})
export class CurrentForecastComponent implements OnInit {
  forecastData$: Observable<Datum[]>;

  constructor(
    private query: CurrentForecastQuery,
    private store: CurrentForecastStore,
    private service: CurrentForecastService
  ) {}

  ngOnInit() {
    this.store.setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos: Position) => {
        const coords = pos.coords;
        this.forecastData$ = this.query.selectActive(state => state.data);
        this.service.get(coords.latitude, coords.longitude);
      },
      error => {
        console.log(error);
      }
    );

    this.store.setLoading(false);
  }
}
