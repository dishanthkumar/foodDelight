import { savedList } from "../mocks/mock";
import { RestaurantDetail } from "../models/restaurants.model";

export interface ResState {
    list: RestaurantDetail[],
    count: number   
} 

export const ResInitialState = {
    list: savedList,
    count: savedList.length
};
export interface AppState{
    'RES_STORE': ResState
};

export const InitialState = {
    'RES_STORE': ResInitialState
};

