import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ROUTES from "../../../utils/routes";
import "./Login.scss";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="row my-auto mx-auto h-100 justify-content-center align-items-sm-center">
      <div className="card px-5 py-5">
        <form className="mt-4 text-center">
          <h4>Log In.</h4>
          <div className="mt-3 inputbox">
            <input
              type="text"
              className="form-control my-2"
              name=""
              placeholder="Email"
            />
            <i className="fa fa-user"></i>
          </div>
          <div className="inputbox">
            <input
              type="text"
              className="form-control my-2"
              name=""
              placeholder="Password"
            />
            <i className="fa fa-lock"></i>
          </div>
        </form>
        <div className="d-flex justify-content-between">
          <div>
            <span>Not registered yet? </span>
            <a href="#" className="forgot">
              Sign up
            </a>
          </div>
        </div>
        <div className="mt-2">
          <Button className="btn btn-block login">Log In</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
