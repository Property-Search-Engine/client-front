import React from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../../common/HeaderComponent/HeaderComponent";
import Properties from "../../common/Properties/Properties";

export default function Results(props) {
  const { city } = useParams();
  return (
    <div className="app">
      <HeaderComponent text={"Results for " + city + "."} />
      <Properties />
    </div>
  );
}
