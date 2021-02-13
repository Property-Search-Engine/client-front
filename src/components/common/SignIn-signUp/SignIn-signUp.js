import React from "react";
import { Button } from "react-bootstrap";
import "./SignIn-signUp.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../../redux/users/users-actions";

function SignInSignUp(props) {
  const { userState, signout } = props;

  function handleSignout() {
    signout();
  }

  return (
    <div className="logIn-logOut">
      {userState.currentUser.token ? (
        <div className="d-flex flex-row justify-content-end userContainer">
          <h4 className="welcome">Hello! {userState.currentUser.firstname}</h4>
          <Button onClick={handleSignout} className="w-25 logBtn">
            LogOut
          </Button>
        </div>
      ) : (
        <Link to="/login">
          <Button className="logBtn">LogIn</Button>
        </Link>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.userState,
});

const mapDispathToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(SignInSignUp);
