// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQMeZNdS72kjClxdblfnHq3WPcjv5Q1zI",
  authDomain: "dragon-project-c8c82.firebaseapp.com",
  projectId: "dragon-project-c8c82",
  storageBucket: "dragon-project-c8c82.appspot.com",
  messagingSenderId: "196494410690",
  appId: "1:196494410690:web:e1112f5709cb7758018c5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth