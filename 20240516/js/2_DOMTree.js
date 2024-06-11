"use strict";

const list1El = document.getElementById("list-1");

// 자식 요소 찾기 (:nth-child와 비슷!!)
console.log(list1El.children);
console.log(list1El.children[2]);

list1El.children[4].style.backgroundColor = "orange";

// html에서 작성한 ul과 li간의 간격이 나옴. --> node
console.log(list1El.firstChild);

// 자식 요소를 찾으려면? --> firstElementChild, lastElementChild
// :first-child, :last-child와 비슷함.
console.log(list1El.firstElementChild);
console.log(list1El.lastElementChild);

// 부모 요소 찾기
console.log(list1El.parentElement); // --> #content

list1El.parentElement.style.border = "5px solid blue";

// 부모 요소와 가장 가까운 조상 요소 찾기 --> closest("찾고자 하는 요소")
console.log(list1El.lastElementChild.closest("div#content"));

console.log(list1El.parentElement.closest("body")); // body 찾기
console.log(list1El.parentElement.parentElement); // 위와 동일한 결과 출력


// 형제 요소 찾기
console.log(list1El.children[2].previousElementSibling); // 이전 형제 요소
console.log(list1El.children[2].nextElementSibling); // 다음 형제 요소
console.log(list1El.nextElementSibling); // h1#title-2
console.log(list1El.nextElementSibling.nextElementSibling); // ul#list-2