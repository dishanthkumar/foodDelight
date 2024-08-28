import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import {MatTableModule} from '@angular/material/table';
import { AddEditRestaurantTsComponent } from './add-edit-restaurant.ts/add-edit-restaurant.ts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  RestaurantListComponent
];


@NgModule({
  declarations: [
    ...components,
    AddEditRestaurantTsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  exports: [
    ...components
  ]
})
export class RestaurantsModule { }
