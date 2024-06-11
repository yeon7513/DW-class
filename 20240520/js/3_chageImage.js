"use strict";

// 사진 5장 정도를 준비
// 사진의 경로를 배열에 담는다.
// 클릭할 때 마다 인덱스 번호 0 ~ 4를 랜덤숫자로 뽑는다.

let imgEl = document.querySelector("#img");
const animal = ["코알라", "뱁새", "병아리", "쿼카", "고양이"];

let lastIdx = 0;

const makeRandomNum = (length) => {
  while(true) {
    let random = parseInt(Math.random() * length);
    if (random !== lastIdx) {
      lastIdx = random;
      return random;
    }
  }
};

function changeImage() {
  const idx = makeRandomNum(animal.length);
  imgEl.src = `./images/${animal[idx]}.jpg`;
};



const sea = ["거북이", "돌멩이", "바닷속", "수영하는사람", "해변"];

function changeImage2() {
  sea.map((v, i) => {
    const idx = makeRandomNum(sea.length);
    if (i == idx) {
      return imgEl.src = `./images/${v}.jpg`;
    }
  });
};