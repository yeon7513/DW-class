document.addEventListener('DOMContentLoaded', function(){

  "use strict";

  // if문 연습

  // // 1. 첫번째 숫자를 입력받을 프롬프트를 띄운다.
  // let num1 = +prompt("첫번째 숫자를 입력하세요.");
  // while (isNaN(num1)) {
  //   alert("숫자만 입력해주세요!");
  //   num1 = +prompt("첫번째 숫자를 입력하세요.");
  // }
  
  // // 2. 두번째 숫자를 입력받을 프롬프트를 띄운다.
  // let num2 = +prompt("두번째 숫자를 입력하세요.");
  // while (isNaN(num2)) {
  //   alert("숫자만 입력해주세요!");
  //   num2 = +prompt("두번째 숫자를 입력하세요.");
  // }

  // // 3. 연산자를 입력받을 프롬프트를 띄운다.
  // let operator = prompt("연산자를 입력하세요. (+, -, *, /, % 중 하나)");
  // while (
  //   operator != "+" && 
  //   operator != "-" && 
  //   operator != "*" && 
  //   operator != "/" && 
  //   operator != "%"
  // ) {
  //   alert("+, -, *, /, % 중 하나를 입력해주세요!")
  //   operator = prompt("연산자를 입력하세요. (+, -, *, /, % 중 하나)");
  // }

  // // 4. 연산자를 확인할 조건문 안에서 계산 결과를 도출한다.
  // if (operator == "plus") {
  //   sum = num1 + num2;
  //   console.log("plus");
  // } else if (operator == "-") {
  //   sum = num1 - num2;
  // } else if (operator == "*") {
  //   sum = num1 * num2;
  // } else if (operator == "/") {
  //   sum = num1 / num2;
  // } else if (operator == "%") {
  //   sum = num1 % num2;
  // } else {
  //   calResult.innerHTML = "계산할 수 없어요..!";
  // }
  
  // // 5. 계산된 결과를 화면에 출력한다.
  // function calWrite() {
  //   calResult.textContent = `${num1} ${operator} ${num2} = ${sum}`;
  // };
  // calWrite();

  let calResult = document.querySelector(".calculator p");
  let calBtn = document.querySelector(".cal-btn");
  
  calBtn.addEventListener('click', function(e) {
    e.preventDefault();

    let num1 = +document.querySelector(".first-number").value;
    let num2 = +document.querySelector(".second-number").value;
    let operator = document.querySelector(".cal-values select").value;
    let sum;

    if (operator == "+") {
      sum = num1 + num2;
    } else if (operator == "-") {
      sum = num1 - num2;
    } else if (operator == "*") {
      sum = num1 * num2;
    } else if (operator == "/") {
      sum = num1 / num2;
    } else if (operator == "%") {
      sum = num1 % num2;
    } else {
      calResult.innerHTML = "계산할 수 없어요..!";
    }

    if (sum == undefined ) {
      calResult.innerHTML = "값을 전부 입력해 주세요!";
    } else {
      calResult.innerHTML = `${num1} ${operator} ${num2} = ${sum}`;
    }

  });
  
  
  // switch문 연습

  let gradeResult = document.querySelector(".grade-result span");
  let gradeComment = document.querySelector(".grade-result p");
  let gradeBtn = document.querySelector(".grade-btn");

  gradeBtn.addEventListener("click", function(e){
    e.preventDefault();

    let score = +document.querySelector(".score").value;
    // console.log(score);

    // if (score <= 100 && score >= 90) {
    //   gradesResult.innerHTML = "A : 90~100";
    // } else if (score <= 89 && score >= 80) {
    //   gradesResult.innerHTML = "B : 80~89";
    // } else if (score <= 79 && score >= 70) {
    //   gradesResult.innerHTML = "C : 70~79";
    // } else if (score <= 69 && score >= 60) {
    //   gradesResult.innerHTML = "D : 60~69";
    // } else if (score <= 59 && score >= 0) {
    //   gradesResult.innerHTML = "F : 0~59";
    // } else {
    //   gradesResult.innerHTML = "잘못된 점수입력입니다. 다시 입력하세요.";
    // }

    // switch (true) {
    //   case (score <= 100 && score >= 90):
    //     gradeResult.innerHTML = "A, ";
    //     gradeComment.innerHTML = "잘했어요!";
    //     break;
    //   case (score <= 89 && score >= 80):
    //     gradeResult.innerHTML = "B, ";
    //     gradeComment.innerHTML = "좋은 점수군요.";
    //     break;
    //   case (score <= 79 && score >= 70):
    //     gradeResult.innerHTML = "C, ";
    //     gradeComment.innerHTML = "괜찮은 점수군요.";
    //     break;
    //   case (score <= 69 && score >= 60):
    //     gradeResult.innerHTML = "D, ";
    //     gradeComment.innerHTML = "좀 더 노력하세요.";
    //     break;
    //   case (score <= 59 && score >= 0):
    //     gradeResult.innerHTML = "F, ";
    //     gradeComment.innerHTML = "다음 학기 수강하세요.";
    //     break;
    //   default:
    //     alert("0부터 100까지만 입력이 가능합니다.");
    //     document.querySelector(".grade-values").reset();
    //   break;
    // }

    switch (parseInt(score / 10)) {
      case 9: case 10:
        gradeResult.innerHTML = "A,";
        gradeComment.innerHTML = "잘했어요!";
        break;
      case 8:
        gradeResult.innerHTML = "B,";
        gradeComment.innerHTML = "좋은 점수군요.";
        break;
      case 7:
        gradeResult.innerHTML = "C,";
        gradeComment.innerHTML = "괜찮은 점수군요.";
        break;
      case 6:
        gradeResult.innerHTML = "D,";
        gradeComment.innerHTML = "좀 더 노력하세요.";
        break;
      case 5: case 4: case 3: case 2: case 1: case 0:
        gradeResult.innerHTML = "F,";
        gradeComment.innerHTML = "다음 학기 수강하세요.";
        break;
      default:
        alert("0부터 100까지만 입력이 가능합니다.");
        document.querySelector(".grade-values").reset();
        break;
    }

  });


  // 가위바위보 게임 만들기

  let rpsResult = document.querySelector(".RPS-result p");
  let rpsBtn = document.querySelector(".RPS-btn");

  rpsBtn.addEventListener("click", function(e){
    e.preventDefault();
    
    let firstUser = document.querySelector('input[name="user1"]:checked');
    let secondUser = document.querySelector('input[name="user2"]:checked');
    
    let firstUserValue = firstUser ? +firstUser.value : null;
    let secondUserValue = secondUser ? +secondUser.value : null;

    // console.log("firstUserValue: ", firstUserValue);
    // console.log("secondUserValue: ", secondUserValue);

    if (!firstUser || !secondUser) {
      if(!firstUser) {
        alert("첫 번째 사용자를 선택하세요!");
      }
      if(!secondUser) {
        alert("두 번째 사용자를 선택하세요!");
      }
    }

    switch (firstUserValue - secondUserValue) {
      case -2: case 1:
        rpsResult.innerHTML = "user #1 Win!";
        break;
      case -1: case 2:
        rpsResult.innerHTML = "user #2 Win!";
        break;
      default:
        rpsResult.innerHTML = "Drow... try Again!";
        break;
    }

  })

});