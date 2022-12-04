// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBON8SraDq6WxiBU6I8F_q6fcXg3UeKsTQ",
  authDomain: "adastrahub-app.firebaseapp.com",
  projectId: "adastrahub-app",
  storageBucket: "adastrahub-app.appspot.com",
  messagingSenderId: "432707335665",
  appId: "1:432707335665:web:547e95a757dd1499988050",
  measurementId: "G-81LJXWXM91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const db = getFirestore(app);