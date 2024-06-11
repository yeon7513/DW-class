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
  apiKey: 'AIzaSyC8Wq1wiK7nma--7EYpVy6X5iW_qsJC_rk',
  authDomain: 'mbti-project-495d0.firebaseapp.com',
  projectId: 'mbti-project-495d0',
  storageBucket: 'mbti-project-495d0.appspot.com',
  messagingSenderId: '164107306646',
  appId: '1:164107306646:web:1e7b5155487b84aaa624b7',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// read
async function getDatas(collectionName) {
  const collect = await collection(db, collectionName);
  const snapshot = await getDocs(collect);

  return snapshot;
}

// create
async function addDatas(collectionName, dataObj) {
  try {
    const collect = await collection(db, collectionName);
    await addDoc(collect, dataObj);
    return true;
  } catch (error) {
    return false;
  }
}

// delete
async function deleteDatas(collectionName, docId) {
  const docRef = await doc(db, collectionName, docId);
  await deleteDoc(docRef);
}

// update
async function updateDatas(collectionName, docId, updateInfoObj) {
  const docRef = await doc(db, collectionName, docId);
  await updateDoc(docRef, updateInfoObj);
}

export { db, getDatas, addDatas, deleteDatas, updateDatas };
