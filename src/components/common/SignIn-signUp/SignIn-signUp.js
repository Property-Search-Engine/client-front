import React from "react";
import { Button } from "react-bootstrap";
import "./SignIn-signUp.scss"; 
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'; 

function SignInSignUp(props) {

  const {userState} = props; 

  return  (
    <div className="logIn-logOut">
      
      {userState.currentUser.token ? 
        (<div className="d-flex flex-row justify-content-end userContainer">
          <h4 className="welcome">Hello! {userState.currentUser.firstname}</h4>
          <Button className="w-25 logBtn">LogOut</Button>
        </div>)
        : 
        (<Link to='/login'><Button className="logBtn">           
          LogIn
        </Button></Link>)
      } 
      
    </div>
  );
}

const mapStateToProps = state => ({
  userState: state.userState
})

export default connect(mapStateToProps, null)(SignInSignUp); 


