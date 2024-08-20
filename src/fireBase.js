/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "weddingwise-62f7f.firebaseapp.com",
  projectId: "weddingwise-62f7f",
  storageBucket: "weddingwise-62f7f.appspot.com",
  messagingSenderId: "924857923199",
  appId: "1:924857923199:web:bf38d6f6d2385cb8ef314a",
  measurementId: "G-MEY2TFB4C1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
