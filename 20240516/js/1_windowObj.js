"use strict";

let child;

function openPopup() {
  // open("팝업을 띄울 화면의 경로", "target속성의 값", "팝업창의 사이즈 또는 위치");
  child = window.open(
    "https://yeon7513.github.io/number-guess/", 
    "_blank", 
    "width=800, height=500, top=150, left=150, location=0", 
  );
};

function closePopup() {
  child.close();
};

function showAlert() {
  // setTimeout(콜백함수 or 익명함수, 지연시간(ms));
  setTimeout(function() {
    alert("setTimeOut()을 사용하여 3초 이후에 표시되었습니다.");
  }, 3000);
};

let start;

function startInterval() {
  start = setInterval(function() {
    let colors = [];
    for (let i = 1; i <= 3; i++) {
      let random = parseInt(Math.random() * 256);
      colors.push(random);
    }
    const intervalEl = document.querySelector("#interval");
    const luma = 0.2126 * colors[0] + 0.7152 * colors[1] + 0.0722 * colors[2];
    intervalEl.style.backgroundColor = `rgb(${colors.join(", ")})`;
    intervalEl.style.color = luma <= 155 ? "#fff" : "#333";
  }, 500);
};

function finishInterval() {
  clearInterval(start);
};

const locationEl = document.querySelector(".location");
function showLocation() {
  console.log(location);
  locationEl.innerHTML = `<p>location : ${location}</p>`;
};