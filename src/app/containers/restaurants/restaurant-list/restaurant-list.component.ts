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
  Restaurants!:RestaurantDetail[];
  count!:number;
  tableData!: RestaurantDetail[];
  filteredData!: RestaurantDetail[];

  recordsPerPage: number = 5;
  currPage:number = 1;
  maxPageCount!: number;

  searchTerm: string= '';


  constructor(
    private store: Store<AppState>
  ){
  }

  ngOnInit(){
    this.store.subscribe((res)=>{
      this.Restaurants = res.RES_STORE.list;
      this.count = res.RES_STORE.count;
      this.searchRecords();
    })
  }

  deleteItem(i: RestaurantDetail){
    this.store.dispatch(deleteExisting({id: i.id}));
  }

  searchRecords(){
    this.filteredData = this.Restaurants.filter(i=>{
      return i.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || i.description?.toLowerCase().includes(this.searchTerm.toLowerCase())
    })
    this.goToPage(1);
  }

  goToPage(pageNumber: number){
    this.maxPageCount = Math.ceil(this.filteredData.length/this.recordsPerPage)
    this.currPage = pageNumber;
    const start = (pageNumber-1)*this.recordsPerPage;
    const end = Math.min(start+this.recordsPerPage, this.filteredData.length);
    this.tableData = this.filteredData.slice(start, end)
  }
}
