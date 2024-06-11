"use strict";

let fruitArr = [];

function clickFn() {
  let input = document.querySelector("#input");

  let h1El = document.querySelector("h1");

  fruitArr.push(input.value);

  h1El.innerHTML = fruitArr.join(" / ");

  input.value = "";

  // input으로 커서 이동
  input.focus();

}