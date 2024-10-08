import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { AuthProvider } from './src/Contexts/authContext';
import Roots from './src/navigations/Roots';

import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';


const App = () => {

  useEffect(() => {
    // Check if Firebase is initialized
    if (!firebase.apps.length) {
      console.log('Firebase app not initialized!');
    } else {
      console.log('Firebase app initialized:', firebase.apps[0].name); // Should show [DEFAULT]
    }

    const checkFirebaseMessaging = async () => {
      try {
        const authStatus = await messaging().requestPermission();
        const token = await messaging().getToken();
        console.log('FCM Token:', token);
      } catch (error) {
        console.error('Firebase Messaging Error:', error);
      }
    };

    checkFirebaseMessaging();
  }, []);


  return (
    <AuthProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Roots />
        </NavigationContainer>
      </Provider>
    </AuthProvider>
  );
};
export default App;
