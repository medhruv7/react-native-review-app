import Home from "./screens/home";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading  from "expo-app-loading";
import Navigator from './routes/homeStack';

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return fontsLoaded ? (
    <Navigator />
  ) : (
    <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={(error) => console.log(error)}/>
  );
}