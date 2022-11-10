// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkmh7AFomjx_n0uXfV3vbQMcO5yPelb5I",
  authDomain: "login-app-b3985.firebaseapp.com",
  projectId: "login-app-b3985",
  storageBucket: "login-app-b3985.appspot.com",
  messagingSenderId: "324835129074",
  appId: "1:324835129074:web:ac373f652a7ad489e0826b",
};

// Initialize Firebaseg

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
