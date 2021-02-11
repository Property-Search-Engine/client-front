import { combineReducers } from 'redux'; 
import PropertyReducer from './redux/properties/property-reducer'; 

const rootReducer = combineReducers({
    propertiesState: PropertyReducer
})

export default rootReducer; 