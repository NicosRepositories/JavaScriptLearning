/** React Dropdown component */

class ReactDropdown extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <li>
          <a href="#">Frameworks</a>
        </li>
        <div className="dropdown-content">
          <li className="listItem">
            <a href="../react-framework/index.html">React</a>
          </li>
          <li className="listItem">
            <a href="../api-call/index.html">API-Call</a>
          </li>
          <li className="listItem">
            <a href="../teleport-api/index.html">Teleport-API</a>
          </li>
        </div>
      </div>
    );
  }
}

/** --------------------------------------------------- Dropdown scripts ----------------------------------------------------------------*/

/** Check if sidebar is open or not and closes/opens it*/

/** toggleStatus is a anonymous function and can be called with its name */

let navStatus = false;

let toggleStatus = function () {
  let getSidebar = document.querySelector(".sidebar");
  let getSidebarUl = document.querySelector(".sidebar ul");
  let getSidebarLinks = document.querySelectorAll(".sidebar a");

  if (navStatus === false) {
    // if Sidebar is closed
    closeMenu();
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px"; // change width of sidebar so the content can fit

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      // Smake every List item Visible
      getSidebarLinks[i].style.opacity = "1";
    }

    navStatus = true;
  } else {
    // if Sidebar is open
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "50px"; // change width of sidebar to the base Design

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      // make every List item invisible
      getSidebarLinks[i].style.opacity = "0";
    }

    navStatus = false;
  }
};

/** ------------------------------------------------------------------------------------------------------------------ */

/** Dropdown Menu in Top-Navigation, made by myself */

let dropdownStatus = false;

let toggleMenu = function () {
  let getDropdownContainer = document.getElementById("react-dropdown");
  let getDropdownLinks = document.getElementsByClassName("listItem");

  if (dropdownStatus === false) {
    // if dropdown is closed
    closeMenu();

    let arrayLength = getDropdownLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getDropdownLinks[i].style.visibility = "visible"; // make items Visible
    }

    dropdownStatus = true;
  } else {
    // if dropdown is open
    getDropdownContainer.style.background = "none";

    let arrayLength = getDropdownLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getDropdownLinks[i].style.visibility = "hidden"; // make items invisible
    }

    dropdownStatus = false;
  }
};

/** ------------------------------------------------------------------------------------------------------------------ */

/** Close any other Menu which is open at the time of opening a new one  */

let closeMenu = function () {
  if (dropdownStatus === true) {
    toggleMenu(); // close Dropdown if sidebar gets opened
  } else if (navStatus === true) {
    toggleStatus(); // close Sidebar if Dropdown gets opened
  }
};
