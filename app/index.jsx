import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const SplashScreen = () => {
  return (
    <View className="flex-1 items-center justify-center  bg-primary">
      <TouchableOpacity onPress={() => router.replace("/BaymaxScreen")}>
        <Text className="text-2xl font-Theme">SplashScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
