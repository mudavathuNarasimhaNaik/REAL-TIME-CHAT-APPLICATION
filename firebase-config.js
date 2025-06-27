// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Replace with your actual config from Firebase Console
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://your-app.firebaseio.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
