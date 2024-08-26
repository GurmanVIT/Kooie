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
import RenterProfile from '../screens/RenterProfile/RenterProfile';
import About from '../screens/AboutMe/About';
import AddressHistory from '../screens/AddressHistroy/AddressHistory';
import Employment from '../screens/Employment/Employment';
import Income from '../screens/Income/Income';
import IdentityDocument from '../screens/IdentityDocument/IdentityDocument';
import EmergencyContact from '../screens/EmergencyContact/EmergencyContact';
import { PersonalDetails } from '../screens/editProfile';
import { AuthContext } from '../Contexts/authContext';
import { ForgotPassword } from '../screens/ForgotPassword';
import { Filters } from '../screens/HouseBooking';

const Stack = createNativeStackNavigator();



const Roots = () => {
    const [accessToken, setAccessToken] = useState(null);
    const { isAuthenticated, isLoading, logout, checkToken } = useContext(AuthContext);
    console.log("accessToken==>", accessToken);

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
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SplashScreen'>
            {!accessToken ?
                <Stack.Group>
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name="StartingScreen" component={StartingScreen} />
                    <Stack.Screen name="JoinSignIn" component={JoinSignIn} />
                    <Stack.Screen name="SignInWithEmail" component={SignInWithEmail} />
                    <Stack.Screen name="SignupWithEmail" component={SignupWithEmail} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                </Stack.Group>
                :
                <Stack.Group >
                    <Stack.Screen name="BottomBar" component={BottomBar} />
                    <Stack.Screen name="MyKooie" component={MyKooie} />
                    <Stack.Screen name="Setting" component={Setting} />
                    <Stack.Screen name="AccountOverview" component={AccountOverview} />
                    <Stack.Screen name="ResentSearch" component={ResentSearch} />
                    <Stack.Screen name="HouseBooking" component={HouseBooking} />
                    <Stack.Screen name="Filters" component={Filters} />
                    <Stack.Screen name="HouseBookingInnerPage" component={HouseBookingInnerPage} />
                    <Stack.Screen name="RenterProfile" component={RenterProfile} />
                    <Stack.Screen name="About" component={About} />
                    <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
                    <Stack.Screen name="AddressHistory" component={AddressHistory} />
                    <Stack.Screen name="Employment" component={Employment} />
                    <Stack.Screen name="Income" component={Income} />
                    <Stack.Screen name="IdentityDocument" component={IdentityDocument} />
                    <Stack.Screen name="EmergencyContact" component={EmergencyContact} />
                    {/* <Stack.Screen name="Marketplaces" component={Marketplaces} /> */}
                </Stack.Group>
            }

            {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
            {/* <Stack.Screen name="OtpScreen" component={OtpScreen} /> */}
        </Stack.Navigator>
    )
}

export default Roots

const styles = StyleSheet.create({})