document.addEventListener('DOMContentLoaded', function(){

  "use strict";

  // random 숫자를 반환해주는 Math 객체의 random() 함수 선언
  // random() 함수는 0보다 크고 1보다 작은 숫자를 반환 (소숫점이 포함되어있다.)
  document.write(`<h1>${Math.random()}</h1>`);

  // 랜덤숫자를 정수로 뽑으려면 parseInt 사용!!

  // 0부터 9까지의 정수를 랜덤으로 뽑으려면?
  document.write(`<h1>${parseInt(Math.random() * 10)}</h1>`);
  
  // 1부터 10까지의 정수를 랜덤으로 뽑으려면?
  document.write(`<h1>${parseInt(Math.random() * 10) + 1}</h1>`);

  // 1부터 100까지의 정수를 랜덤으로 뽑으려면?
  document.write(`<h1>${parseInt(Math.random() * 100) + 1}</h1>`);
  
  // 150에서 250까지의 정수를 랜덤으로 뽑으려면?
  document.write(`<h1>${parseInt(Math.random() * (250 - 150 + 1)) + 150}</h1>`);

  // 지정한 범위 내에서만 랜덤숫자를 뽑으려면?
  // ==> Math.random() * (최대값 - 최소값) + 최소값
  // 최대값을 포함하려면 ==> (최대값 - 최소값 + 1) + 최소값


});