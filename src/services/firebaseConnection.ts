import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPhAh59QpxdQLsWgwdYhKxyGPs9eTU0V4",
  authDomain: "reactlinks-c936f.firebaseapp.com",
  projectId: "reactlinks-c936f",
  storageBucket: "reactlinks-c936f.firebasestorage.app",
  messagingSenderId: "303124368556",
  appId: "1:303124368556:web:6353fa8b7e298027372309"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }