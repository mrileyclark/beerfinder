//website_url--use this to link for them to visit

//find breweries in your area by name or city/zip code search then provide link to their email data[6].website_url click to learn more, or address/location, need to address null if name/website are null see veggies checker api

document.querySelector("button").addEventListener("click", getBrewery);

function getBrewery() {
  const brew = document.querySelector("input").value;
  // const url = `https://api.openbrewerydb.org/v1/breweries?by_city=${brew}`;
  // // https://api.openbrewerydb.org/v1/breweries?by_state=ohio&sort=type,name:asc&per_page=3
  const url = `https://api.openbrewerydb.org/v1/breweries/search?query=${brew}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      ///loops through arrays of input given
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        let brewName = document.querySelector("#brewName");
        let brewAddress = document.querySelector(".address");
        let brewCity = document.querySelector(".city");
        let brewState = document.querySelector(".state");
        let brewInfo = document.querySelector("a[href]");
        brewName.innerText = data[0].name;
        brewAddress.innerText = data[0].address_1;
        brewCity.innerText = data[0].city;
        brewState.innerText = data[0].state;
        ///may have to createElement to make it work -link returns 404 error
        brewInfo.innerText = data[0].website_url;
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

///see mdn table dom explanation or MW video to set up table format of listing

function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 2; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}
