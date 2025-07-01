// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk6EzAdv1BYOdVqm30MJ9dLoKAyA_6siE",
  authDomain: "netflix-gpt-80.firebaseapp.com",
  projectId: "netflix-gpt-80",
  storageBucket: "netflix-gpt-80.firebasestorage.app",
  messagingSenderId: "250355219890",
  appId: "1:250355219890:web:db84be1921a60e559eb8ab",
  measurementId: "G-FEBB1WN3XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);