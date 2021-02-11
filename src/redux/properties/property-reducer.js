import { FETCH_PROPERTIES_FAILURE, FETCH_PROPERTIES_REQUEST, FETCH_PROPERTIES_SUCCESS } from "./property-types"

const initialState = {
    loading: false,
    properties: [], 
    error: ''
}

const PropertiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROPERTIES_REQUEST: 
            return {
                ...state, 
                loading: true
            }
        case FETCH_PROPERTIES_SUCCESS: 
            return {
                loading: false, 
                properties: action.payload,
                error: ''
            }
        case FETCH_PROPERTIES_FAILURE: 
            return {
                loading: false,
                properties: [], 
                error: action.payload
            }
        
        default: return state
    }
}

export default PropertiesReducer; 