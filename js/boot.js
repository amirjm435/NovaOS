// NovaOS Boot System
const loadingText = document.querySelector("#boot-screen p");

let dots = 0;

setInterval(() => {

    dots++;

    if (dots > 3) dots = 1;

    loadingText.textContent = "Initializing" + ".".repeat(dots);

}, 500);
setTimeout(() => {

    loadingText.textContent = "Loading Desktop...";

}, 3000);