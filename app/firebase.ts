import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeOFek1sX5uS1uiRvXkU-C21POOpmIZes",
  authDomain: "qwyzex-website.firebaseapp.com",
  projectId: "qwyzex-website",
  storageBucket: "qwyzex-website.appspot.com",
  messagingSenderId: "892362358997",
  appId: "1:892362358997:web:d58033ab6584a526a5625c",
  measurementId: "G-EDJENV6NDK",
};

export const firebaseapp: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(firebaseapp);
export const db: Firestore = getFirestore(firebaseapp);
