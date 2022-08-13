import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyD1aJekMZHvddisNrJVoP85cu4R9wthBHk",
  authDomain: "edamanfood.firebaseapp.com",
  projectId: "edamanfood",
  storageBucket: "edamanfood.appspot.com",
  messagingSenderId: "392080631873",
  appId: "1:392080631873:web:0b138fcd1b2581cd947ec0",
  measurementId: "G-PHP24TVVET"
};
// Initialize Firebase
initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);

