import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, updateCart } from '../../redux/cart/action';
import "./Cart.css"

const Cart = () => {
  const dispatch = useDispatch();
  const { cart: cartData, Price: total } = useSelector(state => state.Cart);

  const handleDelete = (id)=>{
    dispatch(deleteCart(id));
  }

  const handleUpdate = (item, val)=>{
    if(item.cartQuantity<item.quantity || val<0){
      dispatch(updateCart({item, val}));
    }else{
      alert("Item quantity is out of stock");
    }
  }

  return (
    <div className='cart'>
      <h3>Shopping Cart</h3>
      <div className='cart__details'>
        <div  className='cart__products'>
          {
            cartData.map(item=>(
              <div className='cart__item' key={item.id}>
                <div className='cart__item__Details'>
                  <img src={item.imageURL} width={100} alt={item.name} />
                  <div>
                    <h2>{item.name}</h2>
                    <h2>{item.price*item.cartQuantity}</h2>
                  </div>
                </div>
                <div className='cart__item__update'>
                  <div className='cart__item__quantity'>
                    <button className='minus' onClick={()=>handleUpdate(item, -1)} disabled={item.cartQuantity===1}> - </button>
                    <button className='q'> Qty: {item.cartQuantity} </button>
                    <button className='minus' onClick={()=>handleUpdate(item, 1)}> + </button>
                  </div>
                  <button className='deleteBtn' onClick={()=>handleDelete(item.id)}> Delete </button>
                </div>
              </div>
            ))
          }
        </div>
        <div className='cart__details__total'>
            <h2 className='cart__total'> Total amount </h2>
            <span> Rs. {total} </span>
        </div>
      </div>
    </div>
  )
}

export default Cart