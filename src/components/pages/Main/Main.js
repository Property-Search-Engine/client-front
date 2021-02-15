import React from "react";

import Properties from "../../common/Properties/Properties";
import Search from "../../common/Search/Search";
import HeaderComponent from "../../common/HeaderComponent/HeaderComponent";

export default function Main() {
  return (
    <div className="mainContainer">
      <HeaderComponent main />
      <Search />
      <Properties />
    </div>
  );
}
