

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import 'firebase/auth';
// import firebase from 'firebase/app'
// import {getFirestore, collection,onSnapshot,addDoc,deleteDoc,doc,query,where,orderBy,serverTimestamp,getDoc,updateDoc} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdNZGvTD98bVq5PtipZdlyWDSB7BOlqG8",
  authDomain: "ariadne-next.firebaseapp.com",
  projectId: "ariadne-next",
  storageBucket: "ariadne-next.appspot.com",
  messagingSenderId: "267467282176",
  appId: "1:267467282176:web:6be1926a3dc84c8bc905e5",
  measurementId: "G-QR27S70Z49"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

