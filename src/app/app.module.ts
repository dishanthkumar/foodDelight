import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RestaurantsModule } from './containers/restaurants/restaurants.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RestaurantsModule,
    SharedModule,
    StoreModule.forRoot(AppReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
