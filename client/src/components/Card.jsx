import React from 'react';
import data from '../data';

function Card () {
    return(
        <main>
            {
                data.products.map((product => { 
                    return(
                        <div key={product._id} className="row center">
                            <div className="card">
                                <a href={`/products/${product._id}`}>
                                    <img className="medium" src={product.image} alt={product.name} />
                                </a>
                                <div className="card-body">
                                    <a href={`/products/${product._id}`}>
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
                    )
                }))
            }
        </main>
    );
}

export default Card;