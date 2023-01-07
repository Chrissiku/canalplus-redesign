// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2Zpxl3aOmJoBxe-CA1HNqcIYxw7c3dc8",
  authDomain: "canalplus-redesign.firebaseapp.com",
  projectId: "canalplus-redesign",
  storageBucket: "canalplus-redesign.appspot.com",
  messagingSenderId: "696627738619",
  appId: "1:696627738619:web:3ea32204f19bd179947d5e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
