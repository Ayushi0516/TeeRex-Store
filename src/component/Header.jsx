import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import "../styles/Header.css"

const Header = () => {
    const cartDataLength = useSelector(state => state.Cart.Products);
    
    return (
        <div className='header'>
            <div className='store' >
                <Link to='/' style={{color:"black",textDecoration:"none"}} >
                    <h2>TeeRex Store</h2>
                </Link>
            </div>
            <div className='product'>
               
                    <h3>Products</h3>
               
                <Link to='/cart' >
                    <div className='cartIcon'>
                        <FaShoppingCart size={30} color="black"/>
                        {cartDataLength>0?<span className='noOfCartItem'>{cartDataLength}</span>:""}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header