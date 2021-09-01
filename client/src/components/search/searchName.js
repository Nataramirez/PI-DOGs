import React from 'react';
import NavHome from '../home/navHome'
import Breed from '../breed/breed'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react';
import { getSearchAllBreed } from '../../actions/index.js';
import ImageDefault from '../../pictures/PictureDataBase.png';

function SearchName({ breedSearch }) {

    return (
        <div className="container">
            <nav>
                <NavHome />
            </nav>
            <div>
                {
                    breedSearch.map((breed, i) => {
                        return (
                            <Breed key={i} name={breed.name} image={breed.image ? breed.image : ImageDefault } temperaments={breed.temperaments} />
                        )
                    })
                }
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        breedSearch: state.breedSearch
    }
}

export default connect(mapStateToProps, { getSearchAllBreed })(SearchName)