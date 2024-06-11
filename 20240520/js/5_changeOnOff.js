"use strict";

const imgWrapper = document.querySelector("#imgWrapper");
const imgEl = imgWrapper.firstElementChild;

imgEl.addEventListener("click", function() {
  // const currentClass = imgEl.classList[0];

  // if (currentClass == "on") {
  //   imgEl.classList.remove("on");
  //   imgWrapper.classList.remove("on");
  // } else {
  //   imgEl.classList.add("on");
  //   imgWrapper.classList.add("on");
  // }

  imgEl.classList.toggle("on");
  imgWrapper.classList.toggle("on");
  
});