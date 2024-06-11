'use strict';

// e.target과 this는 다르다.

// const form = document.querySelector('#form');
const form = document.querySelector('form');

form.addEventListener('click', function (e) {
  alert(`target: ${e.target.tagName}, this: ${this.tagName}`);
});

const btn = document.querySelector('button');

// btn.addEventListener('click', function (e) {
//   alert('button 태그 이벤트 핸들러');
//   e.stopPropagation(); // stopPropagation() : 버블링 막아주는 함수
// });

// DOM 이벤트에서 정의한 이벤트 흐름 3단계
// 1. 캡쳐링 단계 - 이벤트가 하위 요소로 전파되는 단계
// 2. 타깃 단계 - 이벤트가 실제 타깃 요소에 전달되는 단계 (트리거 역할)
// 3. 버블링 단계 - 이벤트가 상위 요소로 전파되는 단계

// const allEl = document.querySelectorAll('*');

// allEl.forEach(function (e) {
//   console.log(e);
//   if (e.tagName !== 'BUTTON') {
//     e.addEventListener(
//       'click',
//       function () {
//         alert(`캡쳐링: ${e.tagName}`);
//       },
//       { capture: true } // default : false ==> 즉, 버블링이 기본값. 줄여서 true라고만 써도됨.
//     );
//   }
// });
