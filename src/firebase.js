import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBxnw70-WWc9-tKKaKSRgK4I3C7C2ZoZXk",
  authDomain: "dropbox-c6128.firebaseapp.com",
  projectId: "dropbox-c6128",
  storageBucket: "dropbox-c6128.appspot.com",
  messagingSenderId: "511271125365",
  appId: "1:511271125365:web:8f9a0dbdefab2427ff933c",
  // measurementId: "G-87QWW6RSG2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
