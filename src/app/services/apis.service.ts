import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { savedList } from '../mocks/mock';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor() { }

  getRestaurantList(){
    return of(savedList)
  }
  
}
