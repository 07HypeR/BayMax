import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const SplashScreen = () => {
  return (
    <TouchableOpacity
      onPress={() => router.push("/BaymaxScreen")}
      className="flex-1 items-center justify-center ">
      <Text>SplashScreen</Text>
    </TouchableOpacity>
  );
};

export default SplashScreen;
