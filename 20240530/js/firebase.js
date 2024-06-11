import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';
import {
  getFirestore,
  getDocs,
  collection,
  setDoc,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBWMDLCdTrJzMlNyndn54Q-0hNtMr11JyI',
  authDomain: 'my-project-62e50.firebaseapp.com',
  projectId: 'my-project-62e50',
  storageBucket: 'my-project-62e50.appspot.com',
  messagingSenderId: '602962938975',
  appId: '1:602962938975:web:b4e93462213f282a2d5fea',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// read
async function getDatas(collectionName) {
  // 파이어베이스의 함수들은 거의 다 비동기. 지연처리(async, await)를 해줘야한다.
  const collect = await collection(db, collectionName);
  const snapshot = await getDocs(collect); // 1. member라는 컬렉션을 가져와서
  // 2. forEach를 사용해
  // snapshot.forEach((doc) => {
  //   // 3. data() 라는 함수를 사용해 데이터만 객체로 뽑아온다.
  //   console.log(doc.data());
  // });

  return snapshot; // 받아온 데이터를 return해서 값을 반환해줘야 사용할 수 있다.
}

// ** doc() : 문서 참조 객체

// create
async function addDatas(collectionName, dataObj) {
  try {
    // ** 문서ID 수동 생성 **
    // - setDoc(doc(데이터베이스, 컬렉션명, 문서ID), 저장할 데이터 Obj)
    // - setDoc 함수에서 문서ID가 있으면 데이터를 덮어쓰고, 없으면 생성한다.
    // - 데이터를 덮어쓰기 때문에 문서ID를 따로 처리해서 사용해야한다.
    // const saveDoc = await doc(db, collectionName, '2');
    // console.log('doc() 결과 : ', saveDoc);
    // const saveResult = await setDoc(saveDoc, dataObj);
    // console.log('setDoc() 결과 : ', saveResult);
    // 성공하면 반환되는 값이 없기 때문에 undefined 출력됨.
    // 실패해도 undefined 출력.
    // 이것을 방지하기 위해 try catch 구문을 사용한다.

    // ** 문서ID 자동 생성 **
    // - addDoc(데이터베이스, 컬렉션명, 저장할 데이터 Obj)
    // - addDoc 함수를 사용하면 문서ID가 자동으로 생성된다.
    const collect = await collection(db, collectionName);
    await addDoc(collect, dataObj);
    return true;
  } catch (error) {
    return false;
  }
}

async function deleteDatas(collectionName, docId) {
  // 삭제하는 부분에서도 doc() 함수로 문서를 일단 받아와야 한다.
  const docRef = await doc(db, collectionName, docId);
  // deleteDoc(삭제할 문서);
  await deleteDoc(docRef);
}

async function updateDatas(collectionName, docId, updateInfoObj) {
  const docRef = await doc(db, collectionName, docId);
  await updateDoc(docRef, updateInfoObj);
}

export { db, getDatas, addDatas, deleteDatas, updateDatas };
