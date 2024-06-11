"use strict";

function deleteChild() {
  const parent = document.querySelector("#target");
  const child = parent.firstElementChild;

  parent.removeChild(child);
};