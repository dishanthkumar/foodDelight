import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { RestaurantDetail } from 'src/app/models/restaurants.model';
import { deleteExisting } from 'src/app/store/app.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})

export class RestaurantListComponent {
  Restaurants$!:Observable<RestaurantDetail[]>;
  count!:number;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ){
  }

  ngOnInit(){
    this.Restaurants$ = this.store.pipe(
      map((res) =>  res.RES_STORE.list)
    );
  }

  deleteItem(i: RestaurantDetail){
    this.store.dispatch(deleteExisting({id: i.id}));
  }
}
