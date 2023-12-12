//website_url--use this to link for them to visit
// GET https://api.openbrewerydb.org/v1/breweries/random
//find breweries in your area name, city then provide link to their email data[6].website_url click to learn more
fetch("https://api.openbrewerydb.org/v1/breweries?by_city=charlotte&?by_name")
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
