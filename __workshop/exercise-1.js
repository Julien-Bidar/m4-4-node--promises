// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  myPromise = new Promise((resolve, reject) => {
    const isString = (el) => {
      return typeof el === "string";
    };
    if (array.every(isString)) {
      resolve(
        array.map((el) => {
          return el.toUpperCase();
        })
      );
    } else {
      reject("Error, the array contains element that are not strings");
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  // write some code
  return array.sort();
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
