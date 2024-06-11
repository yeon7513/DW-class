// h2의 자식 a 태그의 테두리 설정 - solid
// h2의 후손(자손) a 태그의 배경색을 노란색으로 변경

// 자바스크립트
// const h2El = document.querySelector('h2');
// h2El.firstElementChild.style.border = '3px solid #ccc';
// h2El.lastElementChild.firstElementChild.style.backgroundColor = 'yellow';

// 제이쿼리
$(document).ready(function () {
  $('#selector01 h2 > a').css('border', '3px solid red');
  $('#selector01 h2 span').children().css('backgroundColor', 'yellow');

  // span 태그의 배경색 - yellow
  $('#selector02 span').css('backgroundColor', 'yellow');
  // div의 모든 후손 중 span 태그의 테두리 - red
  $('#selector02 div span').css('border', '2px solid red');
  // div의 바로 다음 자식 span 태그의 테두리 - blue
  $('#selector02 div > span').css('border', '2px solid blue');

  // h3 다음의 모든 형제 p태그의 배경색을 변경, 길이지정, 가운데 정렬
  $('#selector03 h3 ~ p')
    .css('backgroundColor', 'pink')
    .css('width', '200px')
    .css('textAlign', 'center');

  // h3 다음의 첫번째 형제의 글자를 굵게, 폰트사이즈 크게
  $('#selector03 h3 + *').css({
    'font-weight': '900', // 케밥케이스는 문자열로 묶어줘야한다.
    fontSize: '24px', // 카멜케이스는 안묶어줘도된다. (단, 객체로 묶었을 때만)
    backgroundColor: 'red',
  });

  // title 속성을 가진 p 태그의 배경색 변경
  $('#selector04 p[title]').css('backgroundColor', 'green');

  // title 속성값이 text2가 아닌 p 태그의 배경색 변경
  $('#selector04 p[title!="text2"]').css('backgroundColor', 'purple');

  // title 속성값이 text1로 시작하는 p 태그의 배경색을 변경
  $('#selector04 p[title^="text1"]').css('backgroundColor', 'tan');

  // title 속성값이 text1로 끝나는 p 태그의 배경색을 변경
  $('#selector04 p[title$="text1"]').css('backgroundColor', 'tomato');

  // title 속성값이 text1과 일치 또는 text1- 으로 시작하는 p 태그 폰트색상 변경
  $('#selector04 p[title|="text1"]').css('color', 'white');

  // title 속성값이 text1을 포함하는 p 태그의 border 변경
  $('#selector04 p[title*="text1"]').css('border', '3px dotted cyan');

  // title 속성값이 text1 단어를 포함하는 p 태그의 font-weight 변경
  $('#selector04 p[title~="text1"]').css('fontWeight', '800');
});
