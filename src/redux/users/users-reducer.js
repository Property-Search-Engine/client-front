import UserTypes from './users.types'; 

export const UserInitialState = {
    isLoggingIn: false,
    loginError: null,
    isAuthenticated: false,

    isSigningUp: false,
    signUpError: null,

    currentUser: {
        firstname: null,
        lastname: null,
        email: null,
        token: null, 
    }
}; 

const UserReducer = (state = UserInitialState, action) => {
    switch (action.type) {
        case UserTypes.LOGIN_REQUEST: {
            return {
                ...state,
                isLoggingIn: true, 
                loginError: null,
            }; 
        }

        case UserTypes.LOGIN_SUCCESS: {
            return {
                ...state, 
                isLoggingIn: true, 
                loginError: null, 
                currentUser: {
                    firstname: action.payload.firstname,
                    lastname: action.payload.lastname,
                    email: action.payload.email,
                    token: action.payload.token,
                },
            }
        }; 

        case UserTypes.LOGIN_ERROR: {
            return {
                ...state, 
                isLoggingIn: false, 
                loginError: action.payload,
                isAuthenticated: false
            }
        }; 

        case UserTypes.SIGNUP_REQUEST: {
            return {
                ...state, 
                isSigningUp: true,
                signUpError: null,
            }
        }

        case UserTypes.SIGNUP_SUCCESS: {
            return {
                ...state,
                isSigningUp: true, 
                signUpError: null,
                currentUser: {
                    firstname: action.payload.firstname,
                    lastname: action.payload.lastname,
                    email: action.payload.email,
                    token: null,
                },
            }

        }

        case UserTypes.SIGNUP_ERROR: {
            return {
                ...state,
                isSigningUp: null,
                signUpError: action.payload
            }
        }
            
        default: {
            return state; 
        }
    
    }
}; 

export default UserReducer; 