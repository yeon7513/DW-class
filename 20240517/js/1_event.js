"use strict";

// ** 이벤트 리스너(event listener) **

// 이벤트 리스너란 이벤트가 발생했을 때 그 처리를 담당하는 함수를 가리키며,
// 이벤트 핸들러(event handler) 라고도 한다.
// 지정된 타입의 이벤트가 특정 요소에서 발생하면
// 그 요소에 등록된 이벤트 리스너를 실행시킨다.

// ** 이벤트 리스너 등록 방법 **
// 1. html 태그에 속성으로 등록
// 2. javascript에서 프로퍼티로 등록

// addEventListener() 함수 사용
// 대상객체.addEventListener(이벤트명(또는 이벤트타입), 실행할 이벤트리스너(또는 익명함수), 이벤트전파방식)

// ** 마우스 이벤트 **
const pEl = document.querySelector("#pTag");

// 1. click - 클릭. mousedown과 mouseup을 통틀어 click이라고 한다.
// pEl.addEventListener("click", function() {
//   alert("click 이벤트 발생");
// });

// 2. doubleclick - 더블클릭 
// pEl.addEventListener("dblclick", function() {
//   alert("dblclick 이벤트 발생");
// });

// 3. mousedown - 마우스의 왼쪽 버튼을 누르는 순간
// pEl.addEventListener("mousedown", function() {
//   console.log("mousedown 이벤트 발생");
// });

// 4. mouseup - 마우스의 왼쪽 버튼을 누르고 떼는 순간
// pEl.addEventListener("mouseup", function() {
//   console.log("mouseup 이벤트 발생");
// });

// 5. mousemove - 해당 요소 안에서 마우스가 움직일 때마다
// pEl.addEventListener("mousemove", function() {
//   console.log("mousemove 이벤트 발생");
// });

// 6. mouseover - 마우스를 해당 요소 바깥에서 안으로 옮겼을 때
// pEl.addEventListener("mouseover", function() {
//   alert("mouseover 이벤트 발생");
// });

// 7. mouseout - 마우스를 해당 요소 안에서 바깥으로 옮겼을 때
// pEl.addEventListener("mouseout", function() {
//   alert("mouseout 이벤트 발생");
// });

// 8. contextmenu - 마우스의 오른쪽 버튼을 눌렀을 때
// pEl.addEventListener("contextmenu", function(e) {
//   console.log(e);
  
//   // preventDefault() -> 기존 이벤트(기능)를 막는 역할 
//   e.preventDefault();

//   // alert("contextmenu 이벤트 발생");
//   alert("마우스 우클릭이 방지된 사이트입니다.");
// });


// ** UI 이벤트 **

// 1. load - 화면이 로딩됐을 때
// window.addEventListener("load", function() {
//   alert("load 이벤트 발생");
// });

// 2. resize - 브라우저의 크기를 변경했을 때
// window.addEventListener("resize", function() {
//   if (window.innerWidth > 800) {
//     pEl.style.backgroundColor = "red";
//   } else {
//     pEl.style.backgroundColor = "yellow";
//   }
// });

// 3. scroll - 대상객체의 스크롤이 움직였을 때
// window.addEventListener("scroll", function() {
//   console.log("scroll 이벤트 발생");
// });


// ** 키보드 이벤트 **
const inputEl = document.getElementById("inputTag");

// 1. keydown - 사용자가 키를 처음 눌렀을 때 (눌리는 순간)
// inputEl.addEventListener("keydown", function(e) {
//   // alert("keydown 이벤트 발생");
//   console.log(e);
//   console.log(`key : ${e.key}, code : ${e.code}`);
// });

// 2. keyup - 사용자가 키를 뗄 때 (떼는 순간)
// inputEl.addEventListener("keyup", function() {
//   console.log(inputEl.value); // 꾹 누르고 있다가 떼면 나옴.

//   // 한글을 입력 못하게 하기
//   inputEl.value = inputEl.value.replace(/[ㄱ-ㅎ ㅏ-ㅡ 가-힣]/g, "");

// });

