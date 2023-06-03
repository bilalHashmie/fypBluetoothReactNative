// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDL2JY29th__bHK8ExWP9kvNnLcTAj8UzQ',
  authDomain: 'nescon2k23.firebaseapp.com',
  projectId: 'nescon2k23',
  storageBucket: 'nescon2k23.appspot.com',
  messagingSenderId: '297320038964',
  appId: '1:297320038964:web:9258f4f8533e64ac34c061',
  measurementId: 'G-TLXV96G7QQ',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db, firebase };
