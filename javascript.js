const container = document.getElementById("containerDiv");

/* 
This is the first and second step, which is to make a webpage
16 x 16 grid. This is achieved by doing a nested for loop to 
create a 2-dimensional grid like style.
*/
const rows = 16;
const columns = 16;

rowArr = [];
columnArr = [];
for (let i = 0; i < rows; i++) {
    rowArr[i] = document.createElement("div");
    rowArr[i].classList.add("item");
    for (let j = 0; j < columns; j++) {
        columnArr[j] = document.createElement("div");
        columnArr[j].classList.add("column");
        rowArr[i].appendChild(columnArr[j]);
    }
    container.appendChild(rowArr[i]);
}

//Third step: Hover effect in every grid.
//This is achieved by iterating every grid (column element)
//and using the addEventListener() method and the mouse events
//mouseenter and mouseleave.
let hover = document.getElementsByClassName("column");
for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = "red";
    });
    hover[i].addEventListener('mouseleave', function (e) {
        e.target.style.backgroundColor = "white";
    });
}

/* 
4th Step:
*/