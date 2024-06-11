import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
} from './firebase.js';

const table = document.querySelector('table');

// 데이터베이스에서 데이터 가져오기 (read)
async function getMembers() {
  console.log('getMembers 함수 시작');
  const snapshot = await getDatas('member');
  // module타입의 스크립트에서는 첫번째로 오는 await은 async 없이 사용이 가능하다.
  // console.log(snapshot);
  let dataStr = `
    <tr>
      <th>이름</th>
      <th>나이</th>
      <th>성별</th>
      <th>전화번호</th>
      <th>이메일</th>
    </tr>
  `;
  snapshot.forEach((doc) => {
    const { name, age, gender, tel, email } = doc.data();

    // table.insertAdjacentHTML(
    //   'beforeend', // 파라미터 : '넣을 위치', '넣을 내용'
    //   // beforebegin : 해당 요소의 시작태그 이전 위치
    //   // afterbegin : 해당 요소의 시작태그 다음 위치
    //   // beforeend : 해당 요소의 종료태그 이전 위치
    //   // afterend : 해당 요소의 종료태그 다음 위치
    //   `
    //   <tr>
    //     <td>${name}</td>
    //     <td>${age}</td>
    //     <td>${gender}</td>
    //     <td>${tel}</td>
    //     <td>${email}</td>
    //   </tr>
    // `
    // );

    dataStr += `
      <tr>
        <td class="name">${name}</td>
        <td class="age">${age}</td>
        <td class="gender">${gender}</td>
        <td class="tel">${tel}</td>
        <td class="email">${email}</td>
        <input type='hidden' value='${doc.id}' />
      </tr>
    `;
    // input type='hidden' : 화면상에서는 보여지지 않는다.
    // 문서 ID는 doc.id로 받아온다.
    table.innerHTML = dataStr;
  });
  console.log('getMembers 함수 종료');
}

// 멤버 조회 및 이벤트 핸들러 등록 함수
function getMembersHandleTrClick() {
  getMembers().then(handleTrClick);
}
getMembersHandleTrClick();

// getMembers();
// handleTrClick();
// ↑↑ 이렇게 쓰면 getMembers가 실행되는 도중에 handleTrClick이 실행 후 종료됨
// 그러면 handleTrClick에 있는 tr을 찾지 못한다. 왜? -> tr이 생성되기 전에 함수가 실행됨...
// 그래서 getMembers에 then으로 handleTrClick을 실행함.
// getMembers().then(handleTrClick); ==> getMembers의 수행이 다 끝난 후 handleTrClick이 실행된다.

function handleTrClick() {
  console.log('handleTrClick 이벤트 시작');
  // tr 태그에 클릭 이벤트 적용
  const trEls = document.querySelectorAll('tr');
  trEls.forEach((tr) => {
    tr.addEventListener('click', (e) => {
      if (e.target.tagName != 'TH') {
        tr.classList.toggle('selected');
      }
    });
  });
  console.log('handleTrClick 이벤트 종료');
}

// 회원 정보 삭제 (delete)
const deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click', function () {
  const selectedTrEls = document.querySelectorAll('tr.selected');
  if (selectedTrEls.length == 0) {
    alert('삭제할 데이터가 없습니다.');
    return false;
  }

  // 문서ID 가져오기
  selectedTrEls.forEach((tr) => {
    const docId = tr.lastElementChild.value; // input type=hidden이 제일 마지막에 있으니까...
    deleteDatas('member', docId);
  });
  getMembersHandleTrClick();
});

// 회원 정보 수정 (update)
const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', function () {
  const selectedTrEls = document.querySelectorAll('tr.selected');
  if (selectedTrEls.length == 0) {
    alert('수정할 데이터를 선택해 주세요.');
    return false;
  } else if (selectedTrEls.length >= 2) {
    alert('회원 정보 수정은 하나씩만 가능합니다.');
    return false;
  }

  const selectedTr = selectedTrEls[0];
  const trChildren = selectedTr.children;
  // trChildren은 HTMLCollection이기 때문에 forEach 사용이 안된다.
  // for 문으로 사용함.
  for (let i = 0; i < trChildren.length; i++) {
    trChildren[i].addEventListener('click', (e) => {
      e.stopPropagation(); // 버블링 막기
    });
    const tdText = trChildren[i].textContent;
    trChildren[i].innerHTML = `
      <input class='update-input' type='text' value='${tdText}' />
    `;
  }
});

