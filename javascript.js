const container = document.getElementById("containerDiv");

// array = [];
// const size = 16*16;
// for (let i = 0; i < size -1; i++) {
//     array[i] = document.createElement("div");
//     array[i].classList.add("item");
//     container.appendChild(array[i]); 
// }

const rows = 16;
const columns = 16;

array = [];
for (let i = 0; i < rows; i++) {
    array[i] = document.createElement("div");
    array[i].classList.add("item");
    container.appendChild(array[i]);
}
