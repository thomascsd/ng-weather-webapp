import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentForecastComponent } from './weathers/current-forecast/current-forecast.component';
import { LayoutComponent } from './layout/layout.component';
import { DaysForecastComponent } from './weathers/days-forecast/days-forecast.component';

const routes: Routes = [
  { path: '', redirectTo: 'current', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'current', component: CurrentForecastComponent },
      { path: 'days', component: DaysForecastComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
