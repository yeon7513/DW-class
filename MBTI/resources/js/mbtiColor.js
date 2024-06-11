import { getDatas } from '../module/firebase.js';

// const mbtiArr = [
//   { mbti: 'enfp', code: '#efb578' },
//   { mbti: 'enfp', code: '#8649b6' },
//   { mbti: 'enfp', code: '#a894b2' },
//   { mbti: 'enfj', code: '#ecbb30' },
//   { mbti: 'infp', code: '#c4601e' },
//   { mbti: 'isfp', code: '#95fcc0' },
//   { mbti: 'infp', code: '#4d74b8' },
//   { mbti: 'intj', code: '#40fa34' },
//   { mbti: 'enfp', code: '#106100' },
//   { mbti: 'esfj', code: '#f0df32' },
//   { mbti: 'estj', code: '#10e479' },
//   { mbti: 'infp', code: '#6c84ac' },
//   { mbti: 'entj', code: '#aec7cb' },
//   { mbti: 'intj', code: '#6746cb' },
//   { mbti: 'istp', code: '#ff5028' },
//   { mbti: 'infp', code: '#36c667' },
//   { mbti: 'esfp', code: '#4c8f9e' },
//   { mbti: 'enfp', code: '#c88ce8' },
//   { mbti: 'enfp', code: '#c1ffc0' },
//   { mbti: 'infj', code: '#5f6600' },
// ];

const items = document.getElementById('items');

async function getMbtiInfo() {
  const datas = await getDatas('mbtiColor');
  // 데이터베이스 객체는 유사배열이 아니기 때문에 index가 없다.
  // 인덱스를 지정해서 넣어줘야 함.
  let idx = 1;
  datas.forEach((doc) => {
    const info = doc.data();
    items.insertAdjacentHTML(
      'afterbegin',
      `
        <li class="item">
          <div class="item-id">${idx}</div>
          <div class="item-mbti">${info.mbti}</div>
          <div class="item-arrow">
            <img
              class="item-arrow-icon"
              src="./resources/images/arrow.svg"
              alt=""
            />
          </div>
          <div
            class="item-color-chip"
            style="background-color: ${info.code}"
          ></div>
          <div class="item-color-code">${info.code}</div>
        </li>
      `
    );
    idx++; // forEach안에서 insertAdjacentHTML가 끝난 후 index를 증가
  });
}

getMbtiInfo();

// mbtiArr.forEach((item, idx) => {
//   items.insertAdjacentHTML(
//     'afterbegin',
//     `
//       <li class="item">
//         <div class="item-id">${idx + 1}</div>
//         <div class="item-mbti">${item.mbti}</div>
//         <div class="item-arrow">
//           <img
//             class="item-arrow-icon"
//             src="./resources/images/arrow.svg"
//             alt=""
//           />
//         </div>
//         <div
//           class="item-color-chip"
//           style="background-color: ${item.code}"
//         ></div>
//         <div class="item-color-code">${item.code}</div>
//       </li>
//     `
//   );
// });
