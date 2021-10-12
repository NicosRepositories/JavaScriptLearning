/** Get a background image from the unsplash API  */

let getBackground = function () {
  let getBodyElement = document.querySelector("body");
  let getBodyHeight = document.body.clientHeight;
  let getBodyWidth = document.body.clientWidth;
  var request = new XMLHttpRequest();

  request.open(
    "GET",
    "https://source.unsplash.com/random/" + getBodyWidth + "x" + getBodyHeight
  );
  request.addEventListener("load", function (event) {
    if (request.status >= 200 && request.status < 300) {
      getBodyElement.style.backgroundImage = "url(" + request.responseURL + ")";
      console.log(request.responseURL);
      console.log(
        "https://source.unsplash.com/random/" +
          getBodyWidth +
          "x" +
          getBodyHeight
      );
    } else {
      console.warn(request.statusText, request.responseText);
    }
  });
  request.send();
};
