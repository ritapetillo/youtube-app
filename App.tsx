import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={"dark"} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
