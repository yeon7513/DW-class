"use strict";

// 1. "웹 HTML"이 적혀있는 li 태그의 배경색상을 바꿔보세요. (id 선택자 금지)
const divEl = document.querySelector("div");
const ulEl = divEl.children[1];

ulEl.firstElementChild.style.backgroundColor = "yellow";

console.log(ulEl);

// 2. "React"가 적혀있는 li 태그의 폰트 색상을 바꿔보세요. (id 선택자 금지)
ulEl.lastElementChild.style.color = "green";

// 3. doing-list 부터 시작하여 done-list의 핵심 자바스크립트의 폰트 굵기를 바꿔보세요.
const doingList = document.querySelector("#doing-list");
const doneList = doingList.nextElementSibling.nextElementSibling;

doneList.lastElementChild.style.fontWeight = "bold";

// 4. 아래의 코드 요소부터 시작하여 "진행중인 과목"이 적힌 h1 태그의 border를 바꿔보세요.
const doneChild = document.querySelector("#done-list").children[4];
const doingTitle = doneChild.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;

console.log(doingTitle);

doingTitle.style.border = "3px solid blue";
