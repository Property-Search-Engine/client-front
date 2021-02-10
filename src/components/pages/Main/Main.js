import React, { useState } from "react";
import Properties from "../../common/Properties/Properties";
import PropertyDetails from "../../common/PropertyDetails/PropertyDetails";
import Bookings from "../../common/Bookings/Bookings";
import {
  propertyEx,
  propertyEx2,
  propertyEx3,
} from "../../../utils/mockOfProperties";

export default function Main() {
  const [main, setMain] = useState(true);
  const [singlePropertyId, setsinglePropertyId] = useState("");
  const properties = [propertyEx, propertyEx2, propertyEx3];

  return (
    <div className="mainContainer">
      <Bookings />
      {main ? (
        <Properties
          properties={properties}
          setMain={setMain}
          setsinglePropertyId={setsinglePropertyId}
        />
      ) : (
        <PropertyDetails setMain={setMain} id={singlePropertyId} />
      )}
    </div>
  );
}
