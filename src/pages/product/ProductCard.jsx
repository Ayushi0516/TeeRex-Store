import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/cart/action';
import "./ProductCard.css"

const ProductCard = ({item}) => {
    const dispatch = useDispatch()
    const { cart: cartData } = useSelector(state => state.Cart);

    const handleCart = (item) => {
        let flag = cartData.findIndex(ele=>ele.id===item.id);
        if (flag !== -1) {
            alert("This Product is already in the cart")
        }else{
            dispatch(addCart({ ...item, cartQuantity: 1 }))
        }
    }
    
    return (
        <div className='item'>
            <div className='imgdiv'>
                <img src={item.imageURL} width="300px" alt={item.name} />
                <h2>{item.name}</h2>
            </div>
            <div className='details'>
                <h2>₹{item.price}</h2>
                <button className='button' onClick={() => handleCart(item)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard