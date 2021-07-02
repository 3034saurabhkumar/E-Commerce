import React from 'react';
import Header from './Header'
import Card from './Card'
import Footer from './Footer'
import data from '../data';

function App() {
  return (
    <div className="grid-container">
        <Header />
        <main>
            <div className="row center">
                {
                    data.products.map((product => {
                        return(
                            <Card 
                                key = {product._id}
                                name={product.name} 
                                image={product.image}
                                price={product.price}
                            />
                        );
                    }))
                }
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
