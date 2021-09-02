import React from 'react';
import AddDog from '../addDog/addDog'
import { Link } from 'react-router-dom';

export function AddDogs() {
  return (
    <div className="container">
      <nav className='grid-container'>
        <h3>¡Add your breed here!</h3>
          <Link to='/dogs'>
            <button type="button">Home</button>
          </Link>      
      </nav>
    </div>
  )
};

export default AddDogs;