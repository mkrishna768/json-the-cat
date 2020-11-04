const request = require('request');
const query = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log(error);
  } else if (data.length === 0) {
    console.log("Breed not found.")
  } else {
    console.log(data[0].description);
  }
});
