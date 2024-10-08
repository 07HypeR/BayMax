import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import Animated from "react-native-reanimated";

const SplashScreen = () => {
  return (
    <View>
      <Animated.View>
        <Image source={require("../assets/images/launch.png")} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
