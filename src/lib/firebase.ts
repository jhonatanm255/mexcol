import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYZtIRNJMA1IR4oONPZMCIlyaLQkEck3o",
  authDomain: "mexcol.firebaseapp.com",
  projectId: "mexcol",
  storageBucket: "mexcol.firebasestorage.app",
  messagingSenderId: "275742663296",
  appId: "1:275742663296:web:543d6af809d3e352517c65",
  measurementId: "G-XYMCHM448H"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
