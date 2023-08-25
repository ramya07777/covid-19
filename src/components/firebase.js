// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9Jb2P2zSUnJjs2oU5Uj-w-4tLzAqrAE4",
  authDomain: "covid-19-1-986b3.firebaseapp.com",
  projectId: "covid-19-1-986b3",
  storageBucket: "covid-19-1-986b3.appspot.com",
  messagingSenderId: "676019865692",
  appId: "1:676019865692:web:41f527317b31d57119be99",
  measurementId: "G-0T1Q718LN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);