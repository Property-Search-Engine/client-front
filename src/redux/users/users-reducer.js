import UserTypes from "./users.types";

export const UserInitialState = {
  isLoggingIn: false,
  loginError: null,
  isAuthenticated: false,
  isSigningOut: false,
  isSignOut: true,
  signOutError: true,
  currentUser: {
    firstname: null,
    lastname: null,
    email: null,
    token: null,
  },
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
        isAuthenticated: true,
        isSignOut: false,
        currentUser: {
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email,
          token: action.payload.token,
        },
      };
    }

    case UserTypes.LOGIN_ERROR: {
      return {
        ...state,
        isLoggingIn: false,
        loginError: action.payload,
        isAuthenticated: false,
      };
    }

    case UserTypes.SIGNOUT_REQUEST: {
      return {
        ...state,
        isSigningOut: true,
        signOutError: null,
      };
    }

    case UserTypes.SIGNOUT_ERROR: {
      return {
        ...state,
        isSigningOut: false,
        signOutError: action.payload,
      };
    }

    case UserTypes.SIGNOUT_SUCCESS: {
      return {
        ...state,
        isSigningOut: false,
        signOutError: null,
        isSignOut: true,
        isAuthenticated: false,
        currentUser: {
          firstname: null,
          lastname: null,
          email: null,
          token: null,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default UserReducer;
