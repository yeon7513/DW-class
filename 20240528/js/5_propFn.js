$(document).ready(function () {
  const attrVal = $('#check1').attr('checked');
  const propVal = $('#check1').prop('checked');

  console.log('attr: ', attrVal);
  console.log('prop: ', propVal);

  const attrVal2 = $('#check2').attr('checked');
  const propVal2 = $('#check2').prop('checked');

  console.log('attr2: ', attrVal2);
  console.log('prop2: ', propVal2);

  console.log(typeof attrVal);
  console.log(typeof propVal);

  // prop 함수를 사용하면 좋은 속성들
  // checked, selected, disabled, readonly 같은 불린타입들...
});
