import { ShoppingAction, ShoppingActionTypes } from "../actions/shopping-actions";
import { ShoppingItem } from "../models/shopping-item-model";

const initState:Array<ShoppingItem> = [
    {
        id:4,
        name:"ali"
    }
]
export function ShoppingReducer(state:Array<ShoppingItem> = initState, action:ShoppingAction){
    switch(action.type){
    case ShoppingActionTypes.ADD_ITEM:
        return [...state, action.playlod]
    default:
        return state
    }
}