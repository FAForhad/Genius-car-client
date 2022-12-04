// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfiR8fhYHaJ9LaghNhb0ec5qu3oPdI618",
  authDomain: "genius-car-c73a0.firebaseapp.com",
  projectId: "genius-car-c73a0",
  storageBucket: "genius-car-c73a0.appspot.com",
  messagingSenderId: "943159520048",
  appId: "1:943159520048:web:d4fa750f89f842812436f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;