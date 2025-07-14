// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "netflix-gpt-80.firebaseapp.com",
  projectId: "netflix-gpt-80",
  storageBucket: "netflix-gpt-80.firebasestorage.app",
  messagingSenderId: "250355219890",
  appId: "1:250355219890:web:db84be1921a60e559eb8ab",
  measurementId: "G-FEBB1WN3XL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
