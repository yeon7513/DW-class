"use strict";

const text = document.querySelector("#my-input");
const keydown = document.querySelector("#keydown");
const keypress = document.querySelector("#keypress");
const keyup = document.querySelector("#keyup");
const key = document.querySelector("#key");
const code = document.querySelector("#code");


function keypressEvent() {
  keypress.classList.add("check");
  
  setTimeout(function() {
    keypress.classList.remove("check");
  }, 300);
};

function keydownEvent(e) {
  const keys = document.querySelector(`#${e.code}`);
  keydown.classList.add("check");
  keys.classList.add("on");

  key.innerHTML = `key : ${e.key}`;
  code.innerHTML = `code : ${e.code}`;
  
  setTimeout(function() {
    keydown.classList.remove("check");
  }, 300);
};

function keyupEvent(e) {
  const keys = document.querySelector(`#${e.code}`);
  keyup.classList.add("check");
  
  setTimeout(function() {
    keyup.classList.remove("check");
    keys.classList.remove("on");
  }, 300);
};


text.addEventListener("keypress", keypressEvent);
text.addEventListener("keydown", keydownEvent);
text.addEventListener("keyup", keyupEvent);