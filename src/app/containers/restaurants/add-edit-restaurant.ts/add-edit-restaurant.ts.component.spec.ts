import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRestaurantTsComponent } from './add-edit-restaurant.ts.component';

describe('AddEditRestaurantTsComponent', () => {
  let component: AddEditRestaurantTsComponent;
  let fixture: ComponentFixture<AddEditRestaurantTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditRestaurantTsComponent]
    });
    fixture = TestBed.createComponent(AddEditRestaurantTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
