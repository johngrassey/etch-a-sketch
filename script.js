const container = document.querySelector("div.container");
const page = document.querySelector("div.page");
const btnResize = document.querySelector("button.resize");

let size = 16;

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
        cell.classList.add("color");
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


btnResize.addEventListener("click",resize);
createGrid(size);