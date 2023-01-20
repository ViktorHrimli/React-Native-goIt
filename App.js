import React from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import { Main } from "./components/Main/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Silvana-1": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
