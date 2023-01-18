import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import { auth } from "./FireBase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouting } from "./routers/router";
import { store } from "./redux/store";

export default function App() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  onAuthStateChanged(auth, (user) => {
    setIsAuth(user);
  });

  const [fontsLoaded] = useFonts({
    "Silvana-1": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const routing = useRouting(isAuth);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text style={styles.text}>No access to camera</Text>;
  // }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>{routing}</NavigationContainer>
      </Provider>
    </>
  );
}
