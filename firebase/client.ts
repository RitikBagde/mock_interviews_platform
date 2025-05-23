import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxUlOeLW6qM5Loj7E9Y-0K5HlhoPk_Hbg",
    authDomain: "prepwise-f6b7b.firebaseapp.com",
    projectId: "prepwise-f6b7b",
    storageBucket: "prepwise-f6b7b.firebasestorage.app",
    messagingSenderId: "141423874674",
    appId: "1:141423874674:web:f7ce14066454fbbf2ca8eb",
    measurementId: "G-VLE8FPHYJ4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) :getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);