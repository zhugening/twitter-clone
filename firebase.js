// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v3-c5f5b.firebaseapp.com",
  projectId: "twitter-v3-c5f5b",
  storageBucket: "twitter-v3-c5f5b.appspot.com",
  messagingSenderId: "664998019253",
  appId: "1:664998019253:web:0c6c99271d275abb5afefc"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

//Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore() 
const storage = getStorage();
export { app, db, storage };

