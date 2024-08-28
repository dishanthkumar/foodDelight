import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Store } from '@ngrx/store';
import { RestaurantDetail } from 'src/app/models/restaurants.model';
import { addNew, updateExisting } from 'src/app/store/app.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-add-edit-restaurant.ts',
  templateUrl: './add-edit-restaurant.ts.component.html',
  styleUrls: ['./add-edit-restaurant.ts.component.scss']
})
export class AddEditRestaurantTsComponent {
  restaurantForm!: FormGroup;
  savedFormData!: RestaurantDetail | undefined;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.url.subscribe((path: UrlSegment[])=>{
      const segment = path[path.length-1];
      const id = segment? segment.path : '';
      this.getSavedFormData(id);
    })
  }

  getSavedFormData(id: string){
    this.store.subscribe((state: AppState)=>{
      this.savedFormData = state.RES_STORE.list.find(i=>i.id===id);
      this.initiateForm();
    })
  }

  initiateForm(){
    this.restaurantForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', Validators.required],
      websiteURL: [''],
      location: this.fb.group({
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
      }),
      id: [this.generateUUID(), [Validators.required]]
    });

    if(this.savedFormData)
      this.restaurantForm.patchValue(this.savedFormData);
  }

  onSubmit() {
    if(this.savedFormData){
      this.store.dispatch(updateExisting(this.restaurantForm.value))
    } else if (this.restaurantForm.valid) {
      const detail:RestaurantDetail = {...this.restaurantForm.value, id: this.generateUUID()};
      this.store.dispatch(addNew(detail));
    } 
    this.router.navigateByUrl('restaurants');
  }

  generateUUID() {
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    uuid = uuid.replace(/[xy]/g, function(c) {
      const random = Math.random() * 16 | 0;
      const value = c === 'x' ? random : (random & 0x3 | 0x8);
      return value.toString(16);
    });
    return uuid;
  }
}
