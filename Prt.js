document.addEventListener("DOMContentLoaded", function() {
    const menubar = document.getElementById("Menubar");
    const sidebar = document.getElementById("sidebar");
    const nav = document.querySelector("nav");

    // Function to check if an element is inside the sidebar
    function isInSidebar(element) {
        return element.closest("#sidebar") !== null;
    }

    // Function to check if an element is inside the navigation bar
    function isInNav(element) {
        return element.closest("nav") !== null;
    }

    // Event listener for clicks on the document
    document.addEventListener("click", function(event) {
        // Check if the click occurred outside of the sidebar and navigation bar
        if (!isInSidebar(event.target) && !isInNav(event.target)) {
            // Hide the sidebar
            sidebar.style.display = "none";
        }
    });

    menubar.addEventListener("click", function(event) {
        // Prevent the default behavior of the Menubar link
        event.preventDefault();

        // Toggle sidebar display
        if (sidebar.style.display === "none" || sidebar.style.display === "") {
            sidebar.style.display = "flex";
        } else {
            sidebar.style.display = "none";
        }
    });
});


window.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var main = document.querySelector('main');

    window.addEventListener('scroll', function() {
        if (isSidebarVisible()) {
            main.style.display = 'none'; // Hide main content when sidebar is visible
        } else {
            main.style.display = 'block'; // Show main content when sidebar is not visible
        }
    });

    // Function to check if sidebar is visible
    function isSidebarVisible() {
        return sidebar.style.display !== 'none';
    }
});
