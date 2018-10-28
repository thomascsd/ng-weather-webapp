import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DaysForecastComponent } from './weathers/days-forecast/days-forecast.component';
import { LocationForecastComponent } from './weathers/location-forecast/location-forecast.component';

const routes: Routes = [
  { path: '', redirectTo: 'days', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'days', component: DaysForecastComponent },
      { path: 'locaton', component: LocationForecastComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
