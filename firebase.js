// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-56f82.firebaseapp.com",
  projectId: "twitter-clone-56f82",
  storageBucket: "twitter-clone-56f82.appspot.com",
  messagingSenderId: "807937647191",
  appId: "1:807937647191:web:13aa45a8afe812da63b912"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore() 
const storage = getStorage();
export { app, db, storage }