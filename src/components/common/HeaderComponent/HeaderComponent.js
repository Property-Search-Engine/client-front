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
        <div className="d-flex w-100">
          <img
            alt="Go back"
            onClick={handleClick}
            src="/assets/icons/left-arrow.svg"
            className="mr-4"
          ></img>
          <span className="w-75">{text}</span>
          <span className="w-25 cursor-pointer" onClick={handleHomeClick}>
            Home
          </span>
        </div>
      )}
    </div>
  );
}
