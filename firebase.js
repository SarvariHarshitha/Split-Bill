import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVvQePMjRzkJaciaik_K4OzHxiXiXI2Dk",
  authDomain: "split-bill-ae96c.firebaseapp.com",
  projectId: "split-bill-ae96c",
  storageBucket: "split-bill-ae96c.appspot.com",
  messagingSenderId: "353904424581",
  appId: "1:353904424581:web:ae7f0964a639c315a21bec"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const friendCollection = collection(db, "friend")
export const expenseCollection = collection(db, "expense")