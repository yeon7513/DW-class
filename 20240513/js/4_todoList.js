"use strict";

let addTodo = document.querySelector("#input");
let container = document.querySelector(".container");

function addTodoList() {
  let list = document.createElement("p");
  
  list.innerHTML += addTodo.value;
  chgBkColor(list);
  container.append(list);

  addTodo.value = "";
  addTodo.focus();

};

function chgBkColor(tag) {
  let colors = [];
  for (let i = 1; i <= 3; i++) {
    let randomColor = parseInt(Math.random() * 256);
    colors.push(randomColor);
  }
  tag.style.backgroundColor = `rgb(${colors.toString()})`;

  const luma = 0.2126 * colors[0] + 0.7152 * colors[1] + 0.0722 * colors[2];

  tag.style.color = luma <= 155 ? "#fff" : "#333";

};