// 업데이트 저장
const saveUpdateBtn = document.getElementById('save-update-btn');
saveUpdateBtn.addEventListener('click', function () {
  const selectedTr = document.querySelector('tr.selected');
  const trChildren = selectedTr.children;

  // DB의 데이터를 수정할 정보를 추출한다.

  // HTMLCollection을 배열로 만들어준다.
  const trChildrenArr = Array.from(trChildren);
  // input 요소(가장 마지막)을 따로 꺼낸다.
  const docId = trChildrenArr.pop().value;
  const updateObj = trChildrenArr.reduce((acc, cur) => {
    return { ...acc, [cur.classList.value]: cur.firstElementChild.value };
  }, {});
  console.log(updateObj);

  // 수정된 내용을 화면에 반영한다.
  let originTrStr = '';

  for (let i = 0; i < trChildren.length; i++) {
    if (trChildren[i].tagName != 'INPUT') {
      originTrStr += `<td>${trChildren[i].firstElementChild.value}</td>`;
    } else {
      originTrStr += `<input type="hidden" value="${trChildren[i].value} /">`;
    }
  }
  selectedTr.innerHTML = originTrStr;
  selectedTr.classList.remove('selected');
  updateDatas('member', docId, updateObj).then(getMembersHandleTrClick);
});

// 데이터 생성 후 저장 (create)
const savebtn = document.getElementById('save-data');
savebtn.addEventListener('click', async function () {
  // 파이어베이스에 정보를 저장하려면 객체 형식으로 저장해야한다.

  // ---------------------------------------------
  // ** 기본 **
  const memberInfo = {
    name: document.querySelector('input[name="name"]').value,
    age: Number(document.querySelector('input[name="age"]').value),
    gender: document.querySelector('input[name="gender"]').value,
    tel: document.querySelector('input[name="tel"]').value,
    email: document.querySelector('input[name="email"]').value,
  };
  console.log(memberInfo);

  // 파이어베이스에 데이터를 저장
  const result = await addDatas('member', memberInfo);
  // 저장 결과가 성공 ==> 페이지 리로딩
  // 저장 결과가 실패 ==> '저장을 실패했습니다' (alert)
  result ? window.location.reload() : alert('저장을 실패했습니다.');

  // ---------------------------------------------

  // ** HTMLFormControlsCollection **
  // - HTML 컬렉션이지만, 배열과 객체의 특성을 가지고 있다.
  // - 단, 반복문은 적용되지 않는다.
  // - 반복문을 사용하려면 스프레드 연산자 또는 Array.from 함수를 사용해 배열로 변환해 사용한다.
  const formEl = document.forms[0];
  const formElChildren = formEl.elements;
  const formElChildrenArr = [...formElChildren];
  let joinFormObj = {};

  // * formElChildrenArr을 forEach로 반복해 joinFormObj에 객체 형식(key: value)으로 저장
  // formElChildrenArr.forEach((input) => {
  //   joinFormObj[input.name] = input.value;
  // });

  // * formElChildrenArr을 reduce를 사용해 joinFormObj에 객체 형식(key: value)으로 저장
  joinFormObj = formElChildrenArr.reduce((acc, cur) => {
    // 1. 초기값(acc)으로 빈 객체를 지정하고,
    // 2. 현재 요소(cur ==> 즉, input 요소들)의 데이터를 저장한다.

    // acc[cur.name] = cur.value;
    // return acc;

    // 좀 더 간단하게 쓰기
    return { ...acc, [cur.name]: cur.value };
  }, {});

  console.log(joinFormObj);
});
