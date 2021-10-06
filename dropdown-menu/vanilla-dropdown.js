/*Check if sidebar is open or not and closes/opens it*/

/*toggleStatus is a anonymous function and can be called with its name */

let navStatus = false;

let toggleStatus = function() {
    let getSidebar = document.querySelector(".sidebar");
    let getSidebarUl = document.querySelector(".sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".sidebar a");

    if (navStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";            
        }

        navStatus = true;
    }
    else {
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.width = "50px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";            
        }

        navStatus = false;
    }
}