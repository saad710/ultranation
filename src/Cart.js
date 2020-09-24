import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }

    const totalPopulation = cart.reduce((totalPopulation,country) => totalPopulation + country.population, 0)


    return (
        
        <div>
            <h3>this is cart: {cart.length}</h3>
            <p>Total Population: {totalPopulation}</p>
            
        </div>
    );
 };

export default Cart;