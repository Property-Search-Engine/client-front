const BASE_URL = "https://client-facing-server.herokuapp.com";
const userEndpoint = BASE_URL + "/user";
const propertiesEndpoint = BASE_URL + "/properties";
const bookingsEnpoint = BASE_URL + "/bookings";

export const finalEndpoints = {
  login: userEndpoint + "/login",
  register: userEndpoint + "/register",
  fetchProperties: propertiesEndpoint,
  getPropertyDetail: propertiesEndpoint + "/", //* :id ID as param
  makeBooking: bookingsEnpoint,
  getBookings: bookingsEnpoint + "/all",
};
