import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart-style'>
            <h3 className='cart-title'>Your Cart list</h3>
            {
                cart.map(item => <p key={item.id}>{item.name}</p>)
            }
        </div>
    );
};

export default Cart;