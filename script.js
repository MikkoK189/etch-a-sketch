const gridContainer = document.querySelector(".grid-container");
const blackButton = document.querySelector("#black");
const resetButton = document.querySelector("#reset");

let gridSize = 16;
let colArray = [];
let black = true;

function createGrid(gridSize) {
  for (let x = 0; x < gridSize; x++) {
    let colCont = document.createElement("div");
    colCont.classList.add("column-container");
    colArray[x] = gridContainer.appendChild(colCont);
    for (let y = 0; y < gridSize; y++) {
      let gridSquare = document.createElement("div");
      gridSquare.classList.add("box");
      gridSquare.setAttribute("id", `${x} ${y}`);
      gridSquare.addEventListener("mouseenter", hoverOver);
      gridSquare.textContent = " ";
      colArray[x].appendChild(gridSquare);
    }
  }
}

function hoverOver(e) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(e.target.id);
  if (!black) {
    e.target.classList.add("hover");
    document.getElementById(
      e.target.id
    ).style.backgroundColor = `#${randomColor}`;
  } else {
    e.target.classList.add("hover");
    document.getElementById(e.target.id).style.backgroundColor = `black`;
  }
}

function clearGrid() {
  let conts = document.getElementsByClassName("column-container");
  let boxes = document.getElementsByClassName("box");

  while (boxes[0]) {
    boxes[0].parentNode.removeChild(boxes[0]);
  }

  while (conts[0]) {
    conts[0].parentNode.removeChild(conts[0]);
  }
}

createGrid(gridSize);

resetButton.addEventListener("click", resetGrid);

function resetGrid() {
  clearGrid();
  let newSize = prompt("Enter a size for the new grid (1 - 100)");
  if (Number(newSize) < 1 || Number(newSize) > 100 || isNaN(newSize)) {
    resetGrid();
  } else {
    createGrid(newSize);
  }
}

blackButton.addEventListener("click", function () {
  blackButton.classList.toggle("active");
  black = !black;
});
