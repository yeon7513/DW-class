"use strict";

const students = [
  { name: "Rooney", score: 5.8 },
  { name: "Ronaldo", score: 8 },
  { name: "Kevin", score: 8.5 },
  { name: "Lampard", score: 7.2 },
  { name: "Gerald", score: 6.8 },
  { name: "Torres", score: 7.7 }
];


// 1. 학생 이름을 대문자로 변환
let result = students.map(v => {
  return v.name.toUpperCase();
});

console.log(result);

// 2. 점수가 7점 이상인 학생 필터링
result = students.filter(v => {
  return v.score > 7;
});

console.log("점수가 7점 이상인 학생", result);

// 3. 모든 학생의 점수 합계 구하기
result = students.reduce((x, y) => {
  return x + y.score;
}, 0);

console.log("모든 학생의 점수 합계: ", result);

// 4. 모든 학생의 평균 점수 구하기 (평균은 반올림)
let sum = students.reduce((x, y) => {
  return x + y.score
}, 0);

result = Math.round(sum / students.length);
console.log("모든 학생의 평균 점수: ", result);

// ---------------------------------------------

const products = [
  { name: 'Laptop', price: 899.99 },
  { name: 'Phone', price: 499.99 },
  { name: 'Tablet', price: 299.99 },
  { name: 'Monitor', price: 199.99 },
  { name: 'Keyboard', price: 49.99 },
  { name: 'Mouse', price: 29.99 },
];

// 1. 모든 제품의 가격에 10%의 세금을 추가한 배열을 만드세요.
const texItem = products.map(v => {
  let tex = v.price + (v.price * 0.1);
  return tex.toFixed(2);
});

result = texItem;

console.log("세금 10% 추가", result);

// 2. 세금이 추가된 가격이 100달러 이상인 제품들만 필터링하세요.
result = texItem.filter(v => {
  return v > 100;
});

console.log("세금이 추가된 가격이 100달러 이상", result);

// 3. 필터링된 제품들의 총 가격을 계산하세요.
let sumItems = texItem.reduce((x, y) => {
  let sum = +x + +y;
  return sum.toFixed(2);
});

result = sumItems;

console.log("총 가격: ", result);

// 4. 필터링된 제품들의 평균 가격을 계산하세요.

result = Math.round(sumItems / texItem.length);

console.log("평균 가격: ", result);