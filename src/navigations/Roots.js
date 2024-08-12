import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash';
import StartingScreen from '../screens/StartingScreen/StartingScreen';
import JoinSignIn from '../screens/JoinSignIn/JoinSignIn';
import SignInWithEmail from '../screens/SignIn/SignInWithEmail';
import { SignupWithEmail } from '../screens/Signup';
import Marketplaces from '../screens/Marketplaces/Marketplaces';
import BottomBar from '../screens/BottomBar';
import MyKooie from '../screens/MyKooie/MyKooie';
import Setting from '../screens/Setting/Setting';
import AccountOverview from '../screens/AccountOverview/AccountOverview';
import ResentSearch from '../screens/ResentSearch/ResentSearch';
import HouseBooking from '../screens/HouseBooking/HouseBooking';
import HouseBookingInnerPage from '../screens/HouseBookingInnerPage/HouseBookingInnerPage';
import { AuthContext } from '../Contexts/authContext';
import RenterProfile from '../screens/RenterProfile/RenterProfile';
import About from '../screens/AboutMe/About';

const Stack = createNativeStackNavigator();



const Roots = () => {
    const [accessToken, setAccessToken] = useState(null);
    const { isAuthenticated, isLoading, logout, checkToken } = useContext(AuthContext);
    console.log({ isAuthenticated });


    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            checkToken()
            setAccessToken(null)
        } else {
            setAccessToken(isAuthenticated)

        }
    }, [isLoading, isAuthenticated]);

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }
    console.log({ accessToken });
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignInWithEmail'>
            {!accessToken ?
                <Stack.Group>
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name="StartingScreen" component={StartingScreen} />
                    <Stack.Screen name="JoinSignIn" component={JoinSignIn} />
                    <Stack.Screen name="SignInWithEmail" component={SignInWithEmail} />
                    <Stack.Screen name="SignupWithEmail" component={SignupWithEmail} />
                </Stack.Group>
                :
                <Stack.Group initialRouteName='BottomBar'>
                    <Stack.Screen name="Marketplaces" component={Marketplaces} />
                    <Stack.Screen name="BottomBar" component={BottomBar} />
                    <Stack.Screen name="MyKooie" component={MyKooie} />
                    <Stack.Screen name="Setting" component={Setting} />
                    <Stack.Screen name="AccountOverview" component={AccountOverview} />
                    <Stack.Screen name="ResentSearch" component={ResentSearch} />
                    <Stack.Screen name="HouseBooking" component={HouseBooking} />
                    <Stack.Screen name="HouseBookingInnerPage" component={HouseBookingInnerPage} />
                    <Stack.Screen name="RenterProfile" component={RenterProfile} />
                    <Stack.Screen name="About" component={About} />
                </Stack.Group>
            }

            {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
            {/* <Stack.Screen name="OtpScreen" component={OtpScreen} /> */}
        </Stack.Navigator>
    )
}

export default Roots

const styles = StyleSheet.create({})