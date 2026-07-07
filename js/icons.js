// ==========================================
// Orizon OS
// Desktop Icons Manager
// Version 1.0
// ==========================================

const desktopIcons = [
    {
        id: "explorer",
        name: "Explorer",
        icon: "assets/icons/explorer.png"
    },
    {
        id: "browser",
        name: "Browser",
        icon: "assets/icons/browser.png"
    },
    {
        id: "settings",
        name: "Settings",
        icon: "assets/icons/settings.png"
    },
    {
        id: "terminal",
        name: "Terminal",
        icon: "assets/icons/terminal.png"
    },
    {
        id: "notes",
        name: "Notes",
        icon: "assets/icons/notes.png"
    },
    {
        id: "recycle",
        name: "Recycle Bin",
        icon: "assets/icons/recycle-bin.png"
    }
];

function loadDesktopIcons() {

    const container = document.getElementById("desktop-icons");

    if (!container) {
        console.error("Desktop icons container not found.");
        return;
    }

    // جلوگیری از دوباره ساخته شدن آیکون‌ها
    container.innerHTML = "";

    desktopIcons.forEach(app => {

        const icon = document.createElement("div");

        icon.className = "desktop-icon";

        icon.dataset.app = app.id;

        icon.innerHTML = `
            <img src="${app.icon}" alt="${app.name}" draggable="false">
            <span>${app.name}</span>
        `;

        icon.addEventListener("click", () => {

            document
                .querySelectorAll(".desktop-icon")
                .forEach(item => item.classList.remove("selected"));

            icon.classList.add("selected");

        });

        icon.addEventListener("dblclick", () => {

            console.log(`${app.name} opened`);

            // در نسخه‌های بعدی:
            // openApplication(app.id);

        });

        container.appendChild(icon);

    });

}

window.addEventListener("DOMContentLoaded", loadDesktopIcons);