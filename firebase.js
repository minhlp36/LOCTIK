// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJxH_3ZkN7wQnXVelRzm0mezBCBcxKoJM",
  authDomain: "loktik-1d9af.firebaseapp.com",
  projectId: "loktik-1d9af",
  storageBucket: "loktik-1d9af.firebasestorage.app",
  messagingSenderId: "801363229819",
  appId: "1:801363229819:web:49f086bc180d9ed9c0b6de",
  measurementId: "G-S6HQ3HN7W3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
