'use strict';

// 함수 선언식
// showMessage();
function showMessage(e) {
  //   alert('안녕하세요!');
  console.log(e);
}

const show = function (e) {
  //   alert('함수 표현식');
  console.log(this);
};
// show();

const basicBtn = document.getElementById('basicFn');
const arrowBtn = document.getElementById('arrowFn');

basicBtn.addEventListener('click', function () {
  // const this = e.currentTarget;
  console.log(this);
});
arrowBtn.addEventListener('click', (e) => {
  // console.log(this);
  console.log(e.currentTarget);
});

function printUserName(phrase) {
  const welcomePhrase = document.getElementById('welcomePhrase');
  welcomePhrase.innerHTML = phrase;
}

let userName;

const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const paymentBtn = document.getElementById('paymentBtn');
const deleteBtn = document.getElementById('deleteBtn');

loginBtn.addEventListener('click', function () {
  userName = prompt('아이디를 입력해주세요.');
  printUserName(makeSentence(userName, 'login'));
});

logoutBtn.addEventListener('click', function () {
  if (userName == null) {
    alert('로그인을 해주세요!');
    return false;
  } else {
    printUserName(makeSentence(userName, 'logout'));
    userName = '';
  }
});

paymentBtn.addEventListener('click', function () {
  if (!userName) {
    alert('로그인을 해주세요!');
    return false;
  } else {
    printUserName(makeSentence(userName, 'payment'));
  }
});

deleteBtn.addEventListener('click', function () {
  if (!userName) {
    alert('로그인을 해주세요!');
    return false;
  } else {
    printUserName(makeSentence(userName, 'delete'));
    userName = '';
  }
});

function makeSentence(userName, userCase) {
  switch (userCase) {
    case 'login':
      return `${userName}님 환영합니다.`;
    case 'logout':
      return `${userName}님이 로그아웃 하셨습니다.`;
    case 'payment':
      return `${userName}님, 결제가 완료되었습니다.`;
    case 'delete':
      return `${userName}님의 회원정보가 삭제되었습니다.`;
  }
}
