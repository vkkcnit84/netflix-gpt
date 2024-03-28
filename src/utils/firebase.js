// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAncSyuO7GMmRfW2tb2-5VfyJr8vI246Ho",
  authDomain: "netflix-gpt-app-3f875.firebaseapp.com",
  projectId: "netflix-gpt-app-3f875",
  storageBucket: "netflix-gpt-app-3f875.appspot.com",
  messagingSenderId: "715616728620",
  appId: "1:715616728620:web:2e04c607e9a48148794389",
  measurementId: "G-Y37K6YREX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();