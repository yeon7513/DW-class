"use strict";

const wrapper = document.querySelector("#wrapper");
const gEl = wrapper.children[1].children[1];
const iEl = gEl.nextElementSibling;
const mEl = iEl.nextElementSibling;
const yEl = mEl.nextElementSibling;

const emailEx = wrapper.children[2].children[1];

// ** 정규 표현식 **
// - 문자열에서 특정한 규칙을 갖는 문자열의 집합을 찾아내기 위한 패턴이다.

// - 문법 : /검색패턴/플래그

// 1. 플래그
// - g : 검색 패턴을 비교할 때 일치하는 모든 부분을 선택하도록 설정
// - i : 검색 패턴을 비교할 때 대소문자를 구분하지 않도록 설정 
// - m : 검색 패턴을 비교할 때 여러줄의 입력 문자열을 그대로 여러 줄로 비교하도록 설정
// - y : 대상 문자열의 현재 위치부터 비교를 시작하도록 설정

// 1-1. g (전역 검색)
let str = "abcabc";
let result = str.match(/a/g);
// 슬래시(/)사이에 있어야 정규식으로 인식함.
// g가 붙어있지 않으면 처음 나오는 것만 찾음.
console.log(result);

gEl.innerHTML += `<h4>${str}에서 모든 a 검색</h4>`;
gEl.innerHTML += `<p>--> result : [${result.join(", ")}]</p>`;
// 정규식으로 걸러진 것들만 배열로 반환


// 1-2. i (대소문자 구분 없음)
str = "abcABC";
result = str.match(/a/gi);
console.log(result);

iEl.innerHTML += `<h4>${str}에서 대소문자 구분 없이 검색</h4>`;
iEl.innerHTML += `<p>--> result : [${result.join(", ")}]</p>`;


// 1-3. m (줄바꿈 검색)
str = "Hello World and \nPower Hello?\nPower Overwhelming!";
mEl.innerHTML += `<h4>${str}</h4>`;

result = str.match(/^Hello/); // ^ 문자는 문장 시작점을 의미함
console.log(result);
mEl.innerHTML += `<p>--> (/^Hello/) result : [${result}]</p>`;

result = str.match(/^Power/gm);
console.log(result);
mEl.innerHTML += `<p>--> (/^Power/gm) result : [${result.join(", ")}]</p>`;


// 1-4. y (위치 지정)
str = 'let varName = "value"';
yEl.innerHTML += `<h4>${str}에서 위치를 지정 후 영문자와 숫자를 검색</h4>`;

let regexp = /\w+/y; // --> + : 최소 하나 혹은 그 이상
console.log("regexp: ", regexp);
regexp.lastIndex = 3; // 위치를 지정해서 사용
result = regexp.exec(str);
console.log(result);
yEl.innerHTML += `<p>--> lastIndex = 3 result : [${result}]</p>`;

regexp.lastIndex = 5;
result = regexp.exec(str);
console.log(result);
yEl.innerHTML += `<p>--> lastIndex = 5 result : [${result}]</p>`;



// 2. 검색 패턴
// - 단순한 패턴을 검색하고자 할 때는 찾고자 하는 문자열을 직접 나열하면 된다.
// - 숫자만을 검색하거나 띄어쓰기, 특수문자 등을 검색하려면 
//   검색 패턴으로 특정한 특수 문자를 사용해야 한다.
// - 역슬래시(\) 다음에 나오는 특수 문자는 일반 문자로 해석한다.
// \d : 숫자를 검색한다는 의미 ==> /[0-9]/ 와 동일
// \D : 숫자가 아닌 문자를 검색 ==> /[^0-9]/ 와 동일
// \w : 언더바(_)를 포함한 영문자 및 숫자를 검색 ==> /[A-Z a-z 0-9]/ 와 동일
// \W : 언더바(_), 영문자 및 숫자가 아닌 문자를 검색 ==> /[^A-Z a-z 0-9]/ 와 동일
// \s : 띄어쓰기, 탭, 줄바꿈 문자 등의 공백 문자를 검색
// \S : 띄어쓰기, 탭, 줄바꿈 문자 등의 공백 문자가 아닌 문자를 검색
// \b : 단어의 맨 앞이나 맨 뒤가 패턴과 일치하는지를 검색

// 전화번호 검색 패턴의 예 
// 000-0000-0000 ==> /[0-9]{3}-[0-9]{3, 4}-[0-9]{4}/
// 000-0000-0000 ==> /\d{3}-\d{3, 4}-\d{4}/

// 이메일 검색 패턴 예
// ooooo@ooooo.ooo ==> /[0-9 a-z A-Z]+@[a-z]+\.[a-z]{2,}/    // {2,} : 최소 2자리

let reg = /^[0-9 a-z A-Z]+@[a-z]+\.[a-z]{2,}$/; // ^ : 시작점, $ : 마지막점
const email = "qwer@gmail.com";

emailEx.innerHTML += `<h4>${email}이 형식에 맞는지?</h4>`;

console.log(reg.test(email));
emailEx.innerHTML += `<p>정규식 : ${reg}</p>`;
emailEx.innerHTML += `<p>--> result : ${reg.test(email)}</p>`;

// 아이디 영소문자 3~8자리 + 숫자
reg = /^[a-z]{3, 8}[0-9]+$/;

// [^문자] : 괄호 안의 문자를 제외한 것
// [^lgEn] : l g E n 4개 문자를 제외
// ^문자열 : 특정 문자열로 시작 (시작점)
// 문자열$ : 특정 문자열로 끝 (종착점)
// ? : 없거나 or 최대 한개만 ==> /apple?/
// * : 없거나 or 있거나 (여러 개) ==> /apple*/
// + : 최소 한 개 or 여러 개 ==> /apple+/

