import React, { useEffect, useState } from 'react';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import axios from 'axios';
import Card from '../Card';

function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async()=> {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch(err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    },[]);
    return(
        <div>
            {
                loading? <LoadingBox />
                :
                error? <MessageBox varient="danger">{error}</MessageBox>
                :
                <div className="row center">
                    {
                        products.map((product => {
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
            }
        </div>
    );
}

export default HomeScreen;