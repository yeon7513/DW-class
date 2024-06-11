import { addDatas } from '../module/firebase.js';

const mbtiArr = [
  { char: 'E', desc: '외향형' },
  { char: 'I', desc: '내향형' },
  { char: 'S', desc: '감각형' },
  { char: 'N', desc: '직관형' },
  { char: 'T', desc: '사고형' },
  { char: 'F', desc: '감정형' },
  { char: 'J', desc: '판단형' },
  { char: 'P', desc: '인식형' },
];

const mbtiOptions = document.querySelector('.mbti-options');

mbtiArr.forEach((option) => {
  mbtiOptions.insertAdjacentHTML(
    'beforeend',
    `
      <div class="mbti-option">
        <span class="mbti-char">${option.char}</span>
        ${option.desc}
      </div>
    `
  );
});

// MBTI의 옵션을 선택하기
const mbtiOption = document.querySelectorAll('.mbti-option');

mbtiOption.forEach((op, idx) => {
  op.addEventListener('click', function () {
    // 클래스가 있다면, 함수 실행 종료
    if (op.classList.contains('selected')) {
      return false;
    }
    // 짝수 인덱스에 클래스가 있다면 다음에 오는 요소에 클래스를 없애고,
    // 홀수 인덱스에 클래스가 있다면 이전에 오는 요소에 클래스를 없앤다.
    // if (idx % 2 == 0) {
    //   const nextEl = this.nextElementSibling;
    //   if (nextEl.classList.contains('selected')) {
    //     nextEl.classList.remove('selected');
    //   }
    //   this.classList.add('selected');
    // } else {
    //   const prevEl = this.previousElementSibling;
    //   if (prevEl.classList.contains('selected')) {
    //     prevEl.classList.remove('selected');
    //   }
    //   this.classList.add('selected');
    // }

    // -------------------------------------
    // 좀 더 줄여보자!!
    // let versusEl;
    // if (idx % 2 == 0) {
    //   versusEl = this.nextElementSibling;
    // } else {
    //   versusEl = this.previousElementSibling;
    // }

    // if (versusEl.classList.contains('selected')) {
    //   versusEl.classList.remove('selected');
    // }

    // this.classList.add('selected');

    // ↑↑↑↑ 코드 설명
    // versusEl에 클릭한 요소가 짝수 인덱스를 가지고 있으면 다음 요소를,
    // 홀수 인덱스를 가지고 있으면 이전 요소를 담는다.
    // 그 후 versusEl에 있는 요소에 selected라는 클래스를 가지고 있다면
    // 그 versusEl에 담긴 요소의 클래스를 제거하고, this(현재 선택된 요소)에 클래스를 넣는다.

    // -------------------------------------
    // 삼항연산자로도 바꿔보자!~
    let versusEl =
      idx % 2 == 0 ? this.nextElementSibling : this.previousElementSibling;

    let isClass = versusEl.classList.contains('selected');

    isClass
      ? versusEl.classList.remove('selected')
      : this.classList.add('selected');

    this.classList.add('selected');
  });
});

// 입력한 값을 받아와 color-input-chip에 색상 표현
const colorInput = document.querySelector('.color-input');
const colorChip = document.querySelector('.color-input-chip');

colorInput.addEventListener('change', function () {
  // change : 엔터 혹은 포커스가 떨어졌을 때
  const colorCode = colorInput.value;
  const hexPattern = /^#([0-9a-f]{3}){1,2}$/i;

  // 사용자가 입력할 때 hex코드로 입력이 되었는지 확인하고 색상을 변경한다.
  if (colorCode.length == 7) {
    if (hexPattern.test(colorCode)) {
      colorChip.style.backgroundColor = colorCode;
    } else {
      alert('유효하지 않은 HEX 형태입니다.');
      colorInput.value = '#';
    }
  } else {
    alert('색상 코드는 #을 포함한 HEX 형태로 작성해야 합니다.');
    colorInput.value = '#';
  }
});

// 랜덤 컬러 뽑기
const randomBtn = document.querySelector('.random-btn');

randomBtn.addEventListener('click', function () {
  const colorArr = [];
  for (let i = 0; i < 3; i++) {
    colorArr.push(parseInt(Math.random() * 256));
  }

  const hex = colorArr.map((code) => code.toString(16).padStart(2, 0)).join('');
  // toString(16) : 16진수로 바꿔줌

  colorInput.value = `#${hex.toUpperCase()}`;
  colorChip.style.backgroundColor = `#${hex.toUpperCase()}`;
});

// 컬러 등록 (데이터베이스에 저장)
const regBtn = document.querySelector('.reg-btn');

regBtn.addEventListener('click', async function () {
  // mbti 가져오기
  const selectedMbti = document.querySelectorAll(
    '.mbti-option.selected > .mbti-char'
  );

  if (selectedMbti.length != 4) {
    alert('MBTI를 모두 선택하셔야 합니다.');
    return false;
  }

  const mbtiValue = Array.from(selectedMbti).reduce((acc, cur) => {
    return acc + cur.innerText;
  }, ''); // 초기값으로 빈 문자를 넣어줘도 된다.

  console.log(mbtiValue);

  // color code 가져오기
  const colorCode = colorInput.value.toLowerCase();

  console.log(colorCode);

  // 객체 형태로 만들기
  const addObj = { mbti: mbtiValue, code: colorCode };

  // addDatas 함수 호출하기
  const result = await addDatas('mbtiColor', addObj);

  if (result) {
    alert('MBTI 컬러 등록에 성공했습니다.');
    window.location.href = 'mbtiColor.html';
  } else {
    alert('MBTI 컬러 등록에 실패했습니다. 관리자에게 문의하세요.');
  }
});
