"use strict";

// 사용자에게 "색상명"을 입력받아서 요소의 스타일을 변경하는 함수를 만들어보자.

let chgBox = document.querySelector("#change-color");

function chgText() {
  // 1. 사용자에게 입력받을 prompt를 띄운다.
  let text = prompt("텍스트를 입력하세요.");

  // 2. 입력받은 텍스트를 넣어줄 요소를 가져온다.
  let name = document.createElement("p");
  chgBox.appendChild(name);

  // 3. 가져온 요소에 입력받은 텍스트를 넣어준다.
  name.innerHTML = text;
};

function chgBgColor() {
  let colorName = prompt("색상명을 입력하세요. (영어로...ㅎ)");
  
  chgBox.style.backgroundColor = `${colorName}`;

};

function chgColor() {
  let fontColor = prompt("폰트의 색상을 입력하세요.");

  chgBox.style.color = `${fontColor}`;
}