
import { initializeApp } from "firebase/app";



// import firebase from 'firebase/app'
import {getAuth,RecaptchaVerifier,signInWithPhoneNumber} from 'firebase/auth'
// import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAFnFaDSrlNnd1J-mSO9BqEnFBCkhpqjcg",
    authDomain: "phone--login.firebaseapp.com",
    projectId: "phone--login",
    storageBucket: "phone--login.appspot.com",
    messagingSenderId: "467503592813",
    appId: "1:467503592813:web:62dab3fdea4ec7ef929664"
  };
  
  // Initialize Firebas
const app = initializeApp(firebaseConfig);
export {app,getAuth,RecaptchaVerifier,signInWithPhoneNumber}