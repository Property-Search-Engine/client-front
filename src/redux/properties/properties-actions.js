import axios from 'axios'; 
import {  
    FETCH_PROPERTIES_REQUEST, 
    FETCH_PROPERTIES_SUCCESS, 
    FETCH_PROPERTIES_FAILURE  
} from './property-types'; 

export const fetchPropertiesRequest = () => {
    return {
        type: FETCH_PROPERTIES_REQUEST
    }
}

const fetchPropertiesSuccess = properties => {
    return {
        type: FETCH_PROPERTIES_SUCCESS,
        payload: properties
    }
}

const fetchPropertiesFailure = error => {
    return {
        type: FETCH_PROPERTIES_FAILURE,
        payload: error
    }
} 

export const fetchProperties = () => {
    return (dispatch) => {
        dispatch(fetchPropertiesRequest); 
        axios.get("https://jsonplaceholder.typicode.com/users") 
        .then(response => {
            const properties = response.data
            dispatch(fetchPropertiesSuccess(properties))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchPropertiesFailure(errorMsg))
        })
    }
}