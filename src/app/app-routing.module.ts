import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './containers/restaurants/restaurant-list/restaurant-list.component';
import { AddEditRestaurantTsComponent } from './containers/restaurants/add-edit-restaurant.ts/add-edit-restaurant.ts.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'restaurants',
    component: RestaurantListComponent
  },
  {
    path: 'restaurants/add-restaurant',
    component: AddEditRestaurantTsComponent
  },
  {
    path: 'restaurants/edit/:id',
    component: AddEditRestaurantTsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
