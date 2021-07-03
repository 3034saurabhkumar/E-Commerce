import React from 'react';
import Rating from './Rating';

function Card (product) {
    return(
        <div key={product.id}>
            <div className="card">
                <a href={"/products/"+product.id}>
                    <img className="medium" src={product.image} alt={product.name} />
                </a>
                <div className="card-body">
                    <a href={`/products/${product.id}`}>
                        <h2>{product.name}</h2>
                    </a>
                    <Rating 
                        rating = {product.rating}
                        numReviews = {product.numReviews}
                    />
                    <div className="price">&#x20b9;
                        {product.price}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;