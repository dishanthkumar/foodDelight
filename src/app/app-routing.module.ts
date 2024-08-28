import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './containers/restaurants/restaurant-list/restaurant-list.component';
import { AddEditRestaurantTsComponent } from './containers/restaurants/add-edit-restaurant.ts/add-edit-restaurant.ts.component';

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
    path: 'add-restaurants',
    component: AddEditRestaurantTsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
