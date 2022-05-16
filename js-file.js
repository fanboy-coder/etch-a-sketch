const GAME = document.getElementById("grid-container");

function makeGrid(rows) {
    const grid = document.getElementById("grid-container");
    grid.setAttribute("style", "grid-template-rows: repeat(" + rows + ", auto");
    grid.setAttribute("style", "grid-template-columns: repeat(" + rows + ", auto");
    for (let c = 0; c < (rows * rows); c++) {
        let cell = document.createElement("div");
        GAME.appendChild(cell).className = "item";
    }
    changeColor();
}

function changeColor() {
    let cell = document.querySelectorAll(".item")
    cell.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.classList.toggle("item-hover");
        })
    });
}

function newGrid() {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.remove();
    })
    let rows = prompt("How many rows and columns?", "16");
    if (rows >100){
        let rows = prompt("Please enter a number between 1 and 100");
        makeGrid(rows);
    }
    else {
        makeGrid(rows);
    }
}

function onLoad() {
    makeGrid(16)
}

onLoad()