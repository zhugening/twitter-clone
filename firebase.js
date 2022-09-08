// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "twitter-v4-b8bed.firebaseapp.com",
    projectId: "twitter-v4-b8bed",
    storageBucket: "twitter-v4-b8bed.appspot.com",
    messagingSenderId: "303895070901",
    appId: "1:303895070901:web:40a9aec143c3a9962c96fc"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore() 
const storage = getStorage();
export { app, db, storage };

