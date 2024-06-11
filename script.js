const container = document.querySelector("#container");


function addRows() {
    for (i=1;i<=16;i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.toggle("row");
        container.appendChild(rowDiv);
    };
};

function addColumns(rows) {
    for (r of rows) {
        for (i=1;i<=16;i++) {
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


addRows();

const rows = document.querySelectorAll(".row");
addColumns(rows);



hover();

// cells.forEach((cell) => {
//     cell.addEventListener("mouseenter", () => {
//         cell.classList.add("color");
//     });
// });
