document.addEventListener('DOMContentLoaded', function(){

  "use strict";

  
  // while
  let i = 0;
  const whileUlEl = document.querySelector(".while ul");

  while ( i < 10 ) {
    whileUlEl.innerHTML += `<li>카운터 : ${i}</li>`;
    i++;
  }

  // do while
  const doWhileUlEl = document.querySelector(".do-while ul");
  
  do {
    // do while문은 먼저 실행하고, 조건식을 확인하기 때문에 현재는 10이 나온다.
    // 이유는? -> i는 위에서 10까지 증가했기 때문에 do while문에서의 i는 10임.
    // 즉, 먼저 실행하고 조건문을 확인했기 때문에 '카운터 : 10'만 출력됨.
    doWhileUlEl.innerHTML += `<li>카운터 : ${i}</li>`;
    i++;
  } while ( i < 10 );

});