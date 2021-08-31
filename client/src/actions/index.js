import {ADD_BREED_NEW} from './actions'
import {SEARCH_BREED_BY_NAME} from './actions'
import {SEARCH_BREED_BY_ID} from './actions'
import {SEARCH_ALL_BREED} from './actions'
import {ORDER_BREED_NAME_ASC} from './actions'
import {ORDER_BREED_NAME_DESC} from './actions'
import {ORDER_BREED_WEIGHT_ASC} from './actions'
import {ORDER_BREED_WEIGHT_DESC} from './actions'

// post/dog
export function addBreedNew(payload) {
    return {
        type: ADD_BREED_NEW,
        payload
    }
};

// get/ query name
export function getSearchBreedByName(name) {
    return function (dispatch) {
        fetch(`http://localhost:3001/dogs?name=${name}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: SEARCH_BREED_BY_NAME,
                    payload: json
                })
            })
    }
}

// get/ params id_dog
export function getSearchBreedById(id_dog) {
    return function (dispatch) {
        fetch(`http://localhost:3001/dogs/${id_dog}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: SEARCH_BREED_BY_ID,
                    payload: json
                })
            })
    }
}

// get/dogs 
export function getSearchAllBreed() {
    return function (dispatch) {
        fetch(`http://localhost:3001/dogs`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: SEARCH_ALL_BREED,
                    payload: json
                })
            })
    }
}

export function orderBreedNameAsc() {
    return {
        type: ORDER_BREED_NAME_ASC,
        
    }
}

export function orderBreedNameDesc() {
    return {
        type: ORDER_BREED_NAME_DESC,
    }
}

export function orderBreedWeightAsc() {
    return {
        type: ORDER_BREED_WEIGHT_ASC,
    }
}

export function orderBreedWeightDesc() {
    return {
        type: ORDER_BREED_WEIGHT_DESC,
    }
}