// https://reactnative.dev/docs/alert

import ThemedView from '@/presentation/shared/ThemedView';
import { View, Text, Alert, StyleSheet } from 'react-native';
import ThemedButton from '@/presentation/shared/ThemedButton';

const AlertsScreen = () => {

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        // style: 'cancel',
        style: 'destructive',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  return (
    <ThemedView margin>
      <ThemedButton className='my-4' onPress={createTwoButtonAlert}>2 Button Alert</ThemedButton>
      <ThemedButton className='my-4' onPress={createThreeButtonAlert}>3 Button Alert</ThemedButton>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default AlertsScreen;
