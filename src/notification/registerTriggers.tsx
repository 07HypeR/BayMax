import {usePedometerStore} from '../state/pedometerStore';
import {useWaterStore} from '../state/waterStore';
import {createTimeStampNotification} from './notificationUtils';

export const registeringAllTriggers = async () => {
  const {waterDrinkStamps, resetWaterIntake} = useWaterStore.getState();

  const {initializeStepsForTheDay} = usePedometerStore.getState();
  initializeStepsForTheDay();

  //GOOD MORNING
  createTimeStampNotification(
    require('../assets/images/gm.png'),
    'Good Morning!🌞🌻',
    'Start your day with positivity!',
    6,
    0,
    'good-morning',
  );
  //GOOD NIGHT
  createTimeStampNotification(
    require('../assets/images/gn.png'),
    'Good Night!🌙🌠',
    'End your day with peace and relaxation!',
    15,
    20,
    'good-night',
  );
};
