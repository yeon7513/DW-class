'use strict';

// 박스들(box), 이미지 박스(image-box) 연결하기

const boxes = document.querySelectorAll('.box');
const imgBox = document.querySelector('.image-box');

// drag - 자신이 드래그 중일 때
// dragstart - 자신이 드래그를 시작했을 때
// dragend - 자신이 드래그를 종료했을 때

// dragenter - 자신의 영역에 드래그가 들어왔을 때
// dragleave - 자신의 영역에서 드래그가 벗어났을 때
// dragover - 자신의 영역에서 드래그가 일어나고 있을 때

// drop - 자신의 영역에서 드래그가 종료됐을 때
// drop

boxes.forEach((box) => {
  box.addEventListener('dragover', (e) => {
    e.preventDefault();
    // 화살표 함수에서는 this 키워드가 사용이 안된다.
    // 화살표 함수 내에서는 e.currentTarget가 this임.
    e.currentTarget.classList.add('hovered');
  });
  box.addEventListener('dragleave', (e) => {
    e.currentTarget.classList.remove('hovered');
  });
  box.addEventListener('drop', (e) => {
    e.currentTarget.classList.remove('hovered');
    e.currentTarget.append(imgBox);
  });
});
