import notifee from '@notifee/react-native';

export const addBadgeCount = async () => {
  notifee.setBadgeCount(1).then(() => console.log('Badge Count'));
};
