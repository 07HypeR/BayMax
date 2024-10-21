import {View, Text, StatusBar, Platform} from 'react-native';
import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import {
  batteryOptimizationCheck,
  powerManagerCheck,
  requestPermisssion,
} from './src/notification/notificationPermission';
import './src/notification/notificationListener';
import {registeringAllTriggers} from './src/notification/registerTriggers';
import {setCategories} from './src/notification/notificationInitial';

const App = () => {
  const permissionChecks = async () => {
    requestPermisssion();
    registeringAllTriggers();
    setCategories();
    if (Platform.OS == 'android') {
      batteryOptimizationCheck();
      powerManagerCheck();
    }
  };

  useEffect(() => {
    permissionChecks();
  }, []);
  return (
    <>
      <Navigation />
      <StatusBar hidden />
    </>
  );
};

export default App;
