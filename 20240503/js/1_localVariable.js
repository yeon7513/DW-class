document.addEventListener('DOMContentLoaded', function(){

  "use strict";

  let num = 0; // 전역 변수. 모든 블록 스코프에서 사용이 가능.
  
  // 함수 선언식
  function showAlert() {
    let message; // 지역 변수. 선언된 블록 스코프 안에서만 사용이 가능.
    alert(num);
  };

  // 함수 표현식
  const func = function() {
    
  };

});