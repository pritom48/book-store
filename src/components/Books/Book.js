import React from 'react';
import './Book.css'

const Book = (props) => {
    const { name, price, img } = props.book;
    console.log(props.book)

    return (
        <div className='book'>
            <div className='book-info'>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <p><b>Price : ${price}</b></p>
            </div>
        </div>
    );
};

export default Book;