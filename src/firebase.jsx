/*eslint-disable*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1eJIXDD1e86tcIK9hLGXHpxFRdbRpUh8",
  authDomain: "clone-257b5.firebaseapp.com",
  projectId: "clone-257b5",
  storageBucket: "clone-257b5.appspot.com",
  messagingSenderId: "898016361826",
  appId: "1:898016361826:web:f1bb28d200928ffff2c03b",
  measurementId: "G-V4S22PRG3G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
