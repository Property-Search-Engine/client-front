import React, { useState, useRef } from "react";
import { Redirect, Link } from "react-router-dom";
import { Button, Form, Card } from "react-bootstrap";
import ROUTES from "../../../utils/routes";
import "./Login.scss";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

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
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button className="w-100 login" type="submit">
                  Log In
                </Button>
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

export default Login;
