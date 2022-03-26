import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleChooseBtn, handleChooseOneBtn }) => {
    return (
        <div className='cart-style'>
            <h3 className='cart-title'>Your Cart list</h3>
            {
                cart.map(item => <p key={item.id}># {item.name}</p>)
            }

            <button onClick={() => handleChooseOneBtn(cart)}>Choose One For Me</button>
            <button onClick={handleChooseBtn}>Choose Again</button>
        </div>
    );
};

export default Cart;