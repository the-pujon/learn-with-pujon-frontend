// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq7hRWR-zSv584EOsFJoE13oQbi4uKMBM",
  authDomain: "skills-voayge.firebaseapp.com",
  projectId: "skills-voayge",
  storageBucket: "skills-voayge.appspot.com",
  messagingSenderId: "116623903164",
  appId: "1:116623903164:web:c52697de040d1b84dc83b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);