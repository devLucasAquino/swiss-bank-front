import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_QobXq_VU-QFwiMrDh0hAOoAL5hoIFek",
  authDomain: "swiss-auth.firebaseapp.com",
  projectId: "swiss-auth",
  storageBucket: "swiss-auth.appspot.com",
  messagingSenderId: "999611613591",
  appId: "1:999611613591:web:c81f4a9f6ab97f1f8f44d2"
};

// inicializando firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);