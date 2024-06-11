$(document).ready(function () {
  // next() : 선택한 요소의 바로 다음 요소만
  // $('li.start').next().css({
  //   color: 'red',
  //   border: '2px solid red',
  // });

  // nextAll() : 선택한 요소의 다음으로 오는 모든 요소들
  // $('li.start').nextAll().css({
  //   color: 'red',
  //   border: '2px solid red',
  // });

  // nextUntil() : 선택한 요소의 다음부터 지정한 요소의 전까지 (구간 설정)
  // $('li.start').nextUntil('li.stop', '.my').css({
  //   color: 'red',
  //   border: '2px solid red',
  // });

  // prev() : 선택한 요소의 바로 전에 있는 요소만
  // $('li.stop').prev().css({
  //   color: 'red',
  //   border: '2px solid red',
  // });

  // prevAll() : 선택한 요소의 바로 전에 있는 모든 요소들
  // $('li.stop').prevAll().css({
  //   color: 'red',
  //   border: '2px solid red',
  // });

  // prevUntil() : 선택한 요소의 전 요소부터 지정한 요소의 다음까지의 구간
  // $('li.stop').prevUntil('li.start', '.my').css({
  //   color: 'red',
  //   border: '2px solid red',
  // });

  // siblings() : 선택한 요소의 모든 형제 요소들. 형제 요소를 지정할 수도 있다.
  // $('li.start').siblings('.my').css({
  //   color: 'red',
  //   border: '2px solid red',
  // });

  // add() : 선택한 요소와 다른 요소를 같이 선택할 때
  $('li.start').add('li.stop').css({
    color: 'red',
    border: '2px solid red',
  });
});
