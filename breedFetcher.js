const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url,(error,response,body) => {
    if (error) {
      callback(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(error, "Cat has not been found!");
    } else {
      callback(error,data[0].description);
      console.log(typeof data[0].description);
      //console.log(data[0].description);
    }
  });
};
module.exports = fetchBreedDescription;