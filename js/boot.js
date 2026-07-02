// NovaOS Boot System

const bootScreen = document.querySelector("#boot-screen");
const desktop = document.querySelector("#desktop");
const loadingText = document.querySelector("#boot-screen p");

let dots = 0;

const loadingAnimation = setInterval(() => {

    dots++;

    if (dots > 3) dots = 1;

    loadingText.textContent = "Initializing" + ".".repeat(dots);

}, 500);

setTimeout(() => {

    clearInterval(loadingAnimation);

    loadingText.textContent = "Loading Desktop...";

    setTimeout(() => {

        bootScreen.style.display = "none";
        desktop.style.display = "block";

    }, 1000);

}, 3000);