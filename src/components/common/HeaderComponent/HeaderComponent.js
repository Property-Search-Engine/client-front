import React from "react";
import SignInSignUp from "../SignIn-signUp/SignIn-signUp";
import Menu from "../Menu/Menu";
import "./HeaderComponent.scss";
import { useHistory } from "react-router-dom";
import { Link } from "@material-ui/core";
import ROUTES from "../../../utils/routes";

export default function HeaderComponent(props) {
  const { main } = props;
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <div className="navHeader">
      {main ? (
        <>
          <Menu />
          <SignInSignUp />
        </>
      ) : (
        <div className="d-flex">
          <img onClick={handleClick} src="/assets/icons/left-arrow.svg"></img>
          <span> 47 vancouver </span> <Link to={ROUTES.MAIN}>Home</Link>
        </div>
      )}
    </div>
  );
}
