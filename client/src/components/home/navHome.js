import React from 'react';
import { Link } from 'react-router-dom';
import NavAddDog from '../addDog/navAddDog'

function AddDog() {
    return (
        <div className="grid-block">
            <nav>
             
                <Link to='/add'>
                    <button type="button">Add Breed</button>
                </Link>
            </nav>
        </div>
    );
}

export default AddDog;