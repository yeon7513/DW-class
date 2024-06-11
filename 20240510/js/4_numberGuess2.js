"use strict";

let result = document.querySelector(".result-wrap ul");

// 각 버튼의 숫자를 클릭하면 가져와서 배열에 담기.
let selectNumber = [];

document.querySelectorAll("button").forEach(function(btn, idx) {
  btn.addEventListener("click", function() {
    let numbers = parseInt(btn.textContent);
    selectNumber.push(numbers);
    checkAnswer();
  });
});

// 랜덤 숫자 3개를 만들어 배열에 담기
let randomNumbers = [];
let answerNumber = 0;

for (let i = 0; i <= 2; i++) {
  answerNumber = parseInt(Math.random() * (10 - 1) + 1);
  if (randomNumbers.indexOf(answerNumber) === -1) {
    randomNumbers.push(answerNumber);
  } else {
    i--;
  }
} 

console.log(randomNumbers); // ok


// 랜덤 숫자와 클릭한 숫자들의 비교
function checkAnswer() {
  if (selectNumber.length == 3) {
    console.log(selectNumber[0]); // ok
    result.innerHTML += `<li>${selectNumber[0]}, ${selectNumber[1]}, ${selectNumber[2]}</li>`;

    // 정답 비교
    let correct = selectNumber.every(function(num, idx) {
      return num === randomNumbers[idx];
    });

    if (correct) {
      console.log("every : ", correct);
    } else if (selectNumber.some(function(num) {
      return randomNumbers.includes(num);
    })) {
      console.log("some : ", correct);
    } else {
      console.log("false : ", correct);
    }

    selectNumber = [];
  }
}
