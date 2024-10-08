import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
import Animated from "react-native-reanimated";
import { Colors } from "@/utils/Constants";
import { screenHeight, screenWidth } from "@/utils/Scaling";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Animated.View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/launch.png")}
          style={styles.img}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  imageContainer: {
    width: screenWidth - 20,
    height: screenHeight * 0.5,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default SplashScreen;
