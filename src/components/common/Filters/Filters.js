import React from "react";
import { connect } from "react-redux";

import { Modal, Image } from "react-bootstrap";
import {
  fetchProperties,
  updatePropertiesFilters,
} from "../../../redux/properties/properties-actions";
import { svgPath, trimFilters } from "../../../utils/helpers";

import CheckInputs from "../Inputs/CheckInputs";
import GroupButtons from "../GroupButtons/GroupButtons";
import SelectInput from "../Inputs/SelectInput";
import RangeSlider from "../Inputs/RangeSlider";

import "./Filters.scss";
import "../Inputs/Inputs.scss";

function Filters(props) {
  const { filters, setFilters, show, handleShow } = props;
  const handleClose = () => handleShow(false);
  const handleShowResults = async () => {
    await fetchProperties(filters);
    handleClose();
  };

  function handleFilterChange(filterKey, filterValue) {
    setFilters(filterKey, filterValue);
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation={false}
      className="modalFilter"
    >
      <div className="modal-content px-3">
        <Modal.Header className="d-flex align-items-center">
          <button onClick={handleClose} className="closeButton">
            x
          </button>
          <h4 className="mb-0">
            {Object.keys(trimFilters(filters)).length + " filters applied"}
          </h4>
        </Modal.Header>

        <CheckInputs
          className="homeType"
          options={["Flat/Apartment", "House", "Duplex", "Penthouse"]}
          labelText="Type of home"
          inputsName="homeType"
          onChange={handleFilterChange}
          values={filters.homeType}
        />

        <div className="filtersColumn">
          Bedrooms
          <Image
            src={svgPath("bed")}
            width="15px"
            rounded
            className="form-icon-label"
          />
          <GroupButtons
            className="filters-btn"
            handleChange={handleFilterChange}
            filterKey="bedRooms"
            clicked={filters.bedRooms}
            buttons={{
              0: "0 (Studio Flat)",
              1: "1",
              2: "2",
              3: "3",
              "4+": "4 or +",
            }}
          />
        </div>

        <div className="filtersColumn">
          Bathrooms
          <Image
            src="/assets/icons/bath.svg"
            width="15px"
            rounded
            className="form-icon-label"
          />
          <div className="bedroomsCol">
            <GroupButtons
              handleChange={handleFilterChange}
              filterKey="bathRooms"
              clicked={filters.bathRooms}
              buttons={{
                1: "1",
                2: "2",
                "3+": "3 or +",
              }}
            />
          </div>
        </div>

        <div className="filtersColumn">
          <SelectInput
            options={{
              full: "Fully furnished",
              partial: "Partial furnished",
              none: "Not furnished",
              null: "No filter added",
            }}
            inputName="equipment"
            labelText="Equipment"
            onChange={handleFilterChange}
            value={filters.equipment}
          />
        </div>

        <CheckInputs
          options={["New home", "Need renovation", "Good Conditions"]}
          labelText="Conditions"
          inputsName="condition"
          onChange={handleFilterChange}
          values={filters.condition}
        />

        <div className="filtersColumn">
          Price Range
          <RangeSlider setFilters={handleFilterChange} />
        </div>

        <div className="filtersColumn">
          <SelectInput
            options={{
              24: "Last 24 hours",
              week: "Last week",
              month: "Last month",
              null: "No filter added",
            }}
            inputName="publication"
            labelText="Publication date"
            onChange={handleFilterChange}
            value={filters.publication}
          />
        </div>

        <CheckInputs
          options={[
            "Pets Allowed",
            "Lift",
            "Garden",
            "Air conditioning",
            "Pool",
            "Terrace",
          ]}
          labelText="More Filters"
          inputsName="filters"
          onChange={handleFilterChange}
          values={filters.filters}
        />
        <div className="filterColumns">
          <SelectInput
            options={{
              Available: "Available",
              Sold: "Sold",
            }}
            inputName="sold"
            labelText="Sold Status"
            onChange={handleFilterChange}
            value={filters.sold}
          />
        </div>
      </div>

      <div className="s-filters">
        <button onClick={handleShowResults} className="submitFilters">
          Show Results
        </button>
      </div>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    filters: state.propertiesState.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: (filterName, filterValue) =>
      dispatch(updatePropertiesFilters(filterName, filterValue)),
    fetchProperties: (filters) => dispatch(fetchProperties(filters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
