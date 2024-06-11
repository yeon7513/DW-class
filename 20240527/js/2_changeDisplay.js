// 자바스크립트
const h2El = document.querySelectorAll('h2');

// h2El.forEach((el) => {
//   el.addEventListener('click', function () {
//     el.style.display = 'none';
//   });
// });

// 제이쿼리
$(document).ready(function () {
  $('h2').click(function () {
    $(this).hide();
  });
});
