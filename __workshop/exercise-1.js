// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  // write some code
  myPromise = new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === "string")) {
      const capitalizedArray = array.map((word) => word.toUpperCase());
      resolve(capitalizedArray);
    } else {
      reject("error");
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  // write some code
  myPromis = new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === "string")) {
      const sortedArray = array.sort();
      resolve(sortedArray);
    } else {
      reject("error");
    }
  });
  return myPromise;
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
