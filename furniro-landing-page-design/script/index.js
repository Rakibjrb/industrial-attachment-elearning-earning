// global variables


// DOM selection
const mobileNavButton = document.querySelector(".mobile-nav-button"),
    mobileNavMenu = document.querySelector(".mobile-nav-menu");

// nav menu btn
mobileNavButton.addEventListener("click", () => {
    // check hidden class exist
    if (mobileNavMenu.classList.contains("hidden")) {
        mobileNavMenu.classList.remove("hidden");
        mobileNavMenu.classList.add("flex");

        mobileNavButton.innerHTML = '';
        mobileNavButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        mobileNavMenu.classList.add("hidden");
        mobileNavMenu.classList.remove("flex");

        mobileNavButton.innerHTML = '';
        mobileNavButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});