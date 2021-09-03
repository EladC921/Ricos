import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//firebase configuration
const firebaseInit = firebase.initializeApp({
  apiKey: "AIzaSyCX7fI3wMFj6CaYyyKOSFXvX7JVar0_8Cg",
  authDomain: "ricos-921.firebaseapp.com",
  projectId: "ricos-921",
  storageBucket: "ricos-921.appspot.com",
  messagingSenderId: "947482963891",
  appId: "1:947482963891:web:bd50e4fde0d3f65dfda5c6",
  measurementId: "G-EC7F87ZWM9",
});

const firestore = firebaseInit.firestore();
const auth = firebaseInit.auth();

export { firestore, auth };
