import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flag, population, region} = props.allInfo;
    const countryStyle = {border: "3px solid green" , margin: "10px", padding: "10px"}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style = {countryStyle} className = "country-info">
          
            <img className = "flag" src={flag} alt=""/>
            <h2>{name}</h2>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button onClick = {() => handleAddCountry(props.allInfo)}>Add Country</button>
            
        </div>
    );
};

export default Country;