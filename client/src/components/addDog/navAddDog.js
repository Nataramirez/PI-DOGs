import React from 'react';
import AddDog from '../addDog/addDog'
import { Link } from 'react-router-dom';

export function AddDogs() {
  return (
    <div>
      <nav className='grid-container'>
        <h3>¡Add your breed new here!</h3>
        <nav>
          <Link to='/home'>
            <button type="button">Home</button>
          </Link>

        </nav>


      </nav>


    </div>
  )
};

export default AddDogs;