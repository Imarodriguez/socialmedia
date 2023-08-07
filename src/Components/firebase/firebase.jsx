import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPNRmY8SNJXTEZPX1U763Q9roaiKnHpxQ",
  authDomain: "socialmedia-1d2c4.firebaseapp.com",
  projectId: "socialmedia-1d2c4",
  storageBucket: "socialmedia-1d2c4.appspot.com",
  messagingSenderId: "93823190412",
  appId: "1:93823190412:web:610bfb718fb6824a5d02a9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
