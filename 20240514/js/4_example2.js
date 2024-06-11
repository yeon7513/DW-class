"use strict";

// 1. 나이 계산 버튼을 누르면 사용자가 입력한 출생년도를 참고하여 나이를 계산하는
// 함수를 작성하세요. (result div에 결과 표시)

const birthInput = document.querySelector("#birthCalc .birth-input");
const birthCalcBtn = document.querySelector("#birthCalc .birthCalc-btn");
const birthResult = document.querySelector("#birthCalc .result");

let year = new Date().getFullYear();

function birthCalc(e) {
  e.preventDefault();

  let calc = year - parseInt(birthInput.value);
  
  if (year < birthInput.value) {
    alert("현재년도보다 크게 입력할 수 없습니다.");
    return false;
  } 

  birthResult.innerHTML = `<p>${birthInput.value}년생은 현재(${year}년) ${calc}세 입니다.</p>`;

  birthInput.value = "";
  birthInput.focus();
};

birthCalcBtn.addEventListener("click", birthCalc);

// 2. 사각형의 가로 너비와 세로 높이를 입력하여 사각형의 넓이를 계산하는 함수를
// 작성하세요. (result div에 결과 표시)

const squareWidth = document.querySelector("#square input:nth-child(1)");
const squareHeight = document.querySelector("#square input:nth-child(2)");
const squareResult = document.querySelector("#square .result");

function squareCalc() {
  squareResult.innerHTML = `
    <p>
      가로가 ${squareWidth.value}, 세로가 ${squareHeight.value}인 사각형의 넓이는 
      ${squareWidth.value * squareHeight.value}입니다.
    </p>
  `;
  squareWidth.value = "";
  squareHeight.value = "";
  squareWidth.focus();
}

// 3. 원래 가격과 할인율을 입력하면 할인 가격을 계산해주는 함수를 작성하세요.
// (할인된 가격은 정수로 표현하세요. result div에 결과 표시)

const cost = document.querySelector("#discount input:nth-child(1)");
const discountPercent = document.querySelector("#discount input:nth-child(2)");
const discountResult = document.querySelector("#discount .result");

function discountCalc() {

  let calc = cost.value * (discountPercent.value * 0.01);

  discountResult.innerHTML += `<p>원래 가격 : ${cost.value}원</p>`;
  discountResult.innerHTML += `<p>할인율 : ${discountPercent.value}%</p>`;
  discountResult.innerHTML += `<p>할인된 가격 : ${parseInt(cost.value) - calc}원</p>`;

  cost.value = "";
  discountPercent.value = "";
  cost.focus();
}