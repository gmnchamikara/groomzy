// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBErHLsu4P2GkxJanqVPYLtgFftThZvmAM",
  authDomain: "Groomzy-fa8b0.firebaseapp.com",
  projectId: "Groomzyfa8b0",
  storageBucket: "Groomzyfa8b0.appspot.com",
  messagingSenderId: "591402500061",
  appId: "1:591402500061:web:ba5a787cbc94154b0a8034",
  measurementId: "G-DRJZD52FB3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
