// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCVgz04zlYSsKU65UVzxlxQcOuyilUR1eg",
  authDomain: "evolvefitness-359319.firebaseapp.com",
  projectId: "evolvefitness-359319",
  storageBucket: "evolvefitness-359319.appspot.com",
  messagingSenderId: "1015265175994",
  appId: "1:1015265175994:web:e2125b364cfb57343f1583",
  measurementId: "G-LYSTK0M5CD",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
