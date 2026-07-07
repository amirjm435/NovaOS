// ==========================================
// Orizon OS Boot System
// Version 1.0
// ==========================================

const bootScreen = document.getElementById("boot-screen");
const bootText = document.getElementById("boot-text");
const desktop = document.getElementById("desktop");

const bootMessages = [
    "Initializing Kernel",
    "Loading System Files",
    "Starting Services",
    "Preparing Desktop",
    "Welcome to Orizon OS"
];

desktop.style.display = "none";

let messageIndex = 0;

function nextMessage() {

    if (messageIndex >= bootMessages.length) {

        bootScreen.style.opacity = "0";

        setTimeout(() => {

            bootScreen.style.display = "none";

            desktop.style.display = "block";

            desktop.style.opacity = "1";

        }, 700);

        return;

    }

    bootText.textContent = bootMessages[messageIndex];

    messageIndex++;

    setTimeout(nextMessage, 700);

}

window.addEventListener("load", () => {

    setTimeout(nextMessage, 600);

});