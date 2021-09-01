import React from 'react';
import NavHome from './navHome'
import Breed from '../breed/breed'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux'; 
import { getSearchAllBreed } from '../../actions/index.js';
import ImageDefault from '../../pictures/PictureDataBase.png';

function Home({ breedLoaded, breedSearch, getSearchAllBreed }) { // este breed viene de redux

  const [breedsLoaded, setbreedLoaded] = useState([]); // hasta el momento no se esta usando este estado local
  useEffect(() => { getSearchAllBreed() }, [getSearchAllBreed]);

  //function si lista * name .lenght === 0 imprimir 

  return (
    <div className="container">
      <nav>
        <NavHome />
      </nav>
      <div>
        { //         ()
          breedLoaded && breedSearch < 1 ? breedLoaded.map((breed, i) => {
            return (
              <Breed key={i} name={breed.name} image={breed.image ? breed.image : ImageDefault } temperaments={breed.temperaments} /> 
            )
          }) : breedLoaded && breedSearch ?
          breedSearch.map((breed, i) => { //recorro mi estado global 
            return ( 
              <Breed key={i} name={breed.name} image={breed.image ? breed.image : ImageDefault } temperaments={breed.temperaments} />
            )
          }) : null
        }
      </div>
    </div>
  )



};

const mapStateToProps = (state) => {
  return {
    breedLoaded: state.breedLoaded, //estado global todas las realizarse
    breedSearch: state.breedSearch
  }
}

export default connect(mapStateToProps, { getSearchAllBreed })(Home) //TODO LO QUE PONGO EN EL CONNECT LO RECIBO POR PROPS 

