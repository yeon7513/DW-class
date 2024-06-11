'use strict';

const resultBtn = document.querySelector('#result-btn');

resultBtn.addEventListener('click', function (e) {
  e.preventDefault();

  // 이름 가져오기
  const name = document.querySelector("input[name='name']");

  // 성별 가져오기
  // const radioEl = document.querySelectorAll("input[name='gender']");
  // let gender;
  // radioEl.forEach((v) => {
  //   if (v.checked) {
  //     gender = v.value;
  //   }
  // });

  let gender = document.querySelector("input[name='gender']:checked").value;
  console.log(gender);

  // 취미 가져오기
  const selectHobby = document.querySelectorAll("input[name='hobby']:checked");
  console.log(selectHobby);

  const hobbyArr = [];

  selectHobby.forEach((v) => {
    hobbyArr.push(v.value);
  });

  console.log(hobbyArr);

  // 출력
  const resultBox = document.querySelector('#result');

  resultBox.value = `
    ${name.value}씨!
    당신은 ${gender}이고,
    취미는 ${
      hobbyArr.length > 0 ? hobbyArr.join(', ') + '이군요!' : '없군요...'
    }`;
});
