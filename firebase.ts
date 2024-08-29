import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdWo2utp6-fyh7Z6cwuGQ63hWdC9Atie8",
  authDomain: "notion-clone-e46fe.firebaseapp.com",
  projectId: "notion-clone-e46fe",
  storageBucket: "notion-clone-e46fe.appspot.com",
  messagingSenderId: "65589181922",
  appId: "1:65589181922:web:c0eaf4e116c77005500dbb",
};

const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
