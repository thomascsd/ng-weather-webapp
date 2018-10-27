import { Component, OnInit, Input } from '@angular/core';
import { ForecastDatum } from '../state/forecast.model';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss']
})
export class ForecastItemComponent implements OnInit {
  @Input()
  forecastDatum: ForecastDatum;

  constructor() {}

  ngOnInit() {}

  getImageUrl(name: string) {
    return `https://www.weatherbit.io/static/img/icons/${name}.png`;
  }
}
