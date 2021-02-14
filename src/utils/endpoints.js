const BASE_URL = "https://client-facing-server.herokuapp.com"; 
const userEndpoint = BASE_URL + "/user"; 

export const finalEndpoints = {
    login: userEndpoint + "/login",
    register: userEndpoint + "/register"
}; 
