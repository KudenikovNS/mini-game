const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;
const colors = [
  "#CC3333",
  "#45161C",
  "#7851A9",
  "#008B8B",
  "#FFCFAB",
  "#CEFF1D",
  "#2B6CC4",
  "#D7D7D7",
  "#7E0059",
  "#FFD1DC",
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 19px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
