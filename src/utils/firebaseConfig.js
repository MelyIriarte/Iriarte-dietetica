// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs83hXyq2brx-cPdzZP_Xu1IPlxoVB5IM",
  authDomain: "dietcon-shop.firebaseapp.com",
  projectId: "dietcon-shop",
  storageBucket: "dietcon-shop.appspot.com",
  messagingSenderId: "175009424725",
  appId: "1:175009424725:web:83a41b74e1b369d1e6fbdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
