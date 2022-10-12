// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFireStore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVL-7tza1dc0F6vKgd2NmgMC6yH01vFHg",
  authDomain: "react-hooks-blog-app-41ca1.firebaseapp.com",
  projectId: "react-hooks-blog-app-41ca1",
  storageBucket: "react-hooks-blog-app-41ca1.appspot.com",
  messagingSenderId: "482278874532",
  appId: "1:482278874532:web:592d8e9d8672af3b0ef531",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFireStore(app);
