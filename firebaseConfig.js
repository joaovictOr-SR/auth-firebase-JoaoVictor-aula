// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM_Oy_EaRCwyptPUFht6ajVYlQJDnQ_-s",
  authDomain: "auth-firebase-projeto-au-b4cac.firebaseapp.com",
  projectId: "auth-firebase-projeto-au-b4cac",
  storageBucket: "auth-firebase-projeto-au-b4cac.appspot.com",
  messagingSenderId: "867295984839",
  appId: "1:867295984839:web:418d4a0310e1757b8452e2",
  measurementId: "G-8SQN9ZJFB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;