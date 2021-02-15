import { finalEndpoints } from "./endpoints";
import { auth } from "../firebase/firebase";
import { authHeader } from "../utils/helpers";

export async function makeBooking(propertyId, contactInfo, endPoint) {
  const token = await auth.currentUser.getIdToken();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ propertyId, contactInfo });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch(endPoint, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export async function fetchPropertyDetails(id) {
  try {
    const propertyResponse = await fetch(finalEndpoints.getPropertyDetail + id);
    if (propertyResponse.ok) {
      const bookings = await propertyResponse.json();
      return bookings.data;
    }
    throw new Error("Falided fetch call /bookings/all");
  } catch (error) {
    throw new Error("Falided fetch call /bookings/all: " + error.message);
  }
}
