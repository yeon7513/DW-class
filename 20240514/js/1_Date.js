"use strict";

const dateObjDiv = document.querySelector(".dateObj");
const yearDiv = document.querySelector(".year");
const monthDiv = document.querySelector(".month");
const dateDiv = document.querySelector(".date");
const dayDiv = document.querySelector(".day");

// Date 객체 생성
const now = new Date();
dateObjDiv.innerHTML += `<p>${now}</p>`;

// getFullYear() - 년도를 반환하는 함수
const year = now.getFullYear();
yearDiv.innerHTML += `<p>${year}</p>`;

// getMonth() - 달을 반환하는 함수
let month = now.getMonth();
month = month + 1;
month = month < 10 ? "0" + month : month;
monthDiv.innerHTML += `<p>${month}</p>`;

// getDate() - 일을 반환하는 함수
let date = now.getDate();
date = date < 10 ? "0" + date : date;
dateDiv.innerHTML += `<p>${date}</p>`;
dateDiv.innerHTML += `<p>${year}-${month}-${date}</p>`;


// getDay() - 요일 숫자를 반환하는 함수
const day = now.getDay();
const dayArr = ["일", "월", "화", "수", "목", "금", "토"];
dayDiv.innerHTML += `<p>${dayArr[day]}</p>`;
dayDiv.innerHTML += `<p>${year}-${month}-${date} (${dayArr[day]})</p>`;

// getHours() - 시간을 반환해준다.
let hours = now.getHours();
hours = hours < 10 ? "0" + hours : hours;

// getMinutes() - 분을 반환해준다.
let minutes = now.getMinutes();
minutes = minutes < 10 ? "0" + minutes : minutes;

// getSeconds() - 초을 반환해준다.
let seconds = now.getSeconds();
seconds = seconds < 10 ? "0" + seconds : seconds;

const time = document.querySelector(".time");
time.innerHTML += `<p>${hours} : ${minutes} : ${seconds}</p>`


// 예제
const today = new Date();
const dateTime = document.querySelector(".dateTime ul");

dateTime.innerHTML += `<li><span>toDateString()</span> : ${today.toDateString()}</li>`;
dateTime.innerHTML += `<li><span>toISOString()</span> : ${today.toISOString()}</li>`;
dateTime.innerHTML += `<li><span>toJSON()</span> : ${today.toJSON()}</li>`;
dateTime.innerHTML += `<li><span>toLocaleDateString()</span> : ${today.toLocaleDateString()}</li>`;
dateTime.innerHTML += `<li><span>toLocaleTimeString()</span> : ${today.toLocaleTimeString()}</li>`;
dateTime.innerHTML += `<li><span>toLocaleString()</span> : ${today.toLocaleString()}</li>`;
dateTime.innerHTML += `<li><span>toString()</span> : ${today.toString()}</li>`;
dateTime.innerHTML += `<li><span>toTimeString()</span> : ${today.toTimeString()}</li>`;
dateTime.innerHTML += `<li><span>toUTCString()</span> : ${today.toUTCString()}</li>`;

// getTime() - 기준시간(1970년 1월 1일)으로부터의 경과시간을 반환한다.
const getTimeFn = now.getTime();

const getTimeDiv = document.querySelector(".getTimeFn");
getTimeDiv.innerHTML += `<p>${getTimeFn}</p>`;

// 임의로 날짜를 지정
const setDateTimeDiv = document.querySelector(".setDateTime");
const newDate = new Date();
const setFullYear = newDate.setFullYear(2021);

setDateTimeDiv.innerHTML += `<p><span>newDate</span> : ${newDate}</p>`;
setDateTimeDiv.innerHTML += `<p><span>setFullYear</span> : ${setFullYear}</p>`;

const setMonth = newDate.setMonth(11);
setDateTimeDiv.innerHTML += `<p><span>newDate</span> : ${newDate}</p>`;
setDateTimeDiv.innerHTML += `<p><span>setMonth</span> : ${setMonth}</p>`;

const setDate = newDate.setDate(25);
setDateTimeDiv.innerHTML += `<p><span>newDate</span> : ${newDate}</p>`;
setDateTimeDiv.innerHTML += `<p><span>setDate</span> : ${setDate}</p>`;


// 년, 월, 일 더하기/빼기
const dateCalc = document.querySelector(".date-calculation");

const date1 = new Date("2021-05-01");
dateCalc.innerHTML += `<p><span>date1</span> : ${date1}</p>`;


