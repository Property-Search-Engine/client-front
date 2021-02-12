import React, { useState, useRef } from "react";
import { Redirect, Link } from "react-router-dom";
import { Button, Form, Card } from "react-bootstrap";
import ROUTES from "../../../utils/routes";

import { connect } from 'react-redux'; 
import {login} from '../../../redux/users/users-actions'; 

import "./Login.scss";

const Login = (props) => {
  
  const {login, userState} = props; 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();


  function handleSubmit(e) {
    e.preventDefault()

    if(email !== "" && password !== "") {
      login(email, password); 
    } 
  }; 


  return (
    <>
      <div className="d-flex flex-column h-100">
        <div className="my-auto">
          <div className="mb-4">
            <Link to="/">
              <img src="./assets/icons/left-arrow.svg" />
            </Link>
          </div>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Button className="w-100 login" type="submit">
                  Log In
                </Button>
                {userState.loginError && (
                <div className="bg-dark p-3 mt-3">
                  <p className="text-white mb-0">{userState.loginError}</p>
                </div>
              )}
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Not registered yet? <Link to={ROUTES.SIGNUP}>Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  userState: state.userState
}); 


  const mapDispathToProps = dispatch => {
    return {
      login: (email, password) => dispatch(login(email, password))
    }
  }

export default connect(mapStateToProps, mapDispathToProps)(Login);
