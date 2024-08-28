import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-restaurant.ts',
  templateUrl: './add-edit-restaurant.ts.component.html',
  styleUrls: ['./add-edit-restaurant.ts.component.scss']
})
export class AddEditRestaurantTsComponent {
  restaurantForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.restaurantForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],

      location: this.fb.group({
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}(?:-[0-9]{4})?$')]]
      }),
      websiteURL: ['']
    });
  }

  onSubmit() {
    if (this.restaurantForm.valid) {
      console.log(this.restaurantForm.value);
      // Handle form submission, e.g., send data to a server
    }
  }
}
