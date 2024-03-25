// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API,
    authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_DOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDERID,
    appId: import.meta.env.VITE_REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
export const storage = getStorage(app);