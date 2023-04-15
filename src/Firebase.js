// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvemqziyaTDmc7OExl9MiQEy7FSkWzfOM",
  authDomain: "ovolo-ca2a3.firebaseapp.com",
  projectId: "ovolo-ca2a3",
  storageBucket: "ovolo-ca2a3.appspot.com",
  messagingSenderId: "171472899764",
  appId: "1:171472899764:web:fbb068f7e5b8c52c5c91e1",
  measurementId: "G-0TQJQDRPBB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
