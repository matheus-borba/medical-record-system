import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqOURlboS6T2BZPgquo5EU05er9p0SGiY",
  authDomain: "medical-record-system-2024.firebaseapp.com",
  databaseURL: "https://medical-record-system-2024-default-rtdb.firebaseio.com",
  projectId: "medical-record-system-2024",
  storageBucket: "medical-record-system-2024.appspot.com",
  messagingSenderId: "787223073260",
  appId: "1:787223073260:web:c90c9ea90fd6628b7c70c9",
  measurementId: "G-L7HC4CK61H"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
