const gridContainer = document.querySelector(".grid-container");

let gridSize = 16;
let colArray = [];
let black = false;

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

createGrid(gridSize);
