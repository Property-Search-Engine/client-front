import React from "react";
import { Button } from "react-bootstrap";
import "./SignIn-signUp.scss"; 
import { Link } from 'react-router-dom'; 

export default function SignInSignUp() {
  return  (
    <div className="logIn-logOut">
      <Button className="logBtn">
          <Link to='/login' >LogIn/SignOut</Link>
      </Button>
    </div>
  );
}
