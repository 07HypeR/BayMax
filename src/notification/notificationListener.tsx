import noitifee, {EventType} from '@notifee/react-native';

noitifee.onForegroundEvent(({type, detail}) => {
  switch (type) {
    case EventType.ACTION_PRESS:
      if (detail.pressAction?.id === 'drink-action') {
        console.log('DRINK ACTION 🔴');
      }
      if (detail.pressAction?.id === 'water-intake') {
        console.log('WATER INTAKE 🔴');
      }
      break;
  }
});

noitifee.onBackgroundEvent(async ({type, detail}) => {
  console.log(type);
  console.log(detail);
  if (
    type == EventType.ACTION_PRESS &&
    detail.pressAction?.id === 'DRINK ACTION BACKGROUND 🔴'
  ) {
    console.log('DRINK ACTION BACKGROUND 🔴');
  }
});
