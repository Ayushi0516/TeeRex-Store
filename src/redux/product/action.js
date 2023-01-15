import { GET_PRODUCTS_ERROR, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes"
// const baseUrl = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';

export const getProductsrequest = ()=>{
    return {
        type: GET_PRODUCTS_REQUEST
    }
}

export const getProductsSuccess = (payload)=>{
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload
    }
}

export const getProductsError = ()=>{
    return {
        type: GET_PRODUCTS_ERROR
    }
}

export const getProducts = () => async (dispatch)=>{
    dispatch(getProductsrequest());
    try {
        const res = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
        const data = await res.json();
        dispatch(getProductsSuccess(data));
    } catch (error) {
        console.log(error, " error ");
        dispatch(getProductsError());
    }
}