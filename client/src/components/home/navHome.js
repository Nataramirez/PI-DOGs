import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navHome.css'
import { connect } from 'react-redux';
import { getSearchBreedByName } from '../../actions/index'
import Breed from '../breed/breed'
import ImageDefault from '../../pictures/PictureDataBase.png'

function NavHome({ breedSearch, breedsLoaded, getSearchBreedByName }) { //copio mi estado global

    const [input, setInput] = useState({
        name: ''
    });
    const [breedLoaded, setbreedLoaded] = useState([]);

    const handleSubmit = (event) => {
        getSearchBreedByName(input)
        event.preventDefault();
    }

    function handleChange(event) {
        setInput(event.target.value)
    }

    return (
        <div className="container"> 
        <div className="grid-block">
            <nav className="navbar" >

                <label>
                    <input
                        type='text'
                        name='name'
                        autoComplete="off"
                        placeholder='Write here...'
                        value={input.name}
                        onChange={handleChange}
                    />
                    <button onClick={(e) => handleSubmit(e)} type='submit' >Search</button>
                </label>
                <br />
                <Link to='/dog'>
                    <button type="button">Add Breed</button>
                </Link>
            </nav>
            </div>        
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        breedSearch: state.breedSearch, // mi stado global
        breedsLoaded: state.breedLoaded
    }
}


export default connect(mapStateToProps, { getSearchBreedByName })(NavHome);