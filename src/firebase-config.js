// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeDITNwanJnegy6rfiLww-STU-lDnucWs",
    authDomain: "maomi-web-login.firebaseapp.com",
    projectId: "maomi-web-login",
    storageBucket: "maomi-web-login.appspot.com",
    messagingSenderId: "840859917643",
    appId: "1:840859917643:web:71f6ebd88e2fd8b8ee5cce",
    measurementId: "G-XY07YS8QNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
