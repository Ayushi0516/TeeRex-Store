import { ADD_CART, DELETE_CART, UPDATE_CART } from "./actionTypes"

export const addCart = (payload)=>{
    return {
        type: ADD_CART,
        payload
    }
}

export const deleteCart = (payload)=>{
    return {
        type: DELETE_CART,
        payload
    }
}

export const updateCart = (payload)=>{
    return {
        type: UPDATE_CART,
        payload
    }
}