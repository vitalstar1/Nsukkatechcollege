
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUGkc2GCpRSG8fnt4myxkkvySrr9UNEHo",
  authDomain: "vitalstar2.firebaseapp.com",
  projectId: "vitalstar2",
  storageBucket: "vitalstar2.firebasestorage.app",
  messagingSenderId: "681830728964",
  appId: "1:681830728964:web:cdbd4588caf790069d3c51",
  measurementId: "G-DF4XK5RZ45"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
