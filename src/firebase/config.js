// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnYJoY6A_O6jvDaUPj1VBpHK_QQOuAa5k",
  authDomain: "ecommerce-coder-kd.firebaseapp.com",
  projectId: "ecommerce-coder-kd",
  storageBucket: "ecommerce-coder-kd.appspot.com",
  messagingSenderId: "960213700046",
  appId: "1:960213700046:web:e04b79a4223807ebbaef9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
