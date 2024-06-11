$(document).ready(function () {
  // $('#span1').parent().css({
  //   color: 'red',
  //   border: '2px solid red',
  // });

  // $('#span1').parents('div').css({
  //   color: 'red',
  //   border: '2px solid red',
  // });

  // $('#span1').parentsUntil('div').css({
  //   color: 'red',
  //   border: '2px solid red',
  // });

  // $('#span1').closest('div').css({
  //   color: 'red',
  //   border: '2px solid red',
  // });

  // $('.wrapper > div').find('li').css({
  //   color: 'red',
  //   border: '2px solid red',
  // });

  // $('#span1').closest('.wrapper').find('#span2').css({
  //   color: 'red',
  //   border: '2px solid red',
  // });

  $('#span2').closest('.wrapper').find('#span1').css({
    color: 'red',
    border: '2px solid red',
  });
});
