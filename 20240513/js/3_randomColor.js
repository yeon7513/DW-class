"use strict";

let colorBox = document.querySelector(".color-box");

function chgBkColor() {
  const colors = [];
  for (let i = 1; i <= 3; i++) {
    const randomNum = parseInt(Math.random() * 256);
    colors.push(randomNum);
  }
  colorBox.style.backgroundColor = `rgb(${colors})`;
  console.log(colors);
}