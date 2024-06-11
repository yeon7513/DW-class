$(document).ready(function () {
  $('button').on('click', function () {
    // 1. img 태그 전체 요소를 가져온다.
    const imgEl = $('img');

    // 2. 전체 태그에 대한 반복문을 실행한다.
    imgEl.each((i, el) => {
      // 2-1. 각 요소의 src 속성값을 추출
      const srcVal = $(el).attr('src');

      // 2-2. src 속성값에서 파일명만 추출
      const file = srcVal.split('/');
      const fileName = file[file.length - 1];
      const title = fileName.split('.')[0];

      // 2-3. 추출한 파일명을 title 속성에 값을 넣어준다.
      $(el).attr('title', title);
    });
  });
});
