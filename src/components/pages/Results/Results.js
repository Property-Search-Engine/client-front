import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Filters from "../../common/Filters/Filters";
import HeaderComponent from "../../common/HeaderComponent/HeaderComponent";
import Properties from "../../common/Properties/Properties";

export default function Results() {
  const { city } = useParams();
  const [isOpenFiltersModal, setIsOpenFiltersModal] = useState(false);
  const handleFilterModal = (e) => {
    setIsOpenFiltersModal(true);
  };

  return (
    <div className="app">
      <HeaderComponent text={"Results for " + city} />
      <Filters show={isOpenFiltersModal} handleShow={setIsOpenFiltersModal} />
      <div className="cardBody">
        <hr></hr>
        <div className="toggleMenu">
          <span onClick={handleFilterModal}>
            <img
              alt="funnel icon"
              src="/assets/icons/filters.svg"
              className="filterIcon"
            />
            Filters
          </span>
          <span>
            <img
              alt="map icon"
              src="/assets/icons/map.svg"
              className="filterIcon"
            />
            Maps
          </span>
          <span>Sort by:</span>
        </div>
      </div>
      <Properties />
    </div>
  );
}
