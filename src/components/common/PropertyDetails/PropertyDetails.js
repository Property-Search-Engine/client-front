import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { camelCaseStringToCapitalizeString } from "../../../utils/helpers";

import { fetchPropertyDetails } from "../../../utils/oneComponentFetchers";

import HeaderComponent from "../HeaderComponent/HeaderComponent";
import Property from "../Property/Property";

import "./PropertyDetails.scss";

function PropertyDetails(props) {
  const history = useHistory();
  const { id } = useParams();
  const { properties } = props.propertiesData;
  const { userState } = props;
  const property = properties.filter((property) => id === property._id)[0];

  const [fullDataProperty, setFullDataProperty] = useState(
    fetchPropertyDetails(property._id)
  );
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const propertyDetails = await fetchPropertyDetails(property._id);
        setFullDataProperty(propertyDetails);
        setIsFetched(true);
      } catch (error) {
        throw new Error("Error fetching property details");
      }
    }

    if (!isFetched) {
      fetchDetails();
      setIsFetched(true);
      return;
    }

    if (
      typeof fullDataProperty !== "object" ||
      Object.keys(fullDataProperty).length < 1
    ) {
      fetchDetails();
    }
  }, []);

  function handleClick(e) {
    e.preventDefault();
    if (!userState.isAuthenticated) {
      history.push("/login");
    } else {
      history.push(`/bookings/${id}`);
    }
  }

  return (
    <div className="app">
      <HeaderComponent text={property.address.street} />
      <Property isProperties={false} property={property} />
      {(typeof fullDataProperty !== "object" ||
        Object.keys(fullDataProperty).length) < 1 ? (
        "Loading..."
      ) : (
        <div className="propertyDetails">
          <p>{fullDataProperty.description}</p>
          <h4>Main Features</h4>
          <ul>
            {fullDataProperty.filters &&
              fullDataProperty.filters.length > 0 &&
              fullDataProperty.filters.map((element) => (
                <li>&#8594;{camelCaseStringToCapitalizeString(element)}</li>
              ))}
            {fullDataProperty.condition && (
              <li>
                &#8594;Condition:
                {camelCaseStringToCapitalizeString(fullDataProperty.condition)}
              </li>
            )}
            {fullDataProperty.equipment && (
              <li>
                &#8594;Equipment:
                {camelCaseStringToCapitalizeString(fullDataProperty.equipment)}
              </li>
            )}
          </ul>
          <div className="buttonContainer">
            <button onClick={handleClick}>Book a visit</button>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    propertiesData: state.propertiesState,
    userState: state.userState,
  };
};

export default connect(mapStateToProps, null)(PropertyDetails);
