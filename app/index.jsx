import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const SplashScreen = () => {
  return (
    <View className="flex-1 items-center justify-center ">
      <TouchableOpacity onPress={() => router.replace("/BaymaxScreen")}>
        <Text>SplashScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
