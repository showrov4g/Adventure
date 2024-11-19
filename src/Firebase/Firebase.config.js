// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRNoO7xhTusUBz2o1MXwf9NlcdhOnOa8M",
  authDomain: "assaignment9.firebaseapp.com",
  projectId: "assaignment9",
  storageBucket: "assaignment9.firebasestorage.app",
  messagingSenderId: "307553322525",
  appId: "1:307553322525:web:8d5435ed5a15f212aca8f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
