import {
  FETCH_PROPERTIES_FAILURE,
  FETCH_PROPERTIES_REQUEST,
  FETCH_PROPERTIES_SUCCESS,
  UPDATE_FILTERS,
} from "./property-types";

const initialState = {
  loading: false,
  properties: [],
  error: "",
  filters: {
    kind: "Home",
    homeType: [],
    bedRooms: [],
    bathRooms: [],
    equipment: "null",
    publication: "null",
    filters: [],
    condition: [],
    range: { max: 10000000, min: 0 },
  },
  firstCall: true,
};

const PropertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES_REQUEST:
      const firstCall = state.firstCall && false;
      return {
        ...state,
        firstCall: firstCall,
        loading: true,
      };
    case FETCH_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        properties: action.payload,
        error: "",
      };
    case FETCH_PROPERTIES_FAILURE:
      return {
        ...state,
        loading: false,
        properties: [],
        error: action.payload,
      };
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterName]: action.payload.filterValue,
        },
      };

    default:
      return state;
  }
};

export default PropertiesReducer;
