import React from 'react';
import { Link } from 'react-router-dom';
import './navHome.css'
import { connect } from 'react-redux';
import { getSearchBreedByName } from '../../actions/index'

function NavHome({ breedLoaded, getSearchBreedByName }) {
    return (
        <div className="grid-block">
            <nav className="navbar">
                <Link to='/dogs?name='>
                    <form>
                        <label>
                            <input
                                type='text'
                               
                                placeholder='Write here...'
                            //value={}
                            //onChange={}
                            />
                            <button type='submit'>Search</button>
                        </label>
                    </form>
                </Link>
                <br />
                <Link to='/dog'>
                    <button type="button">Add Breed</button>
                </Link>
            </nav>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        breedLoaded: state.breedLoaded
    }
}

export default connect(mapStateToProps, { getSearchBreedByName })(NavHome);