"use strict";

let randomNum = 0;
const input = document.querySelector("#number");
const msg = document.querySelector("#message");
const enteredNumber = document.querySelector(".entered-number");
let enter = "";
let resStr = "";
const MAX_COUNT = 0;
let count = 5;

// 초기화
function reset() {
  count = 5;
  randomNum = getRandom();
  resStr = "";
  enter = "";
  input.value = "";
  msg.innerHTML = "";
  enteredNumber.innerHTML = "";
};

// 랜덤 숫자를 추출한다. (1~100)
function getRandom() {
  return parseInt(Math.random() * 100) + 1;
};

randomNum = getRandom();

console.log(input);
console.log(input.value);

// 랜덤 숫자와 가져온 값이 일치하는 지 비교한다.
function check() {
  if (count == MAX_COUNT) {
    reset();
    return false;
  }

  let inputNum = input.value;
  
  if (randomNum == inputNum) {
    resStr = `입력하신 숫자는 ${inputNum} 입니다. 정답입니다!`;
    alert(resStr);
    reset();
  } else {
    count--;
    if (randomNum > inputNum) {
      resStr = `입력하신 ${inputNum}보다 큽니다. 남은 기회는 ${count}회 입니다.`;
      enter += `<span>${inputNum}</span>`
    } else if (randomNum < inputNum) {
      resStr = `입력하신 ${inputNum}보다 작습니다. 남은 기회는 ${count}회 입니다.`;
      enter += `<span>${inputNum}</span>`
    }
  }

  msg.innerHTML = resStr;
  enteredNumber.innerHTML = enter;

  if (count == MAX_COUNT) {
    resStr = `게임에서 패배하셨습니다. 랜덤 숫자는 ${randomNum} 입니다.`;
    msg.innerHTML = resStr;
    enteredNumber.innerHTML = "";
  }

};
