const container = document.querySelector("div.container");
const page = document.querySelector("div.page");

const btnResize = document.querySelector("button.resize");
btnResize.addEventListener("click",resize);

const btnRainbowMode = document.querySelector("button.rainbowmode");
btnRainbowMode.addEventListener("click",rainbow);

const btnShadingMode = document.querySelector("button.shadingmode");
btnShadingMode.addEventListener("click",shading);

let size = 16;
let gameMode = "normal";

function addRows(size) {
    for (i=1;i<=size;i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.toggle("row");
        container.appendChild(rowDiv);
    };
};

function addColumns(size) {

    const rows = document.querySelectorAll(".row");

    for (r of rows) {
        for (i=1;i<=size;i++) {
            const div = document.createElement("div");
            div.classList.toggle("column");
            r.appendChild(div);
        };
    };

};

function hover() {

    const cells = document.querySelectorAll("div.column");

    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "darkslategray";
        });
    });
};

function resize() {

        size = parseInt(prompt("How many squares on each side?"));

        while (size > 100) {
            size = parseInt(prompt("Each side can't be bigger than 100 squares. Please enter a different size."));
        };

        while (document.querySelector(".row")) {
            container.removeChild(document.querySelector(".row"));
        };

        createGrid(size);

};

function createGrid(size) {
    addRows(size);
    addColumns(size);
    hover();
};

// RAINBOW MODE

function rainbow() {

    const cells = document.querySelectorAll("div.column");

    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";

        cell.addEventListener("mouseenter", () => {
        let r = Math.floor(Math.random() * 255).toString();
        let g = Math.floor(Math.random() * 255).toString();
        let b = Math.floor(Math.random() * 255).toString();

        cell.style.backgroundColor = ("rgb(" + r + ", " + g + ", " + b + ")");

        });
    });
};

// SHADING MODE

function shading() {

    const cells = document.querySelectorAll("div.column");

    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
        cell.style.opacity = 0;

        cell.addEventListener("mouseenter", () => {
        
        cell.style.backgroundColor = "darkslategray";
        cell.style.opacity = Number(cell.style.opacity) + .1;

        });
    });

};

// RUN THE GAME

createGrid(size);