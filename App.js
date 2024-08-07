import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from './src/screens/Splash';
import SignIn from './src/screens/SignIn';
import SignInWithEmail from './src/screens/SignIn/SignInWithEmail';
import OtpScreen from './src/screens/Otp';
import BottomBar from './src/screens/BottomBar';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import MyKooie from './src/screens/MyKooie/MyKooie';
import StartingScreen from './src/screens/StartingScreen/StartingScreen';
import JoinSignIn from './src/screens/JoinSignIn/JoinSignIn';
import Marketplaces from './src/screens/Marketplaces/Marketplaces';
import Setting from './src/screens/Setting/Setting';
import AccountOverview from './src/screens/AccountOverview/AccountOverview';
import ResentSearch from './src/screens/ResentSearch/ResentSearch';
import HouseBooking from './src/screens/HouseBooking/HouseBooking';
import HouseBookingInnerPage from './src/screens/HouseBookingInnerPage/HouseBookingInnerPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignInWithEmail" component={SignInWithEmail} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="BottomBar" component={BottomBar} />
          <Stack.Screen name="MyKooie" component={MyKooie} />
          <Stack.Screen name="StartingScreen" component={StartingScreen} />
          <Stack.Screen name="JoinSignIn" component={JoinSignIn} />
          <Stack.Screen name="Marketplaces" component={Marketplaces} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="AccountOverview" component={AccountOverview} />
          <Stack.Screen name="ResentSearch" component={ResentSearch} />
          <Stack.Screen name="HouseBooking" component={HouseBooking} />
          <Stack.Screen name="HouseBookingInnerPage" component={HouseBookingInnerPage} />
        </Stack.Navigator>
        {/* <Tabs /> */}
      </NavigationContainer>
    </Provider>
  );
};
export default App;
