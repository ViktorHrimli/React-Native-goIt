import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { initializeAuth } from "firebase/auth";

import { getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyCI99TN7H0XF4-vMsK9vx2FNcl1PRSDdJE",
  authDomain: "testprod-4436b.firebaseapp.com",
  projectId: "testprod-4436b",
  databaseURL:
    "https://testprod-4436b-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "testprod-4436b.appspot.com",
  messagingSenderId: "478656377387",
  appId: "1:478656377387:web:e1ca27496faf1b5530306e",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
