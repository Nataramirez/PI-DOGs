import React from 'react';
import './breed.css'

export default function Breed({ name, image, temperaments }) {
    return (
        <div className="breed-container">
            <h2>{name}</h2>
            <img className="img-responsive" weight="300" height="200" src={image} alt="dog breed description picture" />
            <p className="text-responsive" >{temperaments}</p>
        </div>
    )
};

