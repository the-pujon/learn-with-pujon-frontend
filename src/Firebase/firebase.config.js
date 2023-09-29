// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_APIKEY,
  authDomain: "learn-with-pujon.firebaseapp.com",
  projectId: "learn-with-pujon",
  storageBucket: "learn-with-pujon.appspot.com",
  messagingSenderId: "1002173485360",
  appId: "1:1002173485360:web:cac5619f80e61ab09ab8f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);