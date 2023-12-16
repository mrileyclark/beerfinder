//find breweries in your area by entering city retunrs list of breweries with info/zip code search then provide link to their email data[6].website_url click to learn more, or address/location, need to address null if name/website are null see veggies checker api

document.querySelector("button").addEventListener("click", getBrewery);

function getBrewery() {
  const brew = document.querySelector("input").value;
  // const url = `https://api.openbrewerydb.org/v1/breweries?by_city=${brew}`;
  // // https://api.openbrewerydb.org/v1/breweries?by_state=ohio&sort=type,name:asc&per_page=3
  const url = `https://api.openbrewerydb.org/v1/breweries/search?query=${brew}`;
  ///see mdn table dom explanation or MW video to set up table format of listing

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
             <th>Website:</th>
            </tr>`;

        // Loop to access all rows
        for (let r of data) {
          tab += `<tr> 
       <td>${r.name}</td>
       <td>${r.address_1}</td>
       <td>${r.city}</td> 
       <td>${r.state}</td>     
       <td><a  target="_blank" href="${r.website_url}">${r.website_url}</a></td>    
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

// <a href="example.html"><tr><td>example table data</td></tr></a>
// <a href="https://www.w3schools.com" target="_blank">Visit W3Schools</a>

// Asheville
//Decatour
//Waynesville
//Sylva
