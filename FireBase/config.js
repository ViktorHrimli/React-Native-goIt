import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyAcmuer7h8fRtvyQmw88Eacu1rvwl2oFA8",
  authDomain: "postapp-208c4.firebaseapp.com",
  projectId: "postapp-208c4",
  databaseURL:
    "https://postapp-208c4-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "postapp-208c4.appspot.com",
  messagingSenderId: "347821950367",
  appId: "1:347821950367:web:3fd098d3ff873502e5e9aa",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// const auth = getAuth(app);

export { auth };
