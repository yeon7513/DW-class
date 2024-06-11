"use strict";

const wrapper = document.querySelector("#wrapper");
const forEachEl = wrapper.children[0];
const mapEl = wrapper.children[1];
const mapEx = wrapper.children[2];
const filterEl = wrapper.children[3];
const filterEx = wrapper.children[4];
const reduceEl = wrapper.children[5];
const reduceRightEl = wrapper.children[6];

// ** Array Part 3 **
// - 원본 배열을 참조하면서 배열을 반복하는 함수들


// 1. forEach() 함수 ⭐⭐⭐
// - 해당 배열의 모든 요소에 대하여 반복적으로 명시된 함수를 실행한다.
// - 즉, 배열에 들어있는 요소의 갯수만큼 반복한다.

// * forEach 문법
// forEach(function(value, index, array){
//    실행할 로직
// });

const arr = [1, true, "Javascript"];

forEachEl.innerHTML += `<h2>arr : [${arr}]</h2>`;
forEachEl.innerHTML += "<h3>1. arr의 파라미터 사용해보기</h3>";

function printArr(value, index, array) {
  // console.log(`value : ${value}, index : ${index}, array : ${array}`);
  forEachEl.innerHTML += `<p>--> value: ${value}, index : ${index}, array : [${array}]</p>`;
};

// forEach안에 함수를 사용할 경우, 함수호출형식으로 쓰면 안되고 이름만 써준다.
arr.forEach(printArr);

// 왜? 함수의 정의와 호출의 방식이 다르기 때문.
// console.log(typeof printArr);
// 함수로 정의되어있다. --> function

// console.log(typeof printArr());
// 괄호를 붙임으로서 함수를 호출하고 그 반환값의 타입을 확인함.
// 자바스크립트에서 함수의 기본 반환값은 undefined 이다.


// 2. map() 함수 ⭐⭐⭐⭐⭐
// - 해당 배열의 모든 요소에 대하여 반복적으로 명시된 함수를 실행한 후,
//   그 실행 결과를 새로운 배열에 담아 반환한다.
// - map도 파라미터로 element, index, array가 들어간다.

const arr2 = [3, 4, 5, 6];
const forArr = [];
const forEachArr = [];

mapEl.innerHTML += `<h2>arr2 : [${arr2}]</h2>`;

mapEl.innerHTML += "<h3>1. 각 원소에 2씩 곱한 값을 반환</h3>"
// for
for (let i = 0; i < arr2.length; i++) {
  forArr.push(arr2[i] * 2);
}
mapEl.innerHTML += `<p>--> for 사용 : [${forArr}]</p>`;

// forEach
arr2.forEach(function(val) {
  forEachArr.push(val * 2);
});
mapEl.innerHTML += `<p>--> forEach 사용 : [${forEachArr}]</p>`;

// map
let mapArr = arr2.map(function (val) {
  return val * 2;
});
mapEl.innerHTML += `<p>--> map 사용 : [${mapArr}]</p>`;

// 간단한 코드라면 이렇게 작성해도 된다.
// let mapArr = arr2.map((val) => val * 2);


// 2-2. map() 함수 연습

const users = [
  {firstName: "베컴", lastName: "데이비드"},
  {firstName: "더브라위너", lastName: "케빈"},
  {firstName: "홀란드", lastName: "엘링"}
];

mapEx.innerHTML += "<h2>users 배열</h2>";
for (let i = 0; i < users.length; i++){
  mapEx.innerHTML += `<p>{firstName: "${users[i].firstName}", lastName: "${users[i].lastName}"}</p>`;
}


mapEx.innerHTML += `<h3>1. ["데이비드 베컴", "케빈 더브라위너", "엘링 홀란드"] 만들기</h3>`;
// ["데이비드 베컴", "케빈 더브라위너", "엘링 홀란드"] 만들기
const nameArr = users.map(function (v) {
  return `"${v.lastName} ${v.firstName}"`;
});

mapEx.innerHTML += `<p>--> result : [${nameArr.join(", ")}]</p>`;


// 2.

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

mapEx.innerHTML += `<h2 style="margin-top: 20px;">numberArr: [${numberArr}]</h2>`;

function multiplyThree(num) {
  return num * 3;
};
const newNumberArr = numberArr.map(multiplyThree);

