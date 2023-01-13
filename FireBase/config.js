import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDoVYp3pslMpskjfubQAE7SsllYjhthWG0",
  authDomain: "mob-app-5a5f4.firebaseapp.com",
  projectId: "mob-app-5a5f4",
  storageBucket: "mob-app-5a5f4.appspot.com",
  messagingSenderId: "574983486766",
  appId: "1:574983486766:web:1e2ccd7a891fc7ac9d4ebf",
  measurementId: "G-92MJWXR4XC",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
