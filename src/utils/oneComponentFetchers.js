import { auth } from "../firebase/firebase";

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
