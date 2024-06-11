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


addRows();

const rows = document.querySelectorAll(".row");

addColumns(rows);
