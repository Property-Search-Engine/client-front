import React, { useState } from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Contact from "../Contact/Contact";
import PropertyCharacteristics from "../SinglePropertyDetails/PropertyCharacteristics/PropertyCharacteristics";
import "./Property.scss";

export default function Property(props) {
  const { property, isProperties } = props;
  const { price, bedRooms, bathRooms, surface, id } = property;

  const { number, street, city } = property.address;

  const [heartGrey, setheartGrey] = useState(true);

  const handleClick = (e) => {
    if (e.target.closest(".icon")) {
      setheartGrey(!heartGrey);
      return;
    }

    if (isProperties) {
    }
  };

  return (
    <div className="propertyContainer" onClick={handleClick} id={property._id}>
      <ImageCarousel property={property} />
      <div>
        <div
          className="d-flex flex-row justify-content-between detailsContainer"
          id={id}
        >
          <div className="details">
            <p className="address">
              {number} {street}
            </p>
            <p className="location">{city}</p>
            <p className="price">${price}</p>
          </div>
          <div className="icon">
            <img
              src={
                heartGrey
                  ? "/assets/icons/like.svg"
                  : "/assets/icons/like-red.svg"
              }
            ></img>
          </div>
        </div>
        <div className="d-flex flex-row propertyCharacteristics border-top">
          <PropertyCharacteristics
            beds={bedRooms}
            baths={bathRooms}
            m2={surface}
          />
          <Contact />
        </div>
      </div>
    </div>
  );
}
