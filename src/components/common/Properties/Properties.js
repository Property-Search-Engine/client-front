import React, { useEffect } from "react";
import Property from "../Property/Property";
import {
  propertyEx,
  propertyEx2,
  propertyEx3,
} from "../../../utils/mockOfProperties";
import "./Properties.scss";
import { connect } from "react-redux";
import { fetchProperties } from "../../../redux/properties/properties-actions";

function Properties(props) {
  useEffect(() => {
    fetchProperties();
  }, []);

  const { setsinglePropertyId, fetchProperties, propertiesData } = props;
  const properties = [propertyEx, propertyEx2, propertyEx3];
  // if (propertiesData.loading) return <p>Loading</p>
  // if(propertiesData.error) return <p>{propertiesData.error}</p>
  // return (<>{propertiesData.properties.map(property => <p>{property.name}</p>)}</>)
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
    fetchProperties: () => dispatch(fetchProperties()),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Properties);
