const BASE_URL = "https://client-facing-server.herokuapp.com";
const userEndpoint = BASE_URL + "/user";
const propertiesEndpoint = BASE_URL + "/properties";
const makeBooking = BASE_URL + "/bookings"

export const finalEndpoints = {
  login: userEndpoint + "/login",
  register: userEndpoint + "/register",
  fetchProperties: propertiesEndpoint,
  makeBooking: makeBooking
};