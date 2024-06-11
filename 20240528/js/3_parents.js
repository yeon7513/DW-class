// p 태그들에 클릭 이벤트를 달아준다.
// $('p').on('click', function () {
//   // 선택된 p 태그를 가져온다.
//   let pTag = $(this);

//   // 선택된 p 태그의 부모요소를 가져온다.
//   let parent = pTag.parents('div');

//   // 부모요소가 div 태그인지 확인한다.
//   let prop = parent.prop('tagName');

//   if (prop) {
//     // 부모요소가 div 태그라면 선택된 p 태그의 텍스트를 가져온다.
//     let str = pTag.text();

//     // 새로운 p 태그를 생성하여 부모요소에 추가한다. (폰트색상 변경)
//     let newEl = $('<p>').text(str);
//     newEl.css({
//       color: 'red',
//     });

//     parent.append(newEl);
//   } else {
//     // 부모요소가 div 태그가 아니라면 "작업대상이 아닙니다."라는 문구를 출력 (alert)
//     alert('작업대상이 아닙니다.');
//   }
// });

// 이벤트 위임(event delegation)
// - 이벤트 위임은 상위 요소에 이벤트 리스너를 설정하고, 실제 이벤트가 하위 요소에서 발생할 때 이벤트를 처리하는 방식이다.
// - this : 이벤트 핸들러가 붙은 요소를 가리킨다.
// - e.target : 이벤트가 발생한 실제 요소를 가리킨다.
// - 자바스크립트에서도 이벤트 위임이 가능함. (단, 조건문으로 사용)

$('div').on('click', 'p', function (e) {
  // div 요소에 click 이벤트 리스너를 설정하고, p 태그가 클릭 될 때만 트리거 된다.
  console.log('this: ', this.tagName); // 이벤트가 걸린 p태그
  console.log('e.target', e.target.tagName); // 사용자가 클릭한 p태그
  const pTag = e.target;
  $(this).parent('div').append($(pTag).clone().css('color', 'red'));
});
