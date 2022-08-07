import {ADD_TO_CART} from "../constant";
import { REMOVE_TO_CART } from "../constant";

const initialState = {
     cartItems : []    
}

export default function CardItems (state =[],action) {
     switch (action.type) {
        case ADD_TO_CART: 
     //    console.log("reducer data : ",action)
          return [
             ...state,
             {cartItems : action.data}
          ]
            
            break;
        case REMOVE_TO_CART : 
             state.pop()
          return [
               ...state,
          ]
        default:
            return state
            break;
     }
}