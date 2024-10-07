import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Screens = () => {
  return (
    <Stack>
      <Stack.Screen name="BaymaxScreen" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Screens;
