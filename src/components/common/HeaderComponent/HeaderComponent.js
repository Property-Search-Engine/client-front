import React from "react";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import SignInSignUp from "../SignIn-signUp/SignIn-signUp";

export default function HeaderComponent() {
  return (
    <div className="navHeader">
      <Button className="menuHamburger">Menu</Button>

      <Image className="searchIcon" src="/assets/icons/search.svg"></Image>

      <SignInSignUp />
    </div>
  );
}
