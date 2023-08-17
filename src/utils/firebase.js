import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZTMfg0Cxvx6matpP-Ww65fa4ekqn-oU4 ",
  authDomain: "hacking-52fca.firebaseapp.com",
  databaseURL: "https://hacking-52fca.firebaseio.com",
  projectId: "hacking-52fca",
  storageBucket: "hacking-52fca.appspot.com",
  messagingSenderId: "1032135949672",
  appId: "1:1032135949672:web:5d8a7507144f9a652e2add",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
