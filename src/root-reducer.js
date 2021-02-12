import { combineReducers } from 'redux'; 
import PropertyReducer from './redux/properties/property-reducer';
import UserReducer from './redux/users/users-reducer';  

const rootReducer = combineReducers({
    propertiesState: PropertyReducer,
    userState: UserReducer
})

export default rootReducer; 