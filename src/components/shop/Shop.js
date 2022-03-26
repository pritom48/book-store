import React, { useEffect, useState } from 'react';
import Book from '../Books/Book';
import Cart from '../Cart/Cart';
import './Shop.css'


const Shop = () => {
    const [books, setbooks] = useState([]);
    const [cart, setcart] = useState([]);

    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])


    const handleAddToCart = (book) => {
        const newCart = [...cart, book];
        setcart(newCart)
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
                <div class="col-md-3 cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    )
};

export default Shop;