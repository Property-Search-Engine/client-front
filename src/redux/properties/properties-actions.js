import { finalEndpoints } from "../../utils/endpoints";
import {
  FETCH_PROPERTIES_REQUEST,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAILURE,
  UPDATE_FILTERS,
} from "./property-types";

//======================================
//===== Fetching list of properties
//======================================

export const fetchProperties = (filters, isSearchbar = false) => {
  return async function fetchPropertiesThunk(dispatch) {
    //We info and change state to have lastRequest as LIST_PROPERTIES
    dispatch(fetchPropertiesRequest());
    try {
      isSearchbar && (filters.city = isSearchbar.city);
      const trimmedFilters = trimFilters(filters);
      const formattedFilters = filtersToQueryParamsFormatter(trimmedFilters);
      const res = await fetch(
        finalEndpoints.fetchProperties + "?" + formattedFilters
      );
      const list = await res.json();
      console.log(list);
      if (list.data === null) {
        dispatch(
          fetchPropertiesFailure(
            "Null data fetching list of properties: " + list.error.message
          )
        );
      } else {
        dispatch(fetchPropertiesSuccess(list.data.data));
      }
    } catch (error) {
      dispatch(fetchPropertiesFailure(error.message));
    }
  };
};

const fetchPropertiesRequest = () => {
  return {
    type: FETCH_PROPERTIES_REQUEST,
  };
};

const fetchPropertiesSuccess = (properties) => {
  return {
    type: FETCH_PROPERTIES_SUCCESS,
    payload: properties,
  };
};

const fetchPropertiesFailure = (error) => {
  return {
    type: FETCH_PROPERTIES_FAILURE,
    payload: error,
  };
};

function trimFilters(filters) {
  const trimmedFilters = {};
  Object.entries(filters).forEach(([key, value]) => {
    if (!filters[key] || filters[key] === "null" || filters[key].length < 1)
      return;

    trimmedFilters[key] = value;
  });
  return trimmedFilters;
}
function filtersToQueryParamsFormatter(filters) {
  return Object.entries(filters)
    .map(([key, value]) => {
      const arr_base_string = key + "[]=";
      console.log(key);
      switch (key) {
        case "filters":
        case "buildingUse":
        case "condition":
          return value.map((element) => arr_base_string + element).join("&");
        case "homeType":
          return value
            .map((type) =>
              type === "flat/apartment"
                ? arr_base_string + "flatApartment"
                : arr_base_string + type
            )
            .join("&");
        case "bedRooms":
          return value
            .map((element) => {
              return element === "4+"
                ? arr_base_string + "4p"
                : arr_base_string + element;
            })
            .join("&");

        case "bathRooms":
          return value
            .map((element) => {
              return element === "3+"
                ? arr_base_string + "3p"
                : arr_base_string + element;
            })
            .join("&");
        case "equipment":
          return arr_base_string + value;
        case "sold":
          return value === "Available" ? "sold=false" : "sold=true";
        case "range":
          let string = Object.entries(value)
            .map(([key, value]) => {
              return key === "min" ? "minPrice=" + value : "maxPrice=" + value;
            })
            .join("&");
          return string;
        case "publication":
          const beginingOfString = "publicationDate=";
          if (value === "24")
            return `${beginingOfString}${Date.now() - 86400000}`;
          if (value === "week")
            return beginingOfString + String(Date.now() - 604800000);
          if (value === "month")
            return beginingOfString + String(Date.now() - 2629800000);

          break;
        default: {
          return key + "=" + value;
        }
      }
      return "";
    })
    .join("&");
}

/* function authHeader(token) {
  const header = new Headers();
  header.append("Authorization", "Bearer " + token);
} */

//======================================
//========== Update filters
//======================================
export const updatePropertiesFilters = (filterName, filterValue) => {
  return {
    type: UPDATE_FILTERS,
    payload: { filterName, filterValue },
  };
};
