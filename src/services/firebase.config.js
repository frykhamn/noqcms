// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.VITE_REACT_APP_FIREBASE_API,
    authDomain: process.env.VITE_REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.VITE_REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDERID,
    appId: process.env.VITE_REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);