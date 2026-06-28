const container = document.getElementById("containerDiv");
container.style.width = "960px";
container.style.height = "960px";

/* 
This is the first and second step, which is to make a webpage
16 x 16 grid. This is achieved by doing a nested for loop to 
create a 2-dimensional grid like style.
*/
rowArr = [];
columnArr = [];

function createGridLayout(size) {
    for (let i = 0; i < size; i++) {
    rowArr[i] = document.createElement("div");
    rowArr[i].classList.add("item");
    for (let j = 0; j < size; j++) {
        columnArr[j] = document.createElement("div");
        columnArr[j].classList.add("column");
        rowArr[i].appendChild(columnArr[j]);
    }
    container.appendChild(rowArr[i]);
    }
}
createGridLayout(16);

//Third step: Hover effect in every grid.
//This is achieved by iterating every grid (column element)
//and using the addEventListener() method and the mouse events
//mouseenter and mouseleave.
function hoverEffect() {
    let hover = document.getElementsByClassName("column");
    for (let i = 0; i < hover.length; i++) {
        hover[i].addEventListener('mouseenter', (event) => {
            event.target.style.backgroundColor = "gray";
        });
        hover[i].addEventListener('mouseleave', function (e) {
            e.target.style.backgroundColor = "azure";
        });
    }
}
hoverEffect();

/* 
4th Step: Added removeElements() function to remove the grid. 
Added a button in the HTML and then added eventListened in javascript so that
when the user press it, a message prompts to change the dimensions of the grid
Added the logic if to make the new grid based on the user's dimensions.
*/

function removeElements() {
    const removeElementsOnColumns = document.querySelectorAll('.column');
    removeElementsOnColumns.forEach(element => element.remove());
    const removeElementsOnRows = document.querySelectorAll('.item');
    removeElementsOnRows.forEach(element => element.remove());
}


const button = document.querySelector("button");
button.textContent = "Change Dimensions";
button.addEventListener('click', (event) => {
    event = prompt("What dimensions do you want the grid sketch? (input <100): ");
    let choice = parseInt(event);
    if (choice >= 100) {
        alert("Error, input is larger than 100!");
    } else if (choice <= 0) {
        alert("Error, input is negative.");
    } else {
        removeElements();
        createGridLayout(choice);
        hoverEffect();
    }
})

