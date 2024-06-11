'use strict';

// 1. admin과 name이라는 변수를 선언하세요.
let name;
let admin;

// 2. name에 값으로 "John"을 할당해 보세요.
name = 'John';

// 3. name의 값을 admin에 똑같이 넣어보세요.
admin = name;

// 4. admin의 값을 alert창으로 띄어보세요. ("John"이 출력되어야함)
// alert(admin);

// let num3 = +prompt('숫자를 입력하세요.');
// let num4 = +prompt('숫자를 입력하세요.');

// let result = 0;

// result = num3 > num4 ? num3 - num4 : num4 - num3;

// alert(`두 수의 차는 ${result}입니다.`);

let salaries = {
  John: 200,
  Mary: 250,
  Sam: 400,
};

const result = Object.values(salaries).reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(result);
