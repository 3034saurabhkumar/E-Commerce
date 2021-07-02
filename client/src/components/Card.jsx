import React from 'react';

function Card (product) {
    return(
        <div key={product.id}>
            <div className="card">
                <a href={`/products/${product.id}`}>
                    <img className="medium" src={product.image} alt={product.name} />
                </a>
                <div className="card-body">
                    <a href={`/products/${product.id}`}>
                        <h2>{product.name}</h2>
                    </a>
                    <div className="rating">
                        <span> <em className="fa fa-star"></em> </span>
                        <span> <em className="fa fa-star"></em> </span>
                        <span> <em className="fa fa-star"></em> </span>
                        <span> <em className="fa fa-star"></em> </span>
                        <span> <em className="fa fa-star"></em> </span>
                    </div>
                    <div className="price">
                        {product.price}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;