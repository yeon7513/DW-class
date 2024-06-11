"use strict";

const exEl = document.querySelector("#ex");

function get() {
  // div 요소의 텍스트를 가져와서 alert로 출력
  alert(exEl.textContent);
};

function set() {
  // prompt창을 띄워 사용자에게 입력 받은 후
  // div 요소의 텍스트 변경
  let str = prompt("변경할 텍스트를 입력해 주세요.");
  exEl.textContent = str;
};