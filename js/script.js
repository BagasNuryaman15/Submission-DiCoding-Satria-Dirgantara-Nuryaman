// Ensure that JavaScript code is executed only after all HTML elemenets have been loaded.
document.addEventListener("DOMContentLoaded", () => {
    // Declaration Variable
    const btnToggle = document.querySelector(".navigation__btn-toggle");
    const btnClose = document.querySelector(".navigation__btn-close");
    const navMenu = document.getElementById("navigation-menu");
    const navLink = document.querySelectorAll(".navigation__menu-link");

    // Function for show menu and added class show-menu
    btnToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu"); // Add show-menu or delete show-menu
    })

    // Function for close menu
    btnClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu"); // Delete Show Menu
    })

    // Close menu when link active
    navLink.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        })
    })
})