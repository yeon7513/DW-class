"use strict";

const myInput = document.getElementById("my-input");
const key = document.getElementById("key");
const code = document.getElementById("code");
const keydown = document.getElementById("keydown");
const keypress = document.getElementById("keypress");
const keyup = document.getElementById("keyup");

function presskeyEvent() {
  keypress.classList.add("check");
  setTimeout(function() {
    keypress.classList.remove("check");
  }, 300);
};

function downkeyEvent(e) {
  const el = document.querySelector(`#${e.code}`);
  el.classList.add("on");
  keydown.classList.add("check");

  key.innerHTML = `key : ${e.key}`;
  code.innerHTML = `code : ${e.code}`;

  setTimeout(function() {
    keydown.classList.remove("check");
  }, 300);
};

function upkeyEvent(e) {
  const el = document.querySelector(`#${e.code}`);
  keyup.classList.add("check");

  setTimeout(function() {
    el.classList.remove("on");
    keyup.classList.remove("check");
  }, 300);
};

myInput.addEventListener("keypress", presskeyEvent);
myInput.addEventListener("keydown", downkeyEvent);
myInput.addEventListener("keyup", upkeyEvent);