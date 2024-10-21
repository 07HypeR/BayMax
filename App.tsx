import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import {requestPermisssion} from './src/notification/notificationPermission';
import './src/notification/notificationListener';
import {registeringAllTriggers} from './src/notification/registerTriggers';

const App = () => {
  const permissionChecks = async () => {
    requestPermisssion();
    registeringAllTriggers();
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
