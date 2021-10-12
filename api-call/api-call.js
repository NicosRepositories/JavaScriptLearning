/** Get a background image from the unsplash API  */

let getBackground = function () {
  let getBodyElement = document.querySelector("body");
  var request = new XMLHttpRequest();

  request.open("GET", "https://source.unsplash.com/random/");
  request.addEventListener("load", function (event) {
    if (request.status >= 200 && request.status < 300) {
      getBodyElement.style.backgroundImage = "url(" + request.responseURL + ")";
      console.log(request.responseURL);
    } else {
      console.warn(request.statusText, request.responseText);
    }
  });
  request.send();
};
