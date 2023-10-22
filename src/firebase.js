
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBKJdejByKrahZTKFoHw_bOhBQ9Uu-sAas",
  authDomain: "disney-plus-60385.firebaseapp.com",
  projectId: "disney-plus-60385",
  storageBucket: "disney-plus-60385.appspot.com",
  messagingSenderId: "817483333976",
  appId: "1:817483333976:web:fd4347ff060bb28b97252d",
  measurementId: "G-KEEXFX1R1L"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export Firebase services
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, provider, storage, firebaseApp };
export default db;

