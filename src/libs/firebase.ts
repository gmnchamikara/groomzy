// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBErHLsu4P2GkxJanqVPYLtgFftThZvmAM",
  authDomain: "mug-shop-fa8b0.firebaseapp.com",
  projectId: "mug-shop-fa8b0",
  storageBucket: "mug-shop-fa8b0.appspot.com",
  messagingSenderId: "591402500061",
  appId: "1:591402500061:web:ba5a787cbc94154b0a8034",
  measurementId: "G-DRJZD52FB3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp


