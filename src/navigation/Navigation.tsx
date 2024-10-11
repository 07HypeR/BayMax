import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import BaymaxScreen from '../screens/BaymaxScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from '../utils/NavigationUtils';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="BaymaxScreen"
            options={{
              animation: 'fade',
            }}
            component={BaymaxScreen}
          />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
