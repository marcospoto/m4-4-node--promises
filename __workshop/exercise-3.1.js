// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = () => {
  // write some code...
  return request(`http://api.open-notify.org/iss-now.json`) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return {
        lat: parsedResponse.iss_position.latitude,
        lng: parsedResponse.iss_position.longitude,
      }; // 2
    })
    .catch((err) => console.log("Error: ", err));
};

getIssPosition().then((result) => console.log(result));
