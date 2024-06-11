document.addEventListener('DOMContentLoaded', function(){

  "use strict";

  // for문
  const forUlEl = document.querySelector(".for ul");
  
  for ( let i = 0; i < 10; i++ ) {
    forUlEl.innerHTML += `<li>카운터 : ${i}</li>`;
  }
  
  // for문 연습
  const forExUlEl = document.querySelector(".for-ex ul");

  for ( let i = 10; i >= 1; i-- ) {
    forExUlEl.innerHTML += `<li>카운터 : ${i}</li>`;
  }

  // 구구단 2단 만들기
  const multiple2El = document.querySelector(".multiple-2");

  for (let i = 1; i <= 9; i++) {
    multiple2El.innerHTML += `<p>2 X ${i} = ${2 * i}</p>`;
  }

  // 1 부터 10 까지의 합
  const sumEl = document.querySelector(".sum-from-1-to-10");

  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + i;
  }
  sumEl.innerHTML += `1부터 10까지의 합 : ${sum}`;

  // 1부터 20까지의 숫자 중 짝수만 출력하기
  const evenEl = document.querySelector(".even-from-1-to-20");
  
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      evenEl.innerHTML += `<p>${i}</p>`;
    }
  }

  // Q1. 1부터 100까지의 숫자 중 홀수들의 합을 구하시오.
  const sumOddNumber = document.querySelector(".sum-odd-number");

  let oddSum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1){
      oddSum = oddSum + i;
    }
  }
  sumOddNumber.innerHTML += `<p>1부터 100까지의 숫자 중 홀수들의 합 : ${oddSum}</p>`;

  // 중첩 반복문
  const nestedLoop = document.querySelector(".nested-loop");

  for (let i = 0; i < 3; i++) {
    nestedLoop.innerHTML += `<p style="color: red;">i 반복문 ${i}회차 시작</p>`;
    for (let j = 0; j < 3; j++) {
      nestedLoop.innerHTML += `<p>j 반복문 ${j}회차 시작</p>`;
      nestedLoop.innerHTML += `<p>j 반복문 ${j}회차 끝</p>`;
    }
    nestedLoop.innerHTML += `<p style="color: blue;">i 반복문 ${i}회차 끝</p>`;
  }

  // 구구단
  const multiples = document.querySelector(".multiples");

  for (let i = 2; i <= 9; i++) {
    const multipleDiv = document.createElement("div");
    multiples.appendChild(multipleDiv);
    multipleDiv.innerHTML += `<h4>${i}단</h4>`;
    for (let j = 1; j <= 9; j++) {
      multipleDiv.innerHTML += `<p>${i} X ${j} = ${i * j}</p>`
    }
  }

});