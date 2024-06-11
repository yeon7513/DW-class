"use strict";

// 1. 변수 두 개를 선언하고 각각 초기값을 3, 4로 할당하세요.
let number1 = 3;
let number2 = 4;


// 2. 위의 두 변수의 합, 차, 곱, 나누기를 한 값을 콘솔창에 출력하세요.
console.log("Q.2 ---------------");
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log("-------------------");


// 3. 위 문제에서 콘솔창에 출력 할 때 결과가 어떤 연산을 했는지를 알 수 있도록
//    결과값 왼쪽에 연산 내용을 표시해보세요.
console.log("Q.3 ---------------");
console.log(`${number1} + ${number2} = ${number1 + number2}`);
console.log(`${number1} - ${number2} = ${number1 - number2}`);
console.log(`${number1} * ${number2} = ${number1 * number2}`);
console.log(`${number1} / ${number2} = ${number1 / number2}`);
console.log("-------------------");


// 4. 1번에서 선언한 변수 두개의 대소 비교를 하여 어떤 변수가 큰지를
//    alert 창으로 출력할 수 있게 작성해보세요. (조건문 사용)
// if (number1 > number2) {
//   alert(`${number1}이 ${number2}보다 큽니다!`);
// } else {
//   alert(`${number1}이 ${number2}보다 작습니다!`);
// }

function sizeComp() {
  alert(`${number1}이 ${number2}보다 ${number1 > number2 ? "큽니다!" : "작습니다!"}`);
};


// 5. 비어있는 객체를 하나 생성해보세요.
let obj = {};


// 6. 위에서 만든 객체에 num1과 num2라는 프로퍼티를 추가하고 
//    각각에 1번 문제에서 만든 변수를 할당하세요.
obj.num1 = number1;
obj.num2 = number2;


// 7. 위에서 만든 객체의 속성을 콘솔창에 각각 출력해보세요.
let keys = Object.keys(obj);

console.log("Q.7 ---------------");
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}
console.log("-------------------");


// 8. 비어있는 배열을 선언하고 그 배열에 1부터 10까지의 숫자를 추가해보세요.
let oneToTen = new Array;

oneToTen.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// for (let i = 1; i <= 10; i++) {
//   oneToTen.push(i);
// }
console.log(oneToTen);


// 9. 비어있는 배열을 선언하고 1~100까지의 숫자를 추가해보세요. (반복문 사용)
let oneToHund = [];

for (let i = 1; i <= 100; i++){
  oneToHund.push(i);
}

console.log("Q.9 ---------------");
console.log(oneToHund);
console.log("-------------------");


// 10. 비어있는 배열을 선언하고 1~100까지의 숫자 중 짝수만 추가해보세요. (반복문 사용)
let evenNum = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    evenNum.push(i);
  }
}

console.log("Q.10 ---------------");
console.log(evenNum);
console.log("-------------------");


// 11. 함수를 생성하고 함수를 호출하면 "안녕하세요!" 라는 alert창이 출력되도록 작성하세요.
function hello() {
  alert("안녕하세요!");
};


// 12. 함수를 호출하면 body 태그에 p태그를 추가하고
//     font색상과 background-color가 변경된 요소가 화면에 출력되는 함수를 작성하세요.

function chgColors() {
  const wrapper = document.querySelector("#wrapper");
  const pEl = document.createElement("p");

  let fontColors = [];
  for (let i = 1; i <= 3; i++){
    let random = parseInt(Math.random() * 256);
    fontColors.push(random);
  }
  let bgColors = [];
  for (let i = 1; i <= 3; i++){
    let random = parseInt(Math.random() * 256);
    bgColors.push(random);
  }
  pEl.innerHTML = "color change!";
  pEl.style.color = `rgb(${fontColors.join(", ")})`;
  pEl.style.backgroundColor = `rgb(${bgColors.join(", ")})`;
  wrapper.appendChild(pEl);
};