import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Bangers-Regular": require("../assets/fonts/Bangers-Regular.ttf"),
    "Okra-Bold": require("../assets/fonts/Okra-Bold.ttf"),
    "Okra-Medium": require("../assets/fonts/Okra-Medium.ttf"),
    "Okra-MediumLight": require("../assets/fonts/Okra-MediumLight.ttf"),
    "Okra-Regular": require("../assets/fonts/Okra-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)" options={{ headerShown: false }} />
    </Stack>
  );
}
