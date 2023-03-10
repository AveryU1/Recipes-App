// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeq1rDAQlUq92hocUOtGA3MjTTlLI-LCM",
  authDomain: "recipes-app-fdc98.firebaseapp.com",
  projectId: "recipes-app-fdc98",
  storageBucket: "recipes-app-fdc98.appspot.com",
  messagingSenderId: "842887673815",
  appId: "1:842887673815:web:b0c8e197f379b1ece17d92",
  measurementId: "G-MKY46LYVM0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