// 3. keypress - 사용자가 눌렀던 키의 문자가 입력되었을 때 
// inputEl.addEventListener("keypress", function() {
//   // 한글일 때는 안됨. 한글로 이벤트 발생할거면 keydown으로...
//   alert("keypress 이벤트 발생");
// });

// ** 키보드 이벤트의 순서 **
// keydown -> keypress -> keyup
// 단, keypress는 한글 입력 시 이벤트가 발생하지 않는다.


// ** 포커스 이벤트 **

// 1. focus - 요소에 포커스가 잡혀있을 때
// inputEl.addEventListener("focus", function() {
//   console.log("focus 이벤트 발생");
// });

// 2. blur - 요소가 포커스를 잃었을 때
// inputEl.addEventListener("blur", function() {
//   console.log("blur 이벤트 발생");
// });


// ** 폼 이벤트 **

// 1. input - input, textarea 태그의 값이 변경되었을 때
const classEl = document.getElementsByClassName("formEl");
// getElementsByClassName으로 가져올 경우 
// -> 스프레드 연산자([...]) 또는 Array.from()으로 배열로 변환하여 사용하여야함!

// 1-1. for 이용
// for (let i = 0; i < classEl.length; i++) {
//   classEl[i].addEventListener("input", function() {
//     console.log("input 이벤트 발생");
//   });
// }

// 1-2. forEach 이용 
// [...classEl].forEach((el) => {
//   el.addEventListener("input", function() {
//     console.log("input 이벤트 발생");
//   });
// });

// 2. change - 체크박스, 라디오 버튼, 콤보박스(셀렉트박스)가 변경되었을 때
const changeEl = document.querySelectorAll(".changeTest");
// querySelectorAll은 배열로 변환하지않아도 됨.
// 왜? -> 반환된 NodeList가 forEach 메서드를 지원하기 때문

// 2-1. for 이용
// for (let i = 0; i < changeEl.length; i++) {
//   changeEl[i].addEventListener("change", function() {
//     console.log(changeEl[i].value);
//   });
// }

// 2-2. forEach 이용
// changeEl.forEach(function(e) {
//   e.addEventListener("change", function() {
//     console.log(e.value);
//   });
// });

// 3. submit, reset 
// - form태그에서 이루어지는 이벤트기 때문에 버튼에 직접적으로 달아주는것이 아니라, 
//   form태그 자체에 달아줘야한다.
const submitEl = document.getElementById("submitBtn"); // <-- 이렇게 submit 버튼 자체로 가져오면 안됨!!
const formEl = document.forms[0]; // <-- 선택할 필요 없이 forms로 가져옴.
// form이 여러 개 일 경우에는 forms[index]로 선택하면 됨.

// * 주의사항!!!!
// - document.forms 자체로는 addEventListener를 사용할 수 없다.
// - forms[index]로 지정해야 된다.

// * document.forms 자체로 이벤트를 걸 경우??
// - forms를 배열(스프레드 연산자 or Array.from())로 변환 후
// - forEach로 addEventListener를 사용할 수 있다.
// const formEl2 = document.forms;
// [...formEl2].forEach((e) => {
//   e.addEventListener("submit", function() {
//     alert("submit 이벤트 발생");
//   });
// });

// 3-1. submit
formEl.addEventListener("submit", function() {
  alert("submit 이벤트 발생");
});

// 3-2. reset
formEl.addEventListener("reset", function() {
  alert("reset 이벤트 발생");
});


// 4. cut, copy, paste - preventDefault()를 사용하면 기본 기능을 막을 수 있다.
const textareaEl = document.querySelector("textarea");

// 4-1. cut - 잘라내기 (Ctrl+X)
textareaEl.addEventListener("cut", function() {
  alert("cut 이벤트 발생");
});

// 4-2. copy - 복사 (Ctrl+C)
textareaEl.addEventListener("copy", function() {
  alert("copy 이벤트 발생");
});

// 4-3. paste - 붙여넣기 (Ctrl+V)
textareaEl.addEventListener("paste", function() {
  alert("paste 이벤트 발생");
});