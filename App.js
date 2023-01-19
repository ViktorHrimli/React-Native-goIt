import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import { Main } from "./components/Main/Main";

export default function App() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);

  const [fontsLoaded] = useFonts({
    "Silvana-1": require("./assets/fonts/Roboto-Medium.ttf"),
  });

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
        <Main />
      </Provider>
    </>
  );
}
