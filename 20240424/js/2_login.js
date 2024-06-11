"use strict";

/* log in & sign up 스왑 */

let logIn = document.querySelector('.spot-menu #goto-login');
let signUp = document.querySelector('.spot-menu #goto-signup');

let logInBox = document.querySelector('#content .login-box');
let signBox = document.querySelector('#content .sign-box');

// console.log(logIn);
// console.log(signUp);
// console.log(logInBox);
// console.log(signBox);

/* 로그인 클릭 시 사인업 박스 숨기기 */
logIn.addEventListener('click', function(){
  logIn.style.color = '#948979';
  logIn.style.textDecoration = 'underline';
  signUp.style.color = '';
  signUp.style.textDecoration = '';
  signBox.classList.add('hide');
  logInBox.classList.remove('hide');
  // console.log('log in click');
});

/* 사인업 클릭 시 로그인 박스 숨기기 */
signUp.addEventListener('click', function(){
  logIn.style.color = '';
  logIn.style.textDecoration = '';
  signUp.style.color = '#948979';
  signUp.style.textDecoration = 'underline';
  logInBox.classList.add('hide');
  signBox.classList.remove('hide');
  // console.log('sign up click');
});