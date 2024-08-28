import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { RestaurantDetail } from 'src/app/models/restaurants.model';
import { ApisService } from 'src/app/services/apis.service';
import { deleteExisting } from 'src/app/store/app.actions';
import { AppState } from 'src/app/store/app.state';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
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
