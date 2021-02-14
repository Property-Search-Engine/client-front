import React from "react";
import { connect } from "react-redux";
import Property from "../Property/Property";
import {
  propertyEx,
  propertyEx2,
  propertyEx3,
} from "../../../utils/mockOfProperties";
import { camelCaseStringToCapitalizeString } from "../../../utils/helpers";
import "./PropertyDetails.scss";
import { useParams } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

function PropertyDetails(props) {
  const { id } = useParams();
  const { properties } = props.propertiesData;
  const property = properties.filter((property) => id === property._id)[0];
  function handleClick() {}
  return (
    <div className="app">
      <HeaderComponent text={property.address.street} />
      <Property isProperties={false} property={property} />
      <div className="propertyDetails">
        <p>{property.description}</p>
        <h4>Main Features</h4>
        <ul>
          {property.filters &&
            property.filters.map((element) => (
              <li>&#8594;{camelCaseStringToCapitalizeString(element)}</li>
            ))}
          {property.condition && (
            <li>
              &#8594;Condition:
              {camelCaseStringToCapitalizeString(property.condition)}
            </li>
          )}
          {property.equipment && (
            <li>
              &#8594;Equipment:
              {camelCaseStringToCapitalizeString(property.equipment)}
            </li>
          )}
        </ul>
        <div className="buttonContainer">
          <button>Book a visit</button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    propertiesData: state.propertiesState,
  };
};

export default connect(mapStateToProps, null)(PropertyDetails);
