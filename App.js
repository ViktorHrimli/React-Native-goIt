import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
// import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";

import { useRouting } from "./routers/router";
import { store } from "./redux/store";

export default function App() {
  const [auth, setAuth] = useState(true);

  const [fontsLoaded] = useFonts({
    "Silvana-1": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const routing = useRouting(auth);

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
