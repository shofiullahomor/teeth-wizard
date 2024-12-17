// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHm8cUW2mQ5IH3Ts23fCEqhucNpDVdhNo",
  authDomain: "teeth-wizard-e3bcf.firebaseapp.com",
  projectId: "teeth-wizard-e3bcf",
  storageBucket: "teeth-wizard-e3bcf.firebasestorage.app",
  messagingSenderId: "1034831070856",
  appId: "1:1034831070856:web:85b0febe6d21aab535c13d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
