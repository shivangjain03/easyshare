// lib/firebase.js

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA1M2Ddfvy1FlfoEmVYwfLJc0txJidZSBI",
  authDomain: "easyshare-21ec4.firebaseapp.com",
  projectId: "easyshare-21ec4",
  storageBucket: "easyshare-21ec4.appspot.com",
  messagingSenderId: "515584752013",
  appId: "1:515584752013:web:7eed5b9778ce7da5bea5c4",
  measurementId: "G-7LP8XPYFEX"
};

// Initialize Firebase app only if it's not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
