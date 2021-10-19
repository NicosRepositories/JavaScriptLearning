/** Get information from teleport api of a specific city  */

/** Get input from input field */

let searchCity = function () {
  let input = document.getElementById("city").value; //get user input

  var request = new XMLHttpRequest();
  let cityResponse;

  console.log(input);

  /** request to get geonameid of input name */
  request.open("GET", "https://api.teleport.org/api/cities/?search=" + input);
  request.addEventListener("load", function (event) {
    if (request.status >= 200 && request.status < 300) {
      cityResponse = request.responseText;
      getGeoNameID(cityResponse); //call next function with the response
    } else {
      console.warn(request.statusText, request.responseText);
    }
  });
  request.send();
};

/** get the ID of the best matching result city by using reading the handed over response */
let getGeoNameID = function (cityResponse) {
  let parsedCityResponse = JSON.parse(cityResponse); //parse the response
  let embeddedObject = parsedCityResponse._embedded;
  let firstResult = embeddedObject["city:search-results"][0]; //get the first entry of the response

  let cityLink = firstResult["_links"]["city:item"]["href"]; //get the link to the city out of entry

  let geoNameID = cityLink.substr(36, 18); //get the ID out of the link

  console.log(geoNameID);

  getCityInformation(geoNameID); //call next function with ID as parameter
};

/** get Information about City by ID */
let getCityInformation = function (geoNameID) {
  var request = new XMLHttpRequest();
  /** request to get information of city by geonameid */
  request.open("GET", "https://api.teleport.org/api/cities/" + geoNameID);
  request.addEventListener("load", function (event) {
    if (request.status >= 200 && request.status < 300) {
      console.log(JSON.parse(request.responseText));
      let cityInformation = JSON.parse(request.responseText);
      showCityInformation(cityInformation);
    } else {
      console.warn(request.statusText, request.responseText);
    }
  });
  request.send();
};

/** extract relevant information and assign it to the DOM */

let showCityInformation = function (cityInformation) {
  /** get the elements by ID */
  let getNameLabel = document.getElementById("fullName");
  let getPopulationLabel = document.getElementById("population");
  let getTimezoneLabel = document.getElementById("timezone");
  let getGeonameLabel = document.getElementById("geonameid");

  /** get the values from the response */

  let fullName = cityInformation["full_name"];
  let population = cityInformation["population"];
  let timezone = cityInformation["_links"]["city:timezone"]["name"];
  let geoname = cityInformation["geoname_id"];

  /** assign the values to the DOM */
  getNameLabel.innerHTML = fullName;
  getPopulationLabel.innerHTML = population;
  getTimezoneLabel.innerHTML = timezone;
  getGeonameLabel.innerHTML = geoname;
};
