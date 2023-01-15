import { ADD_CART, DELETE_CART, UPDATE_CART } from "./actionTypes";

let initialState = {
    cart:[],
    Products: 0,
    Price: 0,
}

export const cartReducer = (store=initialState, action)=>{
    switch (action.type) {
        case ADD_CART:
            return {
                cart: [...store.cart, action.payload], 
                Products: store.Products+1,
                Price: store.Price+action.payload.price
            };
        case DELETE_CART:
            const data = store.cart.filter(item=>item.id!==action.payload);
            return {
                cart: data,
                Products: data.reduce((prev, curr)=>prev+curr.cartQuantity,0),
                Price: data.reduce((accumulator, {price,cartQuantity})=>accumulator+(price*cartQuantity), 0)
            };
        case UPDATE_CART:
            const updated = store.cart.map(item=>item.id===action.payload.item.id?{...item, cartQuantity: item.cartQuantity+action.payload.val}:item)
            return { ...store, 
                cart: updated,
                Products: store.Products+action.payload.val,
                Price: action.payload.val>0?store.Price+action.payload.item.price:store.Price-action.payload.item.price
            };
        default:
            return store;
    }
}