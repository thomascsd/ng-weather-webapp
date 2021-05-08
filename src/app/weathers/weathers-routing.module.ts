import { Routes, RouterModule } from '@angular/router';
import { DaysForecastComponent } from './/days-forecast/days-forecast.component';
import { LocationForecastComponent } from './location-forecast/location-forecast.component';

const routes: Routes = [
  { path: 'days', component: DaysForecastComponent },
  { path: 'location', component: LocationForecastComponent }
];

export const WeathersRoutingModule = RouterModule.forChild(routes);
