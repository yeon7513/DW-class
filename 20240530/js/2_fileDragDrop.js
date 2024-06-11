'use strict';

const box = document.querySelector('.drop-box');
const title = document.querySelector('.drop-box h1');

// dragover로 기본기능 막기
box.addEventListener('dragover', (e) => {
  e.preventDefault();
});

// 드래그한 파일이 최초 진입했을 때 (box 영역에 들어왔을 때 ==> dragenter)
box.addEventListener('dragenter', (e) => {
  e.preventDefault();
  box.classList.add('active');
});

// 드래그한 파일이 영역을 벗어났을 때 (dragleave)
box.addEventListener('dragleave', (e) => {
  e.preventDefault();
  box.classList.remove('active');
});

// 드래그한 파일 객체가 해당 영역에 놓였을 때 (drop)
box.addEventListener('drop', (e) => {
  e.preventDefault();
  box.classList.remove('active');

  const files = [...e.dataTransfer.files]; // 스프레드 연산자로 배열로 바꿔줌.
  // Array.from() 으로 바꿔줘도 됨.
  let nameArr = [];

  // fileList는 유사배열도 아니여서 배열 관련 함수 자체를 사용하지 못한다.
  // ==> Object
  console.log(files);

  // 배열로 바꾸기 전에!!
  // for (let i = 0; i < files.length; i++) {
  //   const { name } = files[i];
  //   nameArr.push(name);
  // }

  // 배열로 바꿨기 때문에 map 사용 가능함.
  nameArr = files.map((file) => file.name);

  console.log(nameArr);

  title.innerHTML = nameArr.join('<br />');
});
