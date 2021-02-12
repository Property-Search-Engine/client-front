import React, { useState, useRef } from "react";
import { Redirect, Link } from "react-router-dom";
import { Button, Form, Card } from "react-bootstrap";
import ROUTES from "../../../utils/routes";
import "./Signup.scss";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();

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
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="passwordConfirm">
                  <Form.Label>Repeat Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={repeatPasswordRef}
                    required
                  />
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

export default Signup;
