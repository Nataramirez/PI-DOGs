
import { ADD_BREED_NEW } from '../actions/actions';
import { SEARCH_BREED_BY_NAME } from '../actions/actions'
import { SEARCH_BREED_BY_ID } from '../actions/actions'
import { SEARCH_ALL_BREED } from '../actions/actions'
import { ORDER_BREED_NAME_ASC } from '../actions/actions'
import { ORDER_BREED_NAME_DESC } from '../actions/actions'
import { ORDER_BREED_WEIGHT_ASC } from '../actions/actions'
import { ORDER_BREED_WEIGHT_DESC } from '../actions/actions'


const inicialState = {
  breeds: [],
  breedLoaded: [],
  breedDetail: {}
};

const breedsReducer = (state = inicialState, action) => {
  switch (action.type) {

    // post/dog
    case ADD_BREED_NEW:
      return {
        ...state,
        breeds: state.breeds.concat(action.payload)
      }

    // get/query name
    case SEARCH_BREED_BY_NAME:
      return {
        ...state,
        breedLoaded: action.payload.Search
      }

    // get/params id_dog
    case SEARCH_BREED_BY_ID:
      return {
        ...state,
        breedDetail: action.payload
      }

    // get/dogs
    case SEARCH_ALL_BREED:
      return {
        ...state,
        breedLoaded: action.payload
      }

    case ORDER_BREED_NAME_ASC:
      return {
        ...state,
        breeds: state.breeds // ------- ACA TENGO QUE HACER UN QUICKSORT AL STATE.BREEDS
      }

    case ORDER_BREED_NAME_DESC:
      return ('lista de razas ordenadas por nombre DESC')

    case ORDER_BREED_WEIGHT_ASC:
      return ('lista de razas ordenadas por peso ASC')

    case ORDER_BREED_WEIGHT_DESC:
      return ('lista de razas ordenada por peso DESC')

    default:
      return state

  }
}

export default breedsReducer;