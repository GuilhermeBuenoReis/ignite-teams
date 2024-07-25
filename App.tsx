import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "./src/styles/theme/default-theme";

import { Loading } from "./src/components/loading";
import { Routes } from "./src/routes";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoading] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        style="light"
        backgroundColor={defaultTheme.COLORS.GRAY_600}
        translucent={false}
      />
      {fontsLoading ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
