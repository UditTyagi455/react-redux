import {ADD_TO_CART} from "../constant"
import {REMOVE_TO_CART} from "../constant"

export const AddToCart = (data) => {
    // console.log("data :-",data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const RemoveToCart = (data) => {
    return {
        type: REMOVE_TO_CART,
    }
}