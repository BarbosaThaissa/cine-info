import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo5QY5kW1kUfipSCzrrNCNxKbEUljb9kI",
  authDomain: "cine-info-b4660.firebaseapp.com",
  projectId: "cine-info-b4660",
  storageBucket: "cine-info-b4660.appspot.com",
  messagingSenderId: "722305656438",
  appId: "1:722305656438:web:ce7c814b4f1b5663fae157",
  measurementId: "G-JREFP7E6YK",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
