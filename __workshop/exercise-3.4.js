// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const { getIssPosition } = require("./exercise-3.1");
const { getPositionFromAddress } = require("./exercise-3.2");
//const {getAddressFromPosition} = require("./exercise-3.3")

// Euclidian distance between two points
const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistanceFromIss = (address) => {
  // write a new Promise here...
  return getIssPosition().then((pos1) => {
    return getPositionFromAddress(address).then((pos2) => {
      return getDistance(pos1, pos2);
    });
  });
};

getDistanceFromIss(
  "6751 boulevard St Laurent Montréal Québec Canada"
).then((response) => console.log(response));
