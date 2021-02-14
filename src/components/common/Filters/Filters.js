import "./Filters.scss";
import "../Inputs/Inputs.scss";
import React, { useState } from "react";

import { Modal, Nav, Image } from "react-bootstrap";
import CheckInputs from "../Inputs/CheckInputs";
import GroupButtons from "../GroupButtons/GroupButtons";
import SelectInput from "../Inputs/SelectInput";
import RangeSlider from "../Inputs/RangeSlider";

import { connect } from "react-redux";
import { updatePropertiesFilters } from "../../../redux/properties/properties-actions";
import { svgPath } from "../../../utils/helpers";

function Filters({ filters, setFilters }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [open, setOpen] = useState(false);
  function handleFilterChange(filterKey, filterValue) {
    setFilters(filterKey, filterValue);
  }
  return (
    <>
      <button onClick={handleShow} className="filterBtn">
        <img src="./assets/icons/filters.svg" className="filterIcon" />
        Filters
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modalFilter"
      >
        <div className="modal-content px-3">
          <Modal.Header>
            <button onClick={handleClose} className="closeButton">
              x
            </button>
            <Nav.Link>Filters</Nav.Link>
            <Nav.Link>Reset</Nav.Link>
          </Modal.Header>

          {/* Type of Home ¦ CheckInputs */}
          <CheckInputs
            className="homeType"
            options={["Flat/Apartment", "House", "Duplex", "Penthouse"]}
            labelText="Type of home"
            inputsName="homeType"
            onChange={handleFilterChange}
            values={filters.homeType}
          />
          {/* Bedrooms ¦ GroupButtos */}
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
          {/* Bathroom ¦ GroupButton */}
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
          {/* Select ¦ SelectInput */}
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
          {/* Conditions ¦ CheckInput */}

          <CheckInputs
            options={["New home", "Need renovation", "Good Conditions"]}
            labelText="Conditions"
            inputsName="condition"
            onChange={handleFilterChange}
            values={filters.condition}
          />

          {/* Conditions ¦ RangeSlider */}
          <div className="filtersColumn">
            Price Range
            <RangeSlider setFilters={handleFilterChange} />
          </div>
          {/* Publication Date ¦ SelectInput - DateInput ?? */}
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
          {/* More Filters ¦ CheckInputs  */}

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
          <button onClick={handleClose} className="submitFilters">
            Show Results
          </button>
        </div>
      </Modal>
    </>
  );
}

//Pass the properties state to be accessible by the component
const mapStateToProps = (state) => {
  return {
    filters: state.propertiesState.filters,
  };
};

//Pass the actions functions to be accessible by the component
const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: (filterName, filterValue) =>
      dispatch(updatePropertiesFilters(filterName, filterValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
