import { createAction, props } from "@ngrx/store";
import { RestaurantDetail } from "../models/restaurants.model";

export const addNew = createAction('Restaurant | Add', props<RestaurantDetail>());
export const deleteExisting = createAction('Restaurant | Delete', props<{id: string}>());
export const updateExisting = createAction('Restaurant | Update' ,props<RestaurantDetail>());