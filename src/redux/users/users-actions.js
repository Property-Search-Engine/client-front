import UserTypes from './users.types'; 
import {
    signInWithEmailAndPassword, 
    firebaseSignout, 
    auth,
} from '../../firebase/firebase'; 

import { finalEndpoints } from '../../utils/endpoints'; 

export const loginRequest = () => ({
    type: UserTypes.LOGIN_REQUEST, 
}); 

export const loginError = message =>({
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
    }
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
}; 

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

export function signUp ({firstname, lastname, email, password}) {
    return async function signUpThunk (dispatch) {
      dispatch(signUpRequest()); 
      var myHeaders = new Headers();
    //   myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjJjMmVkODQ5YThkZTI3ZTI0NjFlNGJjM2VmMDZhYzdhYjc4OGQyMmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2FzYS1tZSIsImF1ZCI6ImNhc2EtbWUiLCJhdXRoX3RpbWUiOjE2MTI1NDA3NTksInVzZXJfaWQiOiJKUTB3Rk1YM1RsUGhLVzh3MHdvNVBQN1RXRm8yIiwic3ViIjoiSlEwd0ZNWDNUbFBoS1c4dzB3bzVQUDdUV0ZvMiIsImlhdCI6MTYxMjU0MDc1OSwiZXhwIjoxNjEyNTQ0MzU5LCJlbWFpbCI6InJvYmVydG8tcHJ1ZWJhQG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInJvYmVydG8tcHJ1ZWJhQG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.mhBeuZnEfdTj-x3VUO51X4gX-ed8RaWRuISeecTZpkoqaXkBpJo8cW71j9nm-2Q1p3ytG3z3DPALxlh9mP0FWqTcuIUizgkLWnLL7eO85AvdSIqw_v2p61ljTpNkz2P3XTte61FT4ApV-tK1L3xlugA3rvxKhcn83VwyTIlX4TN3cEDIeN49Aifb99Fi_NuZxsGHAHPEGcsucT-cLB2fHeenFpbeJ1rC5X-3NZ3o9XIA4pJ0MgnC5xrODPPlEnonMeiaFqxHkFg5PRbUDCxrpt6z5kd5tEUhEIX6j-wqNfhfN2c1Ag2yOEouebOnm5GOzmAV_qKZ2XJtZ0SKM8YWAA");
      myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({firstname, lastname, email, password});
      console.log(raw); 
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        // redirect: 'follow'
      };

      fetch("http://localhost:5000/user/register", requestOptions)
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
