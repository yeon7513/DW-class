"use strict";

const wrapper = document.querySelector("#wrapper");
const varEl = wrapper.children[1];
const letConstEl = wrapper.children[2];
const funcEl = wrapper.children[3];

const arr = [1, 2, 3, 4, 5];

// basic function
arr.map(function(v) {
  return v * 3;
});

// arrow function
arr.map(v => v * 3); // 중괄호가 없으면 "return을 생략해서 사용하겠다" 라는 의미
arr.map(v => { return v * 3 }); // 중괄호를 쓰면 return을 꼭 써줘야한다.
arr.map((v, i) => v * 3); // 파라미터가 2개이면 소괄호로 묶어줘야 한다.


// ** 호이스팅 (hoisting) **
let a = 10;

if (true) {
  console.log(a);
  // let a = 20; // --> 오류난다. 왜? 재선언이 불가능함!!
}

// 1. var
// - 블록스코프가 없다. 전역레벨과 함수레벨의 스코프만 가질 수 있다.
// - 호이스팅 시 선언과 초기화가 동시에 이루어진다.

if (true) {
  var test = true;
}
varEl.innerHTML += `<p>if안에 선언된 var : ${test}</p>`; // 오류없이 실행됨.

for (var i = 0; i < 10; i++) {
  console.log(i);
}
varEl.innerHTML += `<p>for안에서 선언된 var : ${i}</p>`; // 오류없이 실행됨.

// ** var의 특징
// - 함수안에서 var를 선언하면 전역이 아니고 지역으로 판단함.

function varTest() {
  var test = 5;
};
// alert(test); // 오류.

varEl.innerHTML += `<p>var의 호이스팅 : ${test1}</p>`; // 오류는 없다. undefined 출력

// - 오류없이 변수의 재선언이 가능하다.
var test1 = 10;
var test1 = 20;

function sayHi() {
  phrase = "Hello";

  varEl.innerHTML += `<p>값을 할당 후 선언 : ${phrase}</p>`;
  
  var phrase;
};

sayHi();



// 2. let과 const
// - ES6 부터 등장.
// - let과 const는 블록 레벨의 스코프를 가진다.

// ** var와의 차이점
letConstEl.innerHTML += `<p>var를 사용하여 선언과 동시에 초기화 : ${foo}</p>`;
var foo;

// console.log(bar); // initialization 오류
// let bar; // --> TDZ

// 이렇게 선언 후 사용해야함..
let bar;
letConstEl.innerHTML += `<p>let를 사용하여 선언 후 초기화 : ${bar}</p>`; 

// ** 변수 선언의 단계 --> 선언단계 > 초기화단계 > 할당단계
// var은 선언과 동시에 초기화가 되기 때문에 값이 할당되지않은 상태인 undefined가 나온다.
// let은 선언과 초기화가 분리되서 작동하기 때문에 let을 나중에 선언하면 initialization 오류가 난다.

// 즉, 자바스크립트 엔진이 실행되면서 선언 단계가 실행된다.
// 아직 변수가 초기화(undefined로) 되지 않았기 때문에 오류가 나는 것이다.



// 3. 함수 선언식 vs 함수 표현식

declaration(); // --> 작동
// expression(); // --> 오류

// 3-1. 함수 선언식 (Function Declaration)
// - function 키워드를 사용하여 함수를 선언
// - 호이스팅(hoisting)에 의해 함수 선언 전에 호출이 가능.
// - 코드의 최상위나 블록 내에 독립적으로 존재할 수 있다.
// - 함수 이름을 필수적으로 가져야한다.

function declaration() {
  funcEl.innerHTML += "<p>함수 선언식(declaration) : 호이스팅 가능</p>";
};


// 3-2. 함수 표현식 (Function Expression)
// - 변수를 사용하여 함수를 정의한다.
// - 호이스팅되지 않으며, 정의된 이후에만 호출할 수 있다.
// - 따라서 변수의 유효범위와 동일한 범위를 갖는다.
// - 익명함수일 수도 있고, 이름을 가질 수도 있다.

const expression = function() {
  funcEl.innerHTML += "<p>함수 표현식(expression) : const 키워드를 사용했기 때문에 호이스팅이 불가능</p>";
};

expression();