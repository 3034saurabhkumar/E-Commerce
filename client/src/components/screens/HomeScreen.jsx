import React from 'react';
import Card from '../Card';
import data from '../../data';

function HomeScreen() {
    return(
        <div className="row center">
            {
                data.products.map((product => {
                    return(
                        <Card 
                            key = {product._id}
                            id = {product._id}
                            name={product.name} 
                            image={product.image}
                            price={product.price}
                            rating={product.rating}
                            numReviews={product.numReviews}
                        />
                    );
                }))
            }
        </div>
    );
}

export default HomeScreen;