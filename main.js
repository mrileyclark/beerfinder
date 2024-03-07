//find breweries in your area by entering city- returns list of breweries- need to address null if name/website are null see veggies checker api

document.querySelector("button").addEventListener("click", getBrewery);

function getBrewery() {
  const brew = document.querySelector("input").value;
  // const url = `https://api.openbrewerydb.org/v1/breweries?by_city=${brew}`;
  const url = `https://api.openbrewerydb.org/v1/breweries/search?query=${brew}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      show(data);

      // Function to define innerHTML for HTML table
      function show(data) {
        let tab = `<tr>
             <th>Name</th>
             <th>Address</th>
             <th>City</th>
             <th>State</th>
             <th>Website</th>
            </tr>`;

        // Loop to access all rows
        for (let r of data) {
          tab += `<tr> 
       <td>${r.name}</td>
       <td>${r.address_1}</td>
       <td>${r.city}</td> 
       <td>${r.state}</td>     
       <td><a target="_blank" href=${r.website_url}>${r.website_url}</a></td>    
   </tr>`;
        }
        // Setting innerHTML as tab variable
        document.getElementById("beer-table").innerHTML = tab;
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// Asheville
//Decatour
//Waynesville
//Sylva
