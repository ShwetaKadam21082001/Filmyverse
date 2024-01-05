import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyBV5dmEfatvFQEj2VXJcfvA_A-X70JPZz8",
  authDomain: "filmyverse-50afc.firebaseapp.com",
  projectId: "filmyverse-50afc",
  storageBucket: "filmyverse-50afc.appspot.com",
  messagingSenderId: "370184582583",
  appId: "1:370184582583:web:559ec618ff801b71262432",
};

// console.log(process.env.REACT_APP_API_KEY,"hello");

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
