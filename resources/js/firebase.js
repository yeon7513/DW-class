import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';

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

export { db };
