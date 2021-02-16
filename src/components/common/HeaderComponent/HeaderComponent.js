import React from "react";
import { useHistory } from "react-router-dom";

import ROUTES from "../../../utils/routes";

import DrawerMenu from "../Drawer/Drawer";
import SignInSignUp from "../SignIn-signUp/SignIn-signUp";

import "./HeaderComponent.scss";

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
          <DrawerMenu />
          <SignInSignUp />
        </>
      ) : (
        <div className="d-flex w-100 justify-content-between align-items-center">
          <img
            alt="Go back"
            onClick={handleClick}
            src="/assets/icons/left-arrow.svg"
            className="mr-4"
          ></img>
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
