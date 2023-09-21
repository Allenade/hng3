import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBs5JJK7Y9Wlt5FD1critbax9fU0MiYOWk",
  authDomain: "drag-and-drop-bce52.firebaseapp.com",
  projectId: "drag-and-drop-bce52",
  storageBucket: "drag-and-drop-bce52.appspot.com",
  messagingSenderId: "850052508931",
  appId: "1:850052508931:web:cd1dfe045cbacfa26e4d36",
  measurementId: "G-05W1JE1XD6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
