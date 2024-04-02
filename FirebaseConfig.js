// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP-k6goOxZTT_xWqEwzJ15ZQHDL8FJNf0",
  authDomain: "fir-reactnative-be9ae.firebaseapp.com",
  projectId: "fir-reactnative-be9ae",
  storageBucket: "fir-reactnative-be9ae.appspot.com",
  messagingSenderId: "432764174945",
  appId: "1:432764174945:web:3686b2330af3e530aea020"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
