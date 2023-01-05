import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";

import useRouting from "./routers/router";

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
      <NavigationContainer>{routing}</NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
