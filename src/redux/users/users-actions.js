import UserTypes from "./users.types";
import {
  signInWithEmailAndPassword,
  firebaseSignout,
  auth,
} from "../../firebase/firebase";

import { finalEndpoints } from "../../utils/endpoints";

export const loginRequest = () => ({
  type: UserTypes.LOGIN_REQUEST,
});

export const loginError = (message) => ({
  type: UserTypes.LOGIN_ERROR,
  payload: message,
});

export const loginSuccess = ({ firstname, lastname, email, phone }, token) => ({
  type: UserTypes.LOGIN_SUCCESS,
  payload: {
    firstname,
    lastname,
    email,
    phone,
    token,
  },
});

export const signUpRequest = () => ({
    type: UserTypes.SIGNUP_REQUEST, 
})

export const signUpSuccess = (data) => ({
    type: UserTypes.SIGNUP_SUCCESS, 
    payload: data
}); 

export const signUpError = message => ({
    type: UserTypes.SIGNUP_ERROR, 
    payload: message
})

export const signoutRequest = () => ({
    type: UserTypes.SIGNOUT_REQUEST,
  });
  
  export const signoutError = (message) => ({
    type: UserTypes.SIGNOUT_REQUEST,
    payload: message,
  });
  
  export const signoutSuccess = () => ({
    type: UserTypes.SIGNOUT_SUCCESS,
  });

export function login(email, password) {
    return async function loginThunk(dispatch) {
        dispatch(loginRequest());  
        var res; 
        try {
            res = await signInWithEmailAndPassword(email, password);
            const token = await auth.currentUser.getIdToken();  
            const loggedInUser = await gatherUserInfoByToken(token); 
            dispatch(loginSuccess(loggedInUser, token)); 
        }
        catch (error) {
            dispatch(loginError(error.message)); 
        }
    }
}

async function gatherUserInfoByToken(token) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  try {
    const res = await fetch(finalEndpoints.login, {
      method: "POST",
      headers: new Headers({ Authorization: "Bearer " + token }),
    });
    const user = await res.json();
    return user.data;
  } catch (error) {
    return error.message;
  }
}

export function signout() {
  return async function logoutThunk(dispatch) {
    dispatch(signoutRequest());
    try {
      await firebaseSignout();
      dispatch(signoutSuccess());
    } catch (error) {
      dispatch(signoutError("Missing auth token"));
    }
  };
}

export function signUp ({firstname, lastname, email, password}) {
    return async function signUpThunk (dispatch) {
      dispatch(signUpRequest()); 
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({firstname, lastname, email, password});
      console.log(raw); 
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };

      fetch(finalEndpoints.register, requestOptions)
          .then(response => response.json())
          .then(result => {
              console.log(result)
              dispatch(signUpSuccess(result.data))
              dispatch(login(email, password))
          })
          .catch(error => {
              console.log('error', error)
              dispatch(signUpError(error.message));
          });

    }
}
