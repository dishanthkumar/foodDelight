import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './containers/restaurants/restaurant-list/restaurant-list.component';
import { AddEditRestaurantTsComponent } from './containers/restaurants/add-edit-restaurant.ts/add-edit-restaurant.ts.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AboutComponent } from './shared/about/about.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'restaurants'
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
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
