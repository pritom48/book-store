import React from 'react';
import './Book.css'
import { BsCartFill } from "react-icons/bs"

const Book = (props) => {
    // cosnt { handleAddToCart }=props
    const { name, price, img } = props.book;


    return (
        <div className='book'>
            <img src={img} alt="" />
            <div className='book-info'>
                <h5>{name}</h5>
                <p><b>Price : ${price}</b></p>
            </div>
            <button onClick={props.handleAddToCart} className='btn-cart'>
                <p><BsCartFill /></p>
            </button>
        </div>
    );
};

export default Book;