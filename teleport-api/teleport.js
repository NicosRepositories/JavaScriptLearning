/** Get information from teleport api of a specific city  */

/** Get input from input field */

let searchCity = function () {
  let input = document.getElementById("city").value;
  let getContainerElement = document.querySelector("response-container");
  var request = new XMLHttpRequest();
  let cityResponse;

  console.log(input);

  /** request to get geonameid of input name */
  request.open("GET", "https://api.teleport.org/api/cities/?search=" + input);
  request.addEventListener("load", function (event) {
    if (request.status >= 200 && request.status < 300) {
      cityResponse = request.responseText;
      getGeoNameID();
    } else {
      console.warn(request.statusText, request.responseText);
    }
  });
  request.send();

  let getGeoNameID = function () {
    let parsedCityResponse = JSON.parse(cityResponse);
    let embeddedObject = parsedCityResponse._embedded;
    let firstResult = embeddedObject["city:search-results"][0];

    console.log(firstResult);

    let cityLink = firstResult["_links"]["city:item"]["href"];

    console.log(cityLink);
  };
};
