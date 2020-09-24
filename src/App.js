import React, { useEffect, useState } from 'react';

import './App.css';
import Cart from './Cart';
import Country from './Country';

function App() {
  const [countries , setCountries] = useState([]);
  const [cart , setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
   .then(res => res.json())
   .then(data => {
    //console.log(data);
    setCountries(data);
   })
   .catch(error => console.log(error))
   }, [])

   const handleAddCountry = (allInfo) => {
    const newCart = [...cart , allInfo];
    setCart(newCart);
   }
   
  return (
     
    <div className="App">
      <h1>Country Loaded : {countries.length}</h1>
      <h3>Country Added : {cart.length}</h3>
      <Cart cart = {cart}></Cart>
      
      {
       countries.map(country => <Country allInfo = {country} handleAddCountry = {handleAddCountry} key = {country.alpha3Code}> </Country> )
      }
      
     

    </div>
  );
}

export default App;
