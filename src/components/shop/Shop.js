import React, { useEffect, useState } from 'react';
import Book from '../Books/Book';
import Cart from '../Cart/Cart';
import './Shop.css'


const Shop = () => {
    const [books, setbooks] = useState([]);
    const [cart, setcart] = useState([]);
    const [random, setRandom] = useState([]);

    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])


    const handleAddToCart = (book) => {
        const newCart = [...cart, book];
        setcart(newCart)
    }

    const handleChooseOneBtn = (cart) => {
        const chooseRandom = [...random, cart]
        setRandom(chooseRandom[Math.floor(Math.random() * random.length)])
        console.log(random)
    }

    const hendleChooseBtn = () => {
        setcart([])
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

                    <Cart
                        cart={cart}
                        handleChooseBtn={hendleChooseBtn}
                        handleChooseOneBtn={handleChooseOneBtn}
                        chooseRandom={random}

                    ></Cart>


                </div>
            </div>
        </div>
    )
};

export default Shop;