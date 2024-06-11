document.addEventListener('DOMContentLoaded', function(){

  "use strict";

  let num = document.querySelector('.number ul');
  let str = document.querySelector('.string ul');
  let compare = document.querySelector('.compare ul');


  // 수학 연산자
  // +(덧셈), -(뺄셈), *(곱셈), /(나눗셈), %(나머지) 
  let result = 0;
  let a = 5;
  let b = 10;

  result = a + b;
  num.innerHTML += `<li>a + b = ${result}</li>`;
  
  result = a + b / 2;
  num.innerHTML += `<li>a + b / 2 = ${result}</li>`;
  
  result = b % 3;
  num.innerHTML += `<li>b % 3 = ${result}</li>`;
  

  // 문자열 연산
  let str1 = 'my ';
  let str2 = 'string ';
  let checked = true;
  
  result = str1 + str2;
  str.innerHTML += `<li>문자열 연산 → ${result}</li>`;
  
  // 문자형과 다른 자료형을 + 연산하면 다른 자료형은 문자형으로 변환되어 연산된다.
  result = str1 + str2 + checked;
  str.innerHTML += `<li>문자열 + boolean 연산 → ${result}</li>`;
  
  // + 와 - 는 숫자를 쿼트로 묶으면 문자로 인식한다.
  result = '1' + 2;
  str.innerHTML += `<li>문자열 + 숫자 → ${result}</li>`;
  
  // * 와 / 는 쿼트로 묶어도 숫자로 인식한다.
  result = '1' / 2;
  str.innerHTML += `<li>문자열 / 숫자 → ${result}</li>`;
  
  result = `1${a}`;
  str.innerHTML += `<li>보간법으로 문자열 합치기 → ${result}</li>`;
  
  // 뺄셈, 곱셈, 나눗셈은 뒤에 있는 숫자를 쿼트로 묶어도 숫자로 인식한다.
  result = a - '2';
  str.innerHTML += `<li>a - '2' → ${result}</li>`;
  
  // 문자형에 +를 붙이면 숫자형으로 바꿔준다.
  // 즉, 텍스트를 숫자로 바꾼거라 숫자가 아닌 것과 더한 값이 되기 때문에 NaN이 나온다.
  result = +str1 + a;
  str.innerHTML += `<li>+str1 + a → ${result}</li>`;
  
  // 숫자인 문자형에 +를 붙이면 숫자로 인식한다.
  result = +'2' + a;
  str.innerHTML += `<li>+'2' + a → ${result}</li>`;
  
  
  // 비교 연산자
  result = a > b;
  compare.innerHTML += `<li>a(5) > b(10) → ${result}</li>`;

  result = a < b;
  compare.innerHTML += `<li>a(5) < b(10) → ${result}</li>`;
  
  result = a <= b;
  compare.innerHTML += `<li>a(5) <= b(10) → ${result}</li>`;
  
  result = a >= b;
  compare.innerHTML += `<li>a(5) >= b(10) → ${result}</li>`;
  
  result = a == b;
  compare.innerHTML += `<li>a(5) == b(10) → ${result}</li>`;
  
  result = a != b; // ! : 부정연산자. 불린타입과 쓴다. ex) !true 는 false
  compare.innerHTML += `<li>a(5) != b(10) → ${result}</li>`;
  
  result = '2' < 1; // 비교 연산자도 문자형이 숫자형으로 바뀐다.
  compare.innerHTML += `<li>'2' < 1 → ${result}</li>`;
  
  result = '01' == 1; // 위와 같은 이유. 문자형이 숫자형으로 바뀌니까...
  compare.innerHTML += `<li>'01' == 1 → ${result}</li>`;
  
  // truthy한 값들은 1로 변형되고, falsy한 값들은 0으로 변형된다.
  // true == 1, false == 0
  result = true == 1;
  compare.innerHTML += `<li>true == 1 → ${result}</li>`;
  
  result = false == 0;
  compare.innerHTML += `<li>false == 0 → ${result}</li>`;
  
  result = '0' == 0; // 문자형이 숫자형으로 바뀌니 true. 값만 동일하면 true 출력.
  compare.innerHTML += `<li>'0' == 0 → ${result}</li>`;
  
  result = '0' === 0; // 문자형이 숫자형으로 바뀌지 않는다. 값과 타입이 모두 동일해야 true 나옴.
  compare.innerHTML += `<li>'0' === 0 → ${result}</li>`;
  
  result = '0' !== 0; // 부정연산자로 비교하면 값은 같으나 타입이 다르기 때문에 true 나옴.
  compare.innerHTML += `<li>'0' !== 0 → ${result}</li>`;
  
  // null, undefined 비교
  // == , != : 동등 비교 연산
  // ===, !== : 일치 비교 연산
  // < , <= , > , >= : 기타 비교 연산
  result = null > 0; // false
  result = null == 0; // false
  // 동등과 일치 비교에서는 null이 숫자로 바뀌지않는다. 그래서 false. (NaN)
  result = null >= 0; // true. 기타 비교할 때는 null이 숫자로 바뀐다.
  compare.innerHTML += `<li>null >= 0 → ${result}</li>`;



});