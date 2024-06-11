'use strict';

// ** async **
// async는 반드시 function 키워드의 앞에 붙여야 한다.
// async를 붙이면 무조건 Promise 객체를 반환한다.

// ** await **
// await는 async가 붙은 함수 안에서만 작동한다.
// await는 Promise 객체를 리턴하는 코드 앞에 붙인다.

// 함수 안에 async가 붙어 있으면 비동기적으로 실행되는 코드가 있다는 것이다.
// await는 뒤에 있는 코드의 Promise가 fulfilled 혹은 rejected가 될 때까지 기다린다.

async function fetchAndPrint() {
  const btnText = this.textContent;

  const url = `https://jsonplaceholder.typicode.com/${btnText}`;

  const response = await fetch(url); // await이 then의 역할을 함.

  const result = await response.json();

  const authors = document.querySelector('#authors');
  result.forEach((e) => {
    console.log(e);
    const keys = Object.keys(e);
    keys.forEach((userKey) => {
      if (typeof e[userKey] == 'string') {
        authors.innerHTML += `<li>${userKey} : ${e[userKey]}</li>`;
      }
    });
  });
}

const btns = document.querySelectorAll('button');

btns.forEach((e) => {
  e.addEventListener('click', fetchAndPrint);
});
