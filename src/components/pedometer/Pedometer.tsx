import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {FC, useEffect} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {usePedometerStore} from '../../state/pedometerStore';
import StepCounter, {
  parseStepData,
  startStepCounterUpdate,
  stopStepCounterUpdate,
} from '@dongminyu/react-native-step-counter';
import {playTTS} from '../../utils/ttsListeners';
import CircularProgress from 'react-native-circular-progress-indicator';
import {Fonts} from '../../utils/Constants';
import CustomText from '../global/CustomText';

const Pedometer: FC<{
  message: string;
  onCross: () => void;
}> = ({message, onCross}) => {
  const {stepCount, dailyGoal, addSteps} = usePedometerStore();

  StepCounter.addListener('StepCounter.stepsSensorInfo');
  const startStepCounter = () => {
    startStepCounterUpdate(new Date(), data => {
      const parsedData = parseStepData(data);
      addSteps(parsedData.steps, parsedData.distance);
    });
  };

  const stopStepCounter = () => {
    stopStepCounterUpdate();
  };

  useEffect(() => {
    if (stepCount >= dailyGoal) {
      playTTS(
        "You've met your daily goal. No need to start the counter again today",
      );
    } else {
      startStepCounter();
    }

    return () => {
      stopStepCounter();
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cross}
        onPress={() => {
          Alert.alert('Your step counter stopped!!');
          stopStepCounter();
          onCross();
        }}>
        <Icon name="close-circle" color="red" size={RFValue(20)} />
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/logo_short.png')}
        style={styles.logo}
      />
      <View style={styles.indicator}>
        <CircularProgress
          value={stepCount}
          maxValue={dailyGoal}
          valueSuffix="/2000"
          progressValueFontSize={22}
          radius={120}
          activeStrokeColor="#cdd27e"
          inActiveStrokeColor="#4c6394"
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={20}
          activeStrokeWidth={20}
          title="Steps"
          titleColor="#555"
          titleFontSize={22}
          titleStyle={{fontFamily: Fonts.SemiBold}}
        />
        <CustomText
          fontSize={RFValue(8)}
          fontFamily={Fonts.SemiBold}
          style={styles.text}>
          Start Walking, counter will update automatically.
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: '90%',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 10,
    shadowColor: '#000',
    borderRadius: 10,
  },
  indicator: {
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    width: 50,
    height: 40,
    alignSelf: 'center',
    marginVertical: 10,
  },
  cross: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default Pedometer;
