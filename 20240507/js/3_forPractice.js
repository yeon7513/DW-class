document.addEventListener('DOMContentLoaded', function(){

  "use strict";

  // 1부터 20까지의 숫자 중 짝수만 출력하세요. (조건문 없이 반복문만 사용)
  const evenNumber = document.querySelector(".numbers");
  for (let i = 2; i <= 20; i += 2) {
    evenNumber.innerHTML += `<span>${i}</span>`;
  }

  // 별찍기 진짜싫어...............
  
  const star01 = document.querySelector(".star01");
  const star02 = document.querySelector(".star02");
  const star03 = document.querySelector(".star03");
  const star04 = document.querySelector(".star04");
  const star05 = document.querySelector(".star05");
  const star06 = document.querySelector(".star06");
  const star07 = document.querySelector(".star07");
  const star08 = document.querySelector(".star08");
  
  // star #1
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      star01.innerHTML += "<span>*</span>";
    }
    star01.innerHTML += "<br />";
  }

  // star #2
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      star02.innerHTML += "<span>*</span>";
    }
    star02.innerHTML += "<br />";
  }

  // star #3
  for (let i = 1; i <= 5; i++) {
    for (let j = 5; j > i; j--) {
      star03.innerHTML += `<span class="nbsp">&nbsp;&nbsp;</span>`;
    }
    for (let k = 1; k <= i; k++) {
      star03.innerHTML += "<span>*</span>";
    }
    star03.innerHTML += "<br />";
  }

  // star #4
  for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
      star04.innerHTML += "<span>*</span>";
    }
    star04.innerHTML += "<br />";
  }

  // star #5
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j < i; j++) {
      star05.innerHTML += `<span class="nbsp">&nbsp;&nbsp;</span>`;
    }
    for (let k = 5; k >= i; k--) {
      star05.innerHTML += "<span>*</span>";
    }
    star05.innerHTML += `<br>`;
  }

  // star #6
  for (let i = 1; i <= 5; i++) {
    for (let j = 5; j > i; j--) {
      star06.innerHTML += `<span class="nbsp">&nbsp;&nbsp;</span>`;
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      star06.innerHTML += "<span>*</span>";
    }
    star06.innerHTML += "<br />";
  }

  // star #7
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j < i; j++) {
      star07.innerHTML += `<span class="nbsp">&nbsp;&nbsp;</span>`;
    }
    for (let k = 9; k >= i * 2 - 1; k--) {
      star07.innerHTML += "<span>*</span>";
    }
    star07.innerHTML += "<br />";
  }

  // star #8
  for (let i = 1; i <= 3; i++) {
    for (let j = 3; j > i; j--) {
      star08.innerHTML += `<span class="nbsp">&nbsp;&nbsp;</span>`;
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      star08.innerHTML += "<span>*</span>";
    }
    star08.innerHTML += "<br />";
  }
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++) {
      star08.innerHTML += `<span class="nbsp">&nbsp;&nbsp;</span>`;
    }
    for (let k = 3; k >= i * 2 - 1; k--) {
      star08.innerHTML += "<span>*</span>";
    }
    star08.innerHTML += "<br />";
  }

  // 1부터 사용자가 입력한 숫자만큼의 합을 출력하세요.
  const sumBtn = document.querySelector("button");
  
  sumBtn.addEventListener("click", function(e){
    
    e.preventDefault();

    let input = +document.querySelector(`input[type="text"]`).value;
    const output = document.querySelector(".input-sum > p");

    let sum = 0;
    if (input) {
      for (let i = 1; i <= input; i++){
        sum = sum + i;
      }
      output.innerHTML = `<span>1</span>부터 <span>${input}</span>까지의 합은 <span class="sum-result">${sum}</span>입니다.`;
    } else {
      output.innerHTML = '<span>값을 입력해주세요.</span>';
    }
    document.querySelector(`input[type="text"]`).value = "";

  });

  // 구구단 표 만들기~!
  let multipleTable = document.querySelector(".multiplication-tables > table");
  
  for (let i = 1; i <= 9; i++) {
    let tr = document.createElement("tr");
    for (let j = 1; j <= 9; j++) {;
      let td = document.createElement("td");
      td.textContent += i * j;
      tr.appendChild(td);
    }
    multipleTable.appendChild(tr);
  }

  // 각각의 구구단 표 만들기~!~~
  let eachTables = document.querySelector(".table-items");

  for (let i = 2; i <= 9; i++) {
    // table 9번 반복
    let tableItem = document.createElement("table");
    // tr > th 1번만 출력
    let tr1 = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent += `${i}단`;
    for (let j = 2; j <= 9; j++) {
      // tr > td 9번 반복
      let tr2 = document.createElement("tr");
      let td = document.createElement("td");
      td.innerHTML += `${i} X ${j} = <span>${i * j}</span>`
      tr2.appendChild(td);
      tableItem.appendChild(tr2);
    }
    tr1.prepend(th)
    tableItem.prepend(tr1);
    eachTables.appendChild(tableItem);
  }

  

});