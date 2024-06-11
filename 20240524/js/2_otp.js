'use strict';

// input 요소 가져오기
const inputs = document.querySelectorAll('input');

// button 요소 가져오기
const button = document.querySelector('button');

//input 요소들에 이벤트 함수 달아주기
inputs.forEach((el, idx1) => {
  el.addEventListener('keyup', (e) => {
    // 앞에서 부터 입력될 때, 다음 input을 활성화
    const currentInput = el;
    const nextInput = el.nextElementSibling;
    const previousInput = el.previousElementSibling;

    if (currentInput.value.length >= 1) {
      currentInput.value = currentInput.value.substring(0, 1);
      currentInput.blur(); // blur() : 커서를 없앰
    }

    if (
      nextInput && // 꼭 맨 앞에 있어야한다. ==> 마지막 input요소의 검사를 막기위해서!
      // 마지막 요소의 뒤에는 input이 없기 때문에 nextInput이 NULL이 된다.
      // 즉, 맨 앞에 넣어주지 않으면 효율성?이 떨어짐
      nextInput.hasAttribute('disabled') &&
      currentInput.value !== ''
    ) {
      nextInput.removeAttribute('disabled');
      nextInput.focus();
    }

    // backspace로 지우는 부분
    if (e.key === 'Backspace') {
      inputs.forEach((e, idx2) => {
        if (idx1 <= idx2) {
          e.value = '';
          e.setAttribute('disabled', true);
          if (previousInput) {
            previousInput.focus();
          }
        }
        // 첫번째 input은 disabled 되면 안됨.
        if (idx1 == 0) {
          inputs[0].removeAttribute('disabled');
          inputs[0].focus();
        }
      });
    }

    // 네번째 input 까지 채워지면 버튼 색상 변경
    if (inputs[inputs.length - 1].value !== '') {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
});
