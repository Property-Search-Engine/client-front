import React from "react";
import SignInSignUp from "../SignIn-signUp/SignIn-signUp";
import Menu from "../Menu/Menu";
import "./HeaderComponent.scss";
import { useHistory } from "react-router-dom";
import { Link } from "@material-ui/core";
import ROUTES from "../../../utils/routes";

export default function HeaderComponent(props) {
  const { main, text } = props;
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }
  function handleHomeClick(e) {
    history.push(ROUTES.MAIN);
  }
  return (
    <div className="navHeader">
      {main ? (
        <>
          <Menu />
          <SignInSignUp />
        </>
      ) : (
        <div className="d-flex w-100 justify-content-between align-items-center">
          <img onClick={handleClick} src="/assets/icons/left-arrow.svg"></img>
          <div className="d-flex justify-content-around align-items-center w-75">
            <span className="text-secondary">{text}</span>
            <span role="button" className="homeClick" onClick={handleHomeClick}>
              Home
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
