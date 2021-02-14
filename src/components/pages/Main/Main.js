import React, { useState } from "react";
import Properties from "../../common/Properties/Properties";
import PropertyDetails from "../../common/PropertyDetails/PropertyDetails";
import BookingForm from "../../common/BookingForm/BookingForm";
// import Bookings from "../../common/Bookings/Bookings";

import {
  propertyEx,
  propertyEx2,
  propertyEx3,
} from "../../../utils/mockOfProperties";
import Search from "../../common/Search/Search";
import HeaderComponent from "../../common/HeaderComponent/HeaderComponent";

export default function Main() {
  const properties = [propertyEx, propertyEx2, propertyEx3];

  return (
    <div className="mainContainer">
      <HeaderComponent main />
      <Search />
      <Properties properties={properties} />
    </div>
  );
}