mapEx.innerHTML += "<h3>2. 3을 곱해주는 함수를 사용해 map으로 돌려보자~!</h3>";
mapEx.innerHTML += `<p>--> result : [${newNumberArr}]</p>`;


// 3.
// [6, 15, 24] 로 만들어서 새로운 배열로 반환하기
const doubleArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 함수를 활용한 방법
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const plusNum = doubleArr.map(sum);
console.log("함수 활용 : ", plusNum);


// map안에 forEach 사용
const plusNum2 = doubleArr.map((v) => {
  let sum = 0;
  v.forEach((num) => {
    sum += num;
  });
  return sum;
});

console.log("map안에 forEach : ", plusNum2);


const numArr = [5, 10, 15, 20];
// [0, 5, 10, 15] 배열로 만들기

const numArr2 = numArr.map(function (val) {
  return val - 5;
});

const numArr3 = numArr.map(val => val - 5);

const numArr4 = [];
numArr.forEach((val) => {
  numArr4.push(val - 5);
});

console.log("numArr : ", numArr);
console.log("numArr2 : ", numArr2);
console.log("numArr3 : ", numArr3);
console.log("numArr4 : ", numArr4);

// forEach와 map의 차이
// 1. forEach
// - 각 요소에 대해 함수를 실행하고 반환하지 않는다. (undefined만 반환)
// - 그래서 return이 필요하지 않음.
// - 즉, forEach로 값을 받으려면 빈 배열에 push()로 일일히 넣어줘야함.

// 2. map
// - 각 요소에 대해 함수를 실행하고 그 반환값을 새로운 배열에 모은다.
// - 그래서 각 함수에서 값을 반환해야한다. (return 필수!!)


const strArr1 = ["apple", "banana", "watermelon"];
// [5, 6, 10] 으로 변경 

const resultStr1 = strArr1.map(function(v) {
  return v.length;
});

console.log(resultStr1);


const strArr2 = ["hello", "world", "javascript"];
// ["HELLO", "WORLD", "JAVASCRIPT"]

const resultStr2 = strArr2.map(function(v) {
  return v.toUpperCase();
});

console.log(resultStr2);


const strArr3 = [10, 20, 30, 40, 50];
// ["index 0: 10", "index 1: 20", "index 2: 30", "index 3: 40", "index 5: 50"]

const resultStr3 = strArr3.map((val, idx) => {
  return `index ${idx}: ${val}`;
});

console.log(resultStr3);

const users2 = [
  { id: 1, name: "김덕배" },
  { id: 2, name: "최덕배" },
  { id: 3, name: "이덕배" }
];
// ["김덕배", "최덕배", "이덕배"]

const resultStr4 = users2.map((val) => {
  return val.name;
});
console.log(resultStr4);

const users3 = [
  { id: 1, name: "김덕배", contact: { email: "kim@gmail.com" } },
  { id: 2, name: "최덕배", contact: { email: "choi@gmail.com" } },
  { id: 3, name: "이덕배", contact: { email: "lee@gmail.com" } }
];
// ["kim@gmail.com", "choi@gmail.com", "lee@gmail.com"]

const resultStr5 = users3.map((val) => {
  return val.contact.email;
});
console.log(resultStr5);


// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// 결과 ==> [[2, 4, 6], [8, 10, 12], [14, 16, 18]]

const resultArr1 = doubleArr.map(val => {
  return val.map(num => num * 2);
});

console.log(resultArr1);



// 3. filter() 함수 ⭐⭐⭐⭐
// - 배열의 모든 요소에 대하여 반복적으로 명시된 함수를 실행한 후, 
//   그 결과값이 true인 요소들만을 새로운 배열로 반환한다.
// - filter()도 파라미터로 element, index, array가 들어간다.

const numberArr2 = [1, 2, 3, 4, 5];
filterEl.innerHTML += `<h2>numberArr2 : [${numberArr2}]</h2>`;
filterEl.innerHTML += "<h3>1. NumberArr2에서 4와 5만 반환</h3>";
// [4, 5]
const newNumberArr2 = numberArr2.filter(v => {
  return v > 3;
});

filterEl.innerHTML += `<p>--> result : [${newNumberArr2}]</p>`;

// 3-1. filter() 함수 연습

