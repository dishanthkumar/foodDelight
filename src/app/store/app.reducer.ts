import { createReducer, on } from "@ngrx/store";
import { AppState, InitialState, ResInitialState, ResState } from "./app.state";
import { addNew, deleteExisting, updateExisting } from "./app.actions";
import { RestaurantDetail } from "../models/restaurants.model";

const ResReducer  = createReducer(
    ResInitialState,
    on(addNew, (state: ResState, props: RestaurantDetail)=>{
        return {
            count: state.count,
            list: [...state.list, props]
        }
    }),
    on(updateExisting, (state: ResState, props: RestaurantDetail)=>{
        const index = state.list.findIndex(i => i.id === props.id);
        const newList = [...state.list];
        newList[index] = props;
        return {
            ...state,
            count: newList.length,
            list: newList
        }
    }),
    on(deleteExisting, (state: ResState, props: {id: string})=>{
        const index = state.list.findIndex(i => i.id === props.id);
        const newList = [...state.list];
        newList.splice(index, 1);
        return {
            ...state,
            count: newList.length,
            list: newList
        }

    })
) 

export const AppReducer = {
    'RES_STORE': ResReducer
}

