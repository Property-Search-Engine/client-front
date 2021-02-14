import { finalEndpoints } from "../../utils/endpoints";
import {
  FETCH_PROPERTIES_REQUEST,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAILURE,
  UPDATE_FILTERS,
} from "./property-types";

export const fetchPropertiesRequest = () => {
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

export const fetchProperties = (filters) => {
  return async function fetchPropertiesThunk(dispatch) {
    //We info and change state to have lastRequest as LIST_PROPERTIES
    dispatch(fetchPropertiesRequest());
    try {
      /* const trimmedFilters = trimFilters(filters);
      const formattedFilters = filtersToQueryParamsFormatter(trimmedFilters);
      console.log(finalEndpoints.getPropertiesList + "?" + formattedFilters); */
      const res = await fetch(finalEndpoints.fetchProperties + "?kind=Home");
      const list = await res.json();
      console.log(list);
      if (list.data === null) {
        dispatch(
          fetchPropertiesFailure(
            "Null data fetching list of properties: " + list.error[0].message
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
