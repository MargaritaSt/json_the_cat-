const argument = process.argv;
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + argument[2];
const request = require('request');
 
request(url,(error,response,body) => {
  if (error) {
    console.log(error);
    return error;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Cat has not been found!");
  } else {
    console.log(data[0].description);
    console.log(typeof data);
  }
});