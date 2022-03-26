import React, { useEffect, useState } from 'react';
import Book from '../Books/Book';

const Shop = () => {
    const [books, setbooks] = useState([]);

    useEffect(() => {
        fetch("books.json")
    }, [])

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <Book></Book>
                </div>
                <div class="col-md-3">
                    <h3>this is cart</h3>
                </div>
            </div>
        </div>
    )
};

export default Shop;