import {View, Text, Animated, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Colors} from '../utils/Constants';
import Background from '../components/baymax/Background';
import Loading from '../components/baymax/Loading';
import BigHero6 from '../components/baymax/BigHero6';
import {playTTS} from '../utils/ttsListeners';
import SoundPlayer from 'react-native-sound-player';
import {playSound} from '../utils/voiceUtils';
import {prompt} from '../utils/data';

const BaymaxScreen = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [message, setMessage] = useState('');
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

  const handleError = (error: string) => {
    playTTS('There was an error! please try again');
    startBlur();
    setMessage('');
    setShowLoader(true);
    SoundPlayer.stop();
    setShowInstructions(false);
    console.log(error);
  };

  const handleResponse = async (
    type: string,
    promptText: string,
    sound: string,
  ) => {
    try {
      if (type === 'meditation') {
        playTTS('Focus on your breath!');
        playSound(sound);
        setMessage('meditation');
        return;
      }

      setShowLoader(true);
    } catch (error: any) {
      handleError(error);
    } finally {
      setShowLoader(false);
    }
  };

  const onOptionPressHandler = (type: string) => {
    setShowInstructions(true);
    if (type === 'pedometer') {
      setShowPedometer(true);
      setShowLoader(false);
      return;
    }
    switch (type) {
      case 'happiness':
        handleResponse(type, prompt.joke, 'laugh');
        break;
      case 'motivation':
        handleResponse(type, prompt.motivation, 'motivationh');
        break;
      case 'health':
        handleResponse(type, prompt.health, 'meditation');
        break;
      case 'meditation':
        handleResponse(type, prompt.health, 'meditation');
        break;
      default:
        handleError('There was no type like that');
    }
  };

  return (
    <View style={styles.container}>
      {showLoader && (
        <View style={styles.loaderContainer}>
          <Loading />
        </View>
      )}

      {!showInstructions && <BigHero6 onPress={onOptionPressHandler} />}

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
