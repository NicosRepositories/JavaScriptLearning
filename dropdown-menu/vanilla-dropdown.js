/*Check if sidebar is open or not and closes/opens it*/

/*toggleStatus is a anonymous function and can be called with its name */

let navStatus = false;

let toggleStatus = function() {
    let getSidebar = document.querySelector(".sidebar");
    let getSidebarUl = document.querySelector(".sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".sidebar a");

    if (navStatus === false) { /* if Sidebar is closed */
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px"; /* change width of sidebar so the content can fit */

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) { /* make every List item Visible */
            getSidebarLinks[i].style.opacity = "1";            
        }

        navStatus = true;
    }
    else { /* if Sidebar is open */
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.width = "50px"; /* change width of sidebar to the base Design */

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) { /* make every List item invisible */
            getSidebarLinks[i].style.opacity = "0";            
        }

        navStatus = false;
    }
}