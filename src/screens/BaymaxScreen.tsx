import {View, Text, Animated, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Colors} from '../utils/Constants';
import Background from '../components/baymax/Background';
import Loading from '../components/baymax/Loading';
import BigHero6 from '../components/baymax/BigHero6';

const BaymaxScreen = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [showLoader, setShowLoaders] = useState(true);
  const [message, setShowMessage] = useState('');
  const [showPedometer, setShowPedometer] = useState(false);

  const blurOpacity = useRef(new Animated.Value(0)).current;

  const startBlur = () => {
    Animated.timing(blurOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  const unBlur = () => {
    Animated.timing(blurOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const timer = setTimeout(startBlur, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {showLoader && (
        <View style={styles.loaderContainer}>
          <Loading />
        </View>
      )}

      {!showInstructions && <BigHero6 onPress={() => {}} />}

      <Background blurOpacity={blurOpacity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondry,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    position: 'absolute',
  },
});

export default BaymaxScreen;
