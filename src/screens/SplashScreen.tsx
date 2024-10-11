import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {navigate} from '../utils/NavigationUtils';

const SplashScreen = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <TouchableOpacity onPress={() => navigate('BaymaxScreen')}>
        <Text style={{color: 'black'}}>Navigate to Baymax Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
