import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
import Animated from "react-native-reanimated";
import { Colors, Fonts, lightColors } from "@/utils/Constants";
import { screenHeight, screenWidth } from "@/utils/Scaling";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "@/components/global/CustomText";
import LottieView from "lottie-react-native";

const bottomColors = [...lightColors].reverse();
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Animated.View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/launch.png")}
          style={styles.img}
        />
      </Animated.View>

      <Animated.View style={styles.gradientContainer}>
        <LinearGradient colors={bottomColors} style={styles.gradient}>
          <View>
            <CustomText fontSize={34} fontFamily={Fonts.Theme}>
              BAYMAX!
            </CustomText>
            <LottieView
              source={require("../assets/animations/sync.json")}
              style={{ width: 280, height: 100 }}
              autoPlay={true}
              loop
            />
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    position: "absolute",
    height: "35%",
    bottom: 0,
    width: "100%",
  },
  gradient: {
    paddingTop: 30,
    width: "100%",
    height: "100%",
  },
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
