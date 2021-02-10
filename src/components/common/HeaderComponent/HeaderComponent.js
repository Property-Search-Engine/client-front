import React from "react";
import "../HeaderComponent/HeaderComponent.scss";
//import Menu from "../Menu/Menu";
import MiniDrawer from "../Drawer/Drawer"
export default function HeaderComponent() {
  return (
    <div className="navHeader">
      {/*
      <Image className="searchIcon" src="/assets/icons/search.svg"></Image>
      <Menu />
      */}
      <MiniDrawer />
    </div>
  );
}
