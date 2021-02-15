import React, { useState } from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Contact from "../Contact/Contact";
import PropertyCharacteristics from "../SinglePropertyDetails/PropertyCharacteristics/PropertyCharacteristics";
import "./Property.scss";
import { useHistory } from "react-router-dom";

export default function Property(props) {
  const history = useHistory();
  const { property, isProperties } = props;
  console.log(property);
  const { price, bedRooms, bathRooms, surface, _id } = property;

  const { number, street, city } = property.address;

  const [heartGrey, setheartGrey] = useState(true);

  const handleClick = (e) => {
    if (e.target.closest(".icon")) {
      setheartGrey(!heartGrey);
      return;
    }

    if (isProperties) {
      history.push(`/details/${_id}`);
    }
  };

  return (
    <div
      className="propertyContainer shadow p-3 mb-5 bg-white rounded"
      onClick={handleClick}
      id={_id}
    >
      <ImageCarousel property={property} />
      <div>
        <div
          className="d-flex flex-row justify-content-between detailsContainer"
          id={_id}
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