const guys = [
  {name: "덕배", money: 500000},
  {name: "베컴", money: 700000},
  {name: "홀란드", money: 600000},
  {name: "포든", money: 400000}
];
filterEx.innerHTML += "<h2>guys 배열</h2>";
for (let i = 0; i < guys.length; i++) {
  filterEx.innerHTML += `<p>{name: "${guys[i].name}", money: ${guys[i].money}}</p>`;
}

filterEx.innerHTML += "<h3>1. money가 50만 이상인 사람의 이름만 반환</h3>";
// [{name: "베컴", money: 700000}, {name: "홀란드", money: 600000}]

const rich = guys.filter((v)=> {
  return v.money > 500000;
});

filterEx.innerHTML += `
  <p>
    --> result : [{name: "${rich[0].name}", money: ${rich[0].money}},
    {name: "${rich[1].name}", money: ${rich[1].money}}]
  </p>
`;

console.log(rich);

// 조건이 여러 개 일 경우
filterEx.innerHTML += `<h3>2. money > 500000, name == "홀란드" 반환 (조건이 2개)</h3>`;

const condition2 = guys.filter((v)=> {
  return v.money > 500000 && v.name == "홀란드";
});

filterEx.innerHTML += `
  <p>
    --> result : [{name: "${condition2[0].name}", money: ${condition2[0].money}}]
  </p>
`;

console.log(condition2);


// 4. reduce() 함수
// - 해당 배열의 모든 요소를 하나의 값으로 줄이기 위해,
//   두 개의 인수(파라미터)를 전달받는 함수를 실행한다.
//   이 때, 명시된 함수에 배열의 첫번째 요소와 두번째 요소를 인수로 전달하고 실행한다.
//   그 결과 반환된 결과값에 세번째 요소를 다시 인수로 전달하고 실행한다.

// reduce()에 들어가는 파라미터
// 1. accumulater : 누산기 혹은 누적값
// 2. currentValue : 처리할 현재 요소
// 3. currentIndex : 처리할 현재 요소의 인덱스
// 4. array : 대상 배열 전체
// Array.reduce(function(acc, cur, idx, arr) {
//   return ....;
// }, initialValue);

// * initialValue
// - initialValue를 생략하면 초기값으로 배열의 첫번째 요소가 들어간다.
// - 빈 배열에서 사용하려면 initialValue를 꼭 넣어주어야 한다.

const numArr5 = [1, 2, 3, 4, 5];

reduceEl.innerHTML += `<h2>numArr5 : [${numArr5}]</h2>`;

reduceEl.innerHTML += `<h3>1. reduce()를 사용하여 모든 요소의 합을 구하기</h3>`;

const result2 = numArr5.reduce((x, y) => {
  return x + y;
  // x에 첫번째 요소 : 1
  // y에 두번째 요소 : 2 --> x + y니까 1 + 2를 실행
  // 그 이후에 x에 1+2의 값인 3을 넣고 y에 3을 넣음.
  // 계속 반복......
  // 즉, 1 + 2 + 3 + 4 + 5
});

reduceEl.innerHTML += `<p>--> (x + y) 결과 : ${result2}</p>`;

reduceEl.innerHTML += `<h3>2. reduce()를 사용하여 모든 요소의 차를 구하기</h3>`;

const result3 = numArr5.reduce((x, y) => {
  return x - y;
  // 1 - 2 - 3 - 4 - 5
});

reduceEl.innerHTML += `<p>--> (x - y) 결과 : ${result3}</p>`;


reduceEl.innerHTML += `<h3>3. reduce()에 초기값 5를 넣어 모든 요소들의 합을 구하기</h3>`;

const result4 = numArr5.reduce((x, y) => {
  return x + y;
  // 5 + 1 + 2 + 3 + 4 + 5
}, 5);

reduceEl.innerHTML += `<p>--> 초기값 5를 넣어준 결과 : ${result4}</p>`;


// 5. reduceRight() 함수
// - reduce() 함수와 같은 방식으로 실행되며, 
//   배열의 마지막 요소부터 줄이기 시작한다.

reduceRightEl.innerHTML += `<h2>NumArr6 : [${numArr5}]</h2>`;

const result5 = numArr5.reduceRight((x, y) => {
  return x - y;
  // 5 - 4 - 3 - 2 - 1
});

reduceRightEl.innerHTML += "<h3>1. 배열의 마지막부터 시작해 모든 요소의 차를 구하기</h3>";
reduceRightEl.innerHTML += `<p>--> result : ${result5}</p>`;