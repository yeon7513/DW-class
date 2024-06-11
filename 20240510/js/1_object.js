document.addEventListener('DOMContentLoaded', function(){

  "use strict";

  // 객체 선언 방법
  let person = {};
  let person2 = new Object();

  // 객체 생성 후 프로퍼티 추가 방법 1
  person.age = 20;
  person.name = "홍길동";

  console.log(person); // 프로퍼티와 값이 추가됨.
  console.log(person.age); // 객체의 프로퍼티에 접근해 값을 사용할 수 있음.

  // 객체 생성 후 프로퍼티 추가 방법 2
  person["addr"] = "대전시 중구 선화동";
  person["tel"] = "010-1234-5678";

  console.log(person);

  // 객체 생성과 동시에 프로퍼티를 추가 하는 방법
  let person3 = {
    age : 25,
    name : "둘리",
    addr : "대전시 중구 대흥동",
    tel : "010-1111-2222"
  };

  // 객체의 값을 가져오는 방법
  console.log(person3); // 객체 자체를 가져옴.
  console.log(person3.age);
  console.log(person3["addr"]);

  
  // 저의 이름은 name 이고 나이는 age이며, 주소는 addr 입니다. 그리고 전화번호는 tel 입니다.
  document.write(`
    <h3>
      저의 이름은 ${person.name}이고 나이는 ${person.age}살이며, <br />
      주소는 ${person["addr"]}입니다. <br />
      그리고 전화번호는 ${person["tel"]}입니다.
    </h3>
  `);


  // Object.keys(객체) - object의 key값을 배열로 반환
  const keys = Object.keys(person);

  console.log(keys); // 프로퍼티의 key값만 배열로 나온다.

  for (let i = 0; i < keys.length; i++) {
    console.log("person의 key: ", keys[i]); // person의 key
    console.log("person의 value: ", person[keys[i]]); // person의 value
  }


  // Object.values(객체) - object의 value값을 배열로 반환
  const values = Object.values(person);

  console.log(values); // 프로퍼티의 value값만 배열로 나온다.


  // Object.entries(객체) - object의 key, value 쌍을 배열로 반환
  const entries = Object.entries(person);

  console.log(entries); // 배열 안에 배열이 들어간 형식

});