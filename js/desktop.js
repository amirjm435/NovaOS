const clock = document.querySelector("#clock");

function updateClock() {

    const now = new Date();

    const hour = String(now.getHours()).padStart(2, "0");

    const minute = String(now.getMinutes()).padStart(2, "0");

    clock.textContent = `${hour}:${minute}`;

}

updateClock();

setInterval(updateClock, 1000);