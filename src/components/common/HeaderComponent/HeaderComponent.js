import React from "react";
import SignInSignUp from "../SignIn-signUp/SignIn-signUp";
import Menu from "../Menu/Menu";
import "./HeaderComponent.scss"; 

export default function HeaderComponent() {
  return (
    <div className="navHeader">
      <Menu />
      <SignInSignUp />
    </div>
  );
}
