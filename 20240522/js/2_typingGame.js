"use strict";

const words = [
  "DW", "JavaScript", "DOM", "BOM", "document", "window", "Event"
];

const container = document.querySelector("#container");
const input = document.querySelector("#input");
const result = document.querySelector(".result");
const scorePanel = document.querySelector(".score");
let fadeOut;
let count = 0;
let score = 0;

// offsetWidth : 요소의 가로 길이
// offsetHeight : 요소의 세로 길이
// - offset의 영역 : content + padding + border (스크롤까지 포함) ==> 눈에 보이는 영역

// clientWidth : 요소 안에 있는 content의 가로 길이
// clientHeight : 요소 안에 있는 content의 세로 길이
// - client의 영역 : 만약 스크롤이 있다면, 스크롤의 thumb이 있는 위치
console.log(`offsetWidth: ${container.offsetWidth}, offsetHeight: ${container.offsetHeight}`);

const maxPositionX = container.offsetWidth - 100;
const maxPositionY = container.offsetHeight - 300;

// 단어를 생성하고 화면에 출력
function init() {
  words.forEach(el => {
    // span 생성 후 배열 요소 넣기
    const spanEl = document.createElement("span");
    spanEl.innerHTML = el;
    spanEl.classList.add("word");

    // 아이디 속성을 추가
    spanEl.setAttribute("id", el);

    // 랜덤 위치 지정
    spanEl.style.top = `${Math.floor(Math.random() * maxPositionY)}px`;
    spanEl.style.left = `${Math.floor(Math.random() * maxPositionX)}px`;

    // container에 넣기
    container.append(spanEl);
  });
};



// 단어들을 내려오게 하는 부분
function wordRain() {
  const words = document.querySelectorAll(".word");
  console.log(words);
  // getBoundingClientRect() : 최종 렌더링된 크기 반환
  // ==> 현재 뷰표트에서의 요소의 상대적인 위치 정보를 반환
  // offset- , client- , scroll- :  레이아웃 크기를 반환
  
  const bottom = container.getBoundingClientRect().bottom - 80;

  setInterval(function() {
    words.forEach(function(el) {
      const rectSize = el.getBoundingClientRect();
      el.style.top = `${rectSize.top - 90}px`;
  
      if (el.getBoundingClientRect().bottom > bottom) {
        el.remove();
      }
    });
  }, 1000);
};

// result fadeOut
let opacity = 0;
let fadeout;

function hide() {
  opacity = Number(getComputedStyle(result).getPropertyValue("opacity"));

  if (opacity > 0) {
    opacity -= 0.1;
    result.style.opacity = opacity;
  } else {
    clearInterval(fadeout);
  }
};

// 사용자가 입력하나 텍스트와 동일한 id를 가진 span 태그를 제거한다.
function removeSpan() {
  const word = document.querySelector(`span[id="${input.value}"]`);
  if (word == input.value) {
    word.remove();
    count++;
    score++;
    if (count == words.length) {
      alert("Game Clear!");
      if (confirm("재도전하기")) {
        window.location.reload();
      }
    }
    scorePanel.innerHTML = `score : ${score}`;
    result.innerHTML = "Wow!";
    fadeout = setInterval(hide, 100);
    
  } else {
    result.innerHTML = "Oops...";
    fadeout = setInterval(hide, 100);

  }
  input.value = "";
};

input.addEventListener("change", removeSpan);

init();
wordRain();