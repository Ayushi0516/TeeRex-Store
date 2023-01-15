import { GET_PRODUCTS_ERROR, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes";

let initialState = {
    isLoading: false,
    isError: false,
    products: []
}

export const productReducer = (store=initialState, action) =>{
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return { isLoading: true, isError: false, products: [] }
        case GET_PRODUCTS_SUCCESS:
            return { isLoading: false, isError: false, products: action.payload }
        case GET_PRODUCTS_ERROR:
            return { isLoading: false, isError: true, products: [] }
        default:
            return store;
    }
}