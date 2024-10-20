import notifee from '@notifee/react-native';

export const addBadgeCount = async () => {
  notifee.setBadgeCount(1).then(() => console.log('Badge Count'));
};

export const displayNotification = async (
  title: string,
  message: string,
  image: string,
  categoryId: string,
) => {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Defaul Channel',
    sound: 'notification',
  });

  await notifee.displayNotification({
    title: title,
    body: message,
    android: {
      channelId: categoryId,
      sound: 'notification',
      onlyAlertOnce: true,
    },
  });
};
