import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDdvCZHX-oBkPub6OeRCsWVFmZdkTQqMQ8",
  authDomain: "mern-netflix-clone-e7f34.firebaseapp.com",
  projectId: "mern-netflix-clone-e7f34",
  storageBucket: "mern-netflix-clone-e7f34.appspot.com",
  messagingSenderId: "1086341776851",
  appId: "1:1086341776851:web:dee8c36c57d57a98b09b26",
  measurementId: "G-TBPE9MGNWV"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);