// date1의 일을 하루 뺀다.
date1.setDate(date1.getDate() - 1);
dateCalc.innerHTML += `<p><span>date1의 하루를 뺌</span> : ${date1}</p>`;

// date2를 2024년 11월 15일로 만들기
const date2 = new Date("2021-12-30");
dateCalc.innerHTML += `<p><span>date2</span> : ${date2}</p>`;

date2.setFullYear(date2.getFullYear() + 3);
date2.setMonth(date2.getMonth() - 1);
date2.setDate(date2.getDate() - 15);

dateCalc.innerHTML += `<p><span>date2를 2024.11.15로</span> : ${date2}</p>`;

const diff = date2 - date1;

console.log(diff); // 111888000000ms로 나옴.
// ms = 0.001s 
// 1000ms = 1s
// 60s = 1m
// 60m = 1h
// 24h = 1d
// 7d = 1w
// 30d = 1m (대략..)

// 즉, 111888000000ms / 1000 ==> 초
// 111888000000 / 1000 / 60 ==> 분
// 111888000000 / 1000 / 60 / 60 ==> 시
// 111888000000 / 1000 / 60 / 60 / 24 ==> 일

// 2021-04-30 부터 2024-11-15까지의 일수 차이
let diffDay = 24 * 60 * 60 * 1000 ;
console.log(diffDay);

// 2021-04-30 부터 2024-11-15까지의 개월수 차이
let diffMonth = diffDay * 30;

// 2021-04-30 부터 2024-11-15까지의 년수 차이
let diffYear = diffMonth * 12;

dateCalc.innerHTML += `<p><span>date1</span> : ${date1.toLocaleDateString()} / <span>date2</span> : ${date2.toLocaleDateString()}</p>`;
dateCalc.innerHTML += `<p><span>date1과 date2의 일수 차이</span> : ${parseInt(diff / diffDay)}일</p>`;
dateCalc.innerHTML += `<p><span>date1과 date2의 개월수 차이</span> : ${parseInt(diff / diffMonth)}개월</p>`;
dateCalc.innerHTML += `<p><span>date1과 date2의 년수 차이</span> : ${parseInt(diff / diffYear)}년</p>`;

dateCalc.innerHTML += `<p><span>date1.toLocaleString()</span> : ${date1.toLocaleString()}</p>`;
dateCalc.innerHTML += `<p><span>date1.toLocaleDateString()</span> : ${date1.toLocaleDateString()}</p>`;
dateCalc.innerHTML += `<p><span>date1.toLocaleTimeString()</span> : ${date1.toLocaleTimeString()}</p>`;

// date1.toLocaleString("표기할 언어", {옵션객체 year, month, day, weekday});
date1.setDate(date1.getDate() + 30);

dateCalc.innerHTML += `
  <p>
    <span>
      toLocaleString 옵션 (2-digit) : 
    </span>
    ${date1.toLocaleString("ko-KR", { month : "2-digit" })}<br />
    <span>
      toLocaleString 옵션 (long) : 
    </span>
    ${date1.toLocaleString("ko-KR", { month : "long" })}<br />
    <span>
      toLocaleString 옵션 (narrow) : 
    </span>
    ${date1.toLocaleString("ko-KR", { month : "narrow" })}<br />
    <span>
      toLocaleString 옵션 (numeric) : 
    </span>
    ${date1.toLocaleString("ko-KR", { month : "numeric" })}<br />
    <span>
      toLocaleString 옵션 (short) : 
    </span>
    ${date1.toLocaleString("ko-KR", { month : "short" })}<br />
  </p>
`;

// option을 변수에 담아 사용할 수 있다.
date1.toLocaleString();
const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  weekday: "long"
};

dateCalc.innerHTML += `
  <p>
    <span>옵션 객체로 표현하기</span> : 
    ${date1.toLocaleString("ko-KR", options)}
  </p>
`;
dateCalc.innerHTML += `
  <p>
    <span>toISOString()</span> : 
    ${date1.toISOString()}
  </p>
`;

// toISOString()에서 T 빼기 방법 1
let dateFormatStr = date1.toISOString();
dateFormatStr = dateFormatStr.split("T");

dateCalc.innerHTML += `
  <p>
    <span>toISOString()에서 T 빼기 1</span> : 
    ${dateFormatStr}
  </p>
`;

// toISOString()에서 T 빼기 방법 2
dateCalc.innerHTML += `
  <p>
    <span>toISOString()에서 T 빼기 2</span> : 
    ${date1.toISOString().split("T")[0]}
  </p>
`;