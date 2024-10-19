
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDGjFr-VqDKy1xWf7I942Ufx2Dqkw08vE",
  authDomain: "react-1-fdd5c.firebaseapp.com",
  projectId: "react-1-fdd5c",
  storageBucket: "react-1-fdd5c.appspot.com",
  messagingSenderId: "66436243895",
  appId: "1:66436243895:web:d50823bd139a9f75eec832"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)