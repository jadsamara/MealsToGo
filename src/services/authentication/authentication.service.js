import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyj5OFIkCpM3BUO_P-x9593LiRRcNZaPc",
  authDomain: "mealstogo-28d48.firebaseapp.com",
  projectId: "mealstogo-28d48",
  storageBucket: "mealstogo-28d48.appspot.com",
  messagingSenderId: "205405311500",
  appId: "1:205405311500:web:d45e1d0e12c8040e75d429",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = async (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
