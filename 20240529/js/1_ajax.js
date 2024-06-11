'use strict';

const url = 'https://jsonplaceholder.typicode.com/posts';

// fetch()는 Promise 객체를 반환
// Promise : 비동기 통신에 대한 상태(state)와 결과값(result)을 담고 있는 객체
// * Promise state 값
// - pending : 진행중
// - fulfilled : 작업(통신) 성공
// - rejected : 작업(통신) 실패

// .json() : 응답을 JSON 형태로 파싱한다.
// .text() : 응답을 읽고 string 형태로 반환한다.
// .formData() : 응답을 FormData 객체 형태로 반환한다.
// .blob() : 응답을 Blob(바이너리 데이터) 형태로 반환한다. (미디어 데이터에 주로 사용)

console.log('start ----------------');

fetch(url)
  // .then((res) => res.json()) // res.json()을 return으로 반환 후
  // .then((result) => console.log(result)); // result에 담는다.
  .then((res) => res.text()) // 문자열로 반환 후
  .then((result) => console.log(JSON.parse(result))); // JSON 형태로 파싱 후 출력

console.log('------------------ end');

// ** 문서의 흐름
// 1. start 콘솔이 먼저 찍힘
// 2. fetch를 만났는데 여기서 리턴하는 Promise의 then 함수로 콜백을 등록
// 3. 뒤에 있는 두 번째 then 함수도 콜백을 등록
//   --> 등록만 할 뿐 실행은 하지 않음. 응답이 도착하지 않았기 때문..! (비동기 처리)
// 4. end 콘솔이 찍힌다.
// 5. 서버(요청한 쪽)에서 response(응답)가 도착하면 then 함수로 등록했던 콜백들이 실행된다.
// 6. 등록해놨던 콜백 함수를 실행
