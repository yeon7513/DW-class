"use strict";

// 1. charAt() 함수
// - 문자열에서 전달받은 인덱스에 위치한 문자나 문자 코드를 반환한다.

const charAtEl = document.querySelector(".charAt");

const str1 = "Javascript";

charAtEl.innerHTML += `<h2>str1 : ${str1}</h2>`
charAtEl.innerHTML += `<p>0번째 인덱스 : ${str1.charAt(0)}</p>`;
charAtEl.innerHTML += `<p>5번째 인덱스 : ${str1.charAt(5)}</p>`;


// 2. indexOf() 함수
// - 문자나 문자열이 처음으로 등장하는 위치(인덱스)를 반환한다.

const indexOfEl = document.querySelector(".indexOf");

const str2 = "abcDEFabc";

indexOfEl.innerHTML += `<h2>str2 : ${str2}</h2>`;
indexOfEl.innerHTML += `<p>abc가 시작되는 인덱스 : ${str2.indexOf('abc')}</p>`;
indexOfEl.innerHTML += `<p>abcd가 시작되는 인덱스 : ${str2.indexOf('abcd')}</p>`;
// -1이 나오는 것은 찾지 못한 것... 즉, 대소문자를 구분한다!
indexOfEl.innerHTML += `<p>인덱스 3부터 abc가 시작되는 인덱스 : ${str2.indexOf('abc', 3)}</p>`;


// 3. lastIndexOf() 함수
// - 문자열에서 특정 문자나 문자열이 마지막으로 등장하는 위치(인덱스)를 반환한다.
const lastIndexOfEl = document.querySelector(".lastIndexOf");

const str3 = "abcDEFabcDEFabc";

lastIndexOfEl.innerHTML += `<h2>str3 : ${str3}</h2>`;
lastIndexOfEl.innerHTML += `<p>abc가 시작되는 인덱스 : ${str3.lastIndexOf('abc')}</p>`;


// 4. trim() 함수
// - 문자열의 양 끝에 존재하는 모든 공백과 줄바꿈 문자를 제거한 새로운 문자열을 반환한다.
const trimEl = document.querySelector(".trim");

const str4 = "     J a v a s c r i p t    ";

trimEl.innerHTML += `<h2>str4 : '${str4}'</h2>`;
trimEl.innerHTML += `<p>trim 함수로 공백 제거 : '${str4.trim()}'</p>`;


// 5. replace(), replaceAll() 함수
// 문자열에서 파라미터로 전달받은 문자를 이용하여 기존 문자열의 대체작업을 수행한다.
const replaceEl = document.querySelector(".replace");

const str5 = "Javascript is AweSome";

replaceEl.innerHTML += `<h2>str5 : ${str5}</h2>`;
replaceEl.innerHTML += `<p>s를 *로 대체(replace) : ${str5.replace("s", "*")}</p>`;
// replace도 대소문자 구분을 한다.
// 만약 찾고자 하는 문자를 찾는다면 그 뒤로는 바꾸지않음. (1번만 수행)
replaceEl.innerHTML += `<p>s를 *로 모두 대체(replaceAll) : ${str5.replaceAll("s", "*")}</p>`;


// 6. substring() 함수
// - 문자열에서 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지
//   문자열을 추출한 새로운 문자열을 반환한다. (배열의 slice()와 비슷함)
const substringEl = document.querySelector(".substring");

const str6 = "abcDEFabc";
substringEl.innerHTML += `<h2>str6 : ${str6}</h2>`;
substringEl.innerHTML += `<p>substring(2, 6) : ${str6.substring(2, 6)}</p>`;
substringEl.innerHTML += `<p>substring(4, 8) : ${str6.substring(4, 8)}</p>`;
substringEl.innerHTML += `<p>substring(2) : ${str6.substring(2)}</p>`;
// 파라미터를 1개만 넣어주면 시작 인덱스부터 끝까지 반환함.


// 7. substr() 함수
// - 문자열에서 전달받은 시작 인덱스부터 길이(length)만큼의 문자열을 추출한 
//   새로운 문자열을 반환한다.
const substrEl = document.querySelector(".substr");

const str7 = "abcDEFabc";
substrEl.innerHTML += `<h2>str7 : ${str7}</h2>`;
substrEl.innerHTML += `<p>substr(2, 6) : ${str7.substr(2, 6)}</p>`;
// 첫번째 파라미터 : 시작 인덱스, 두번째 파라미터 : 길이(반환할 갯수?)
substrEl.innerHTML += `<p>substr(1) : ${str7.substr(1)}</p>`;
// 파라미터를 1개만 넣어주면 시작 인덱스부터 끝까지 반환함.


// 8. slice() 함수
// - 문자열에서 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지
//   문자열을 추출한 새로운 문자열을 반환한다.
// - substring()과 결과는 똑같이 나온다.

const sliceEl = document.querySelector(".slice");

const str8 = "abcDEFabc";
sliceEl.innerHTML += `<h2>str8 : ${str8}</h2>`;
sliceEl.innerHTML += `<p>slice(2, 6) : ${str8.slice(2, 6)}</p>`;

// 차이점 1
// - substring()과 slice()는 음수의 인덱스를 적어줄 수 있다.
// - substring()은 인덱스를 음수로 적으면 무조건 0으로 바뀜. 
//   -->음수와 음수가 만나면 0과 0이기 때문에 아무것도 반환하지않음.
// - slice()는 인덱스를 음수로 적으면 거꾸로 세어 결과를 반환함.
/* 
  slice()에서 음수 인덱스 예시
    -9 -8 -7 -6 -5 -4 -3 -2 -1
    a   b  c  D  E  F  a  b  c
    0  1   2  3  4  5  6  7  8
*/
sliceEl.innerHTML += `<p>slice(-4, -2) : ${str8.slice(-4, -2)}</p>`; // 거꾸로 세어 반환
sliceEl.innerHTML += `<p>substring(-4, -2) : ${str8.substring(-4, -2)}</p>`; // 아무것도 안나옴

// 차이점 2
// - 시작인덱스가 종료인덱스보다 클 경우
// - substring()은 두 개의 파라미터를 바꿔서 결과를 반환한다.
// - slice()는 작동하지 않는다.
sliceEl.innerHTML += `<p>slice(4, 2) : ${str8.slice(4, 2)}</p>`; // 아무것도 안나옴
sliceEl.innerHTML += `<p>substring(4, 2) : ${str8.substring(4, 2)}</p>`; // 파라미터를 바꿔서 반환


// 9. split() 함수
// - 문자열을 구분자를 기준으로 나눈 후, 나뉜 문자열을 배열로 반환한다.
const splitEl = document.querySelector(".split");

const str9 = "사과+바나나/파인애플/딸기+포도";
splitEl.innerHTML += `<h2>str9 : ${str9}</h2>`;
splitEl.innerHTML += `<p>split으로 '/'를 기준으로 나눈 배열 : [${str9.split("/")}]</p>`;
splitEl.innerHTML += `<p>split으로 '+'를 기준으로 나눈 배열 : [${str9.split("+")}]</p>`;