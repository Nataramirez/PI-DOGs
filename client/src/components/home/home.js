import React from 'react';
import NavHome from './navHome'
import Breed from '../breed/breed'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux'; 
import { getSearchAllBreed } from '../../actions/index.js';
import ImageDefault from '../../pictures/PictureDataBase.png';

function Home({ breedLoaded, getSearchAllBreed }) { // este breed viene de redux

  const [breedsLoaded, setbreedLoaded] = useState([]); // hasta el momento no se esta usando este estado local
  useEffect(() => { getSearchAllBreed() }, [getSearchAllBreed]);

  return (
    <div className="container">
      <nav>
        <NavHome />
      </nav>
      <div>
        {
          breedLoaded.map(breed => { //recorro mi estado global 
            return (
              <Breed name={breed.name} image={breed.image ? breed.image : ImageDefault } temperaments={breed.temperaments} />
            )
          }
          )
        }
      </div>
    </div>
  )



};

const mapStateToProps = (state) => {
  return {
    breedLoaded: state.breedLoaded //estado global 
  }
}

export default connect(mapStateToProps, { getSearchAllBreed })(Home) //TODO LO QUE PONGO EN EL CONNECT LO RECIBO POR PROPS 

