const BASE_URL = "https://client-facing-server.herokuapp.com";
const userEndpoint = BASE_URL + "/user";
const propertiesEndpoint = BASE_URL + "/properties";

export const finalEndpoints = {
  login: userEndpoint + "/login",
  fetchProperties: propertiesEndpoint + "",
};
