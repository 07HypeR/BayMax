import {View, StyleSheet, Image, Animated} from 'react-native';
import React, {FC} from 'react';
import {screenHeight, screenWidth} from '../../utils/Scaling';
import {BlurView} from '@react-native-community/blur';

const Background: FC<{blurOpacity: any}> = ({blurOpacity}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../../assets/images/baymax.png')}
        style={styles.img}
      />
      <Animated.View style={[styles.absolute, {opacity: blurOpacity}]}>
        <BlurView
          reducedTransparencyFallbackColor="white"
          style={styles.absolute}
          blurType="ultraThinMaterial"
          blurAmount={2}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: screenWidth,
    height: screenHeight * 1.2,
    position: 'absolute',
    zIndex: -1,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    bottom: -screenHeight * 0.2,
  },
});

export default Background;
