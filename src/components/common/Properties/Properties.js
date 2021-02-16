import React from "react";
import { connect } from "react-redux";

import { fetchProperties } from "../../../redux/properties/properties-actions";

import Property from "../Property/Property";

import "./Properties.scss";

function Properties(props) {
  const { fetchProperties, propertiesData } = props;
  const { properties, firstCall, filters } = propertiesData;

  if (firstCall) {
    fetchProperties(filters);
  }

  if (propertiesData.loading)
    return <div className="w-100 text-center">Loading...</div>;

  return (
    <div className="propertyList">
      {properties.map((propertyMapped, i) => {
        return (
          <Property
            key={`property_${i}`}
            isProperties={true}
            property={propertyMapped}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    propertiesData: state.propertiesState,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    fetchProperties: (filters) => dispatch(fetchProperties(filters)),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Properties);
