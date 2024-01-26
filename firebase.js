// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzfXpxHuK0yoyyfesZMFfsOqafsaTeZXE",
  authDomain: "react-notes-fd118.firebaseapp.com",
  projectId: "react-notes-fd118",
  storageBucket: "react-notes-fd118.appspot.com",
  messagingSenderId: "212003545817",
  appId: "1:212003545817:web:eb0d1c9f899e47e7cc54c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
