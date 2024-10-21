import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import {requestPermisssion} from './src/notification/notificationPermission';
import './src/notification/notificationListener';

const App = () => {
  const permissionChecks = async () => {
    requestPermisssion();
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
