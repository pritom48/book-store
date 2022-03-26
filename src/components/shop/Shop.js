import React, { useEffect, useState } from 'react';
import Book from '../Books/Book';
import './Shop.css'


const Shop = () => {
    const [books, setbooks] = useState([]);

    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])


    const handleAddToCart = (book) => {
        console.log(book)
    }

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-9 book-container">

                    {
                        books.map(book => (<Book
                            key={book.id}
                            book={book}
                            handleAddToCart={handleAddToCart}
                        ></Book>))
                    }
                </div>
                <div class="col-md-3">
                    <h3>this is cart</h3>
                </div>
            </div>
        </div>
    )
};

export default Shop;