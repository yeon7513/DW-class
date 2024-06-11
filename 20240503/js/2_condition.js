document.addEventListener('DOMContentLoaded', function(){

  "use strict";

  let ifCondition = document.querySelector(".if-condition ul");
  let switchCondition = document.querySelector(".switch-condition ul");

  // if문
  // if (조건식) {
  //   true 일 때 실행할 내용
  // }

  let year = 2024;
  
  if (year == 2020) {
    ifCondition.innerHTML += "<li>현재 년도는 2020년 입니다. (if)</li>"
  } 
  if (year == 2024) {
    ifCondition.innerHTML += "<li>현재 년도는 2024년 입니다. (if)</li>"
  }
  if (year == 2023) {
    ifCondition.innerHTML += "<li>현재 년도는 2024년 입니다. (if)</li>"
  } else if (year == 2024) {
    ifCondition.innerHTML += "<li>현재 년도는 2024년 입니다. (else if)</li>"
  } else {
    ifCondition.innerHTML += "<li>현재 년도는 2024년 입니다. (else)</li>"
  }
  
  let thisYear = 0;
  thisYear = Number(prompt("올해는 몇 년도 입니까?"));

  // if (thisYear == 2024) {
  //   alert("올해는 2024년 입니다.");
  // } else {
  //   alert("잘못입력하셨습니다.");
  // }


  // switch
  // switch의 case를 비교할 때는 동등비교(==)가 아닌 일치비교(===)를 한다.
  switch(thisYear) {
    case 2022:
      alert("현재 년도는 2022년도 입니다.");
      break;
    case 2023:
      alert("현재 년도는 2023년도 입니다.");
      break;
    case 2024:
      alert("현재 년도는 2024년도 입니다.");
      break;
    default :
      alert("잘못입력하셨습니다.");
      break;
  }

});