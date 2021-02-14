import React, { useState, useRef } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import { Button, Form, Card } from "react-bootstrap";
import ROUTES from "../../../utils/routes";
import "./Signup.scss";

import { connect } from 'react-redux'; 
import { signUp } from '../../../redux/users/users-actions'; 

const Signup = (props) => {

  const { signUp, userState } = props;
  const history = useHistory(); 

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmedPassword, setconfirmedPassword] = useState(""); 

  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const repeatPasswordRef = useRef();

  if (userState.currentUser.token !== null && !userState.loginError) {
    history.goBack()
  }


  function handleSubmit(e) {
    e.preventDefault() 

    if(firstname !== "" && lastname !== "" && email !== "" && password !== "" && confirmedPassword !== "") {
      if(password === confirmedPassword) {
        signUp({firstname, lastname, email, password}); 
      }
    }

  }

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
              <h2 className="text-center mb-4">Sign up</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="firstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} required />
                </Form.Group>
                <Form.Group id="lastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" value={lastname} onChange={(e) => setlastname(e.target.value)} required />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setemail(e.target.value)} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                </Form.Group>
                <Form.Group id="passwordConfirm">
                  <Form.Label>Repeat Password</Form.Label>
                  <Form.Control type="password" value={confirmedPassword} onChange={(e) => setconfirmedPassword(e.target.value)} required/>
                </Form.Group>
                <Button className="w-100 signup" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to={ROUTES.LOGIN}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  userState: state.userState
})

const mapDispathToProps = dispatch => {
  return {
    signUp: ({firstname, lastname, email, password}) => dispatch(signUp({firstname, lastname, email, password}))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Signup);
