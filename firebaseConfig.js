// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1M2Ddfvy1FlfoEmVYwfLJc0txJidZSBI",
  authDomain: "easyshare-21ec4.firebaseapp.com",
  projectId: "easyshare-21ec4",
  storageBucket: "easyshare-21ec4.appspot.com",
  messagingSenderId: "515584752013",
  appId: "1:515584752013:web:7eed5b9778ce7da5bea5c4",
  measurementId: "G-7LP8XPYFEX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
