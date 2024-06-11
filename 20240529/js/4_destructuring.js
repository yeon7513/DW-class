'use strict';

const newJeans = ['하니', '해린', '민지', '다니엘', '혜인'];

// ~ ES6
const one = newJeans[0];
const two = newJeans[1];
const three = newJeans[2];
const four = newJeans[3];
const five = newJeans[4];

const unit = [];
unit.push(two);
unit.push(three);
unit.push(four);

// ES6 ~
const [unitOne, unitTwo, unitThree, unitFour, unitFive, unitSix = 'default'] =
  newJeans;
console.log(unitOne, unitTwo, unitThree, unitFour, unitFive, unitSix);

const fileName = '시바견.jpg';
const [name, extenstion] = fileName.split('.');

console.log(name);
console.log(extenstion);

const obj = {
  name: '홍길동',
  age: 20,
  addr: '대전시 중구 선화동',
  weight: '80kg',
  height: '200cm',
};

// 객체를 구조 분해 할 때는 기본적으로 키값과 사용할 변수명이 일치해야한다.
// 단, name: myName 이렇게 넣으면 myName이 내가 사용할 변수명이 된다.
const { name: myName, age, addr, weight, height } = obj;

const text = document.createElement('h3');

text.innerHTML = `
  안녕하세요. 저의 이름은 ${myName}이고, <br />
  나이는 ${age}살 입니다. <br />
  주소는 ${addr}이고, <br />
  키와 몸무게는 ${weight}, ${height}입니다. <br />
  잘 부탁드립니다.
`;

document.querySelector('body').append(text);

// ... 문법 (스프레드 문법)
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [num1, num2, ...restNum] = numArr;

console.log(num1, num2, restNum);

let options = {
  title: 'menu',
  width: 100,
  height: 200,
};

const { title, ...rest } = options;

console.log(title, rest);

options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ['cake', 'donut'],
  extra: true,
};

let {
  size: { width, height: height2 },
  items: [item1, item2],
  extra,
} = options; // 중첩 구조 분해
console.log(width, height2);
console.log(item1, item2);
console.log(extra);

const user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
};

const {
  id,
  name: name2,
  username,
  email,
  address: { street, suite, city, zipcode },
  // geo: { lat, lng },
} = user;

console.log(id, name2, username, email);
console.log(street, suite, city, zipcode);
// console.log(lat, lng);
