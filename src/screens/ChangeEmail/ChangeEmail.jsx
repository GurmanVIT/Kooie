import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { appColors } from '../../utils/appColors'
import { ProfileHeader } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../Contexts/authContext'
import { moderateScale, scale } from 'react-native-size-matters'
import { BASE_URL } from '../../config/config'

const ChangeEmail = () => {
    const navigation = useNavigation();
    const { authToken, userID } = useContext(AuthContext);

    const [loading, setLoading] = useState(false)
    const [OTPloading, setOTPLoading] = useState(false)
    const [userInfo, setUserInfo] = useState('');
    const [isOTP, setIsOTP] = useState(null);
    const [newEmail, setNewEmail] = useState('')
    // console.log({ userID });


    useEffect(() => {
        userID && getUserInfo()
    }, [userID])

    const getUserInfo = async () => {
        setLoading(true)
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        let formdata = new FormData();
        formdata.append("id", userID);

        const requestOptions = { method: "POST", headers: myHeaders, body: formdata, };
        fetch(`${BASE_URL}/get/userprofile`, requestOptions).then((response) => response.json())
            .then(async (result) => {

                if (result.status === '200') {
                    setUserInfo(result?.Userprofile)
                    setLoading(false)
                } else {
                    Alert.alert(result?.message)
                    setLoading(false)

                }
            })
            .catch((error) => {
                console.error(error);
                setLoading(false)
            });

    }

    const sendOTP = async () => {

        if (!(userInfo?.email)) {
            Alert.alert('User not found!')
        }
        const formdata = new FormData();
        formdata.append("email", userInfo?.email);

        const requestOptions = {
            method: "POST",
            body: formdata,
        };
        setOTPLoading(true)
        fetch(`${BASE_URL}/verfy/email`, requestOptions).then((response) => response.json())
            .then((result) => {
                console.log(result?.otp)
                if (result?.status === "200") {
                    setOTPLoading(false)
                    TimeCheck()
                    alert(result?.message)
                } else {
                    alert(result?.message)
                }
            })
            .catch((error) => console.error(error.message));
    }

    const [timeLeft, setTimeLeft] = useState("00:00");
    const TimeCheck = async () => {
        let totalSeconds = 1 * 60;
        const formatTime = (seconds) => {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        };
        const intervalId = setInterval(() => {
            totalSeconds -= 1;
            if (totalSeconds >= 0) {
                setTimeLeft(formatTime(totalSeconds));
            } else {
                clearInterval(intervalId);
            }
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }

    const addNewEmail = async () => {
        if (!newEmail) {
            return Alert.alert('Please enter your new Email address!');
        }

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const formdata = new FormData();
        formdata.append("userid", userID);
        formdata.append("new_email", newEmail);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
        };

        try {
            const response = await fetch(`${BASE_URL}/change/email`, requestOptions);

            // Check if the response is OK (status 200-299)
            if (!response.ok) {
                const errorText = await response.json(); // Get the error text
                console.error('Error response:', errorText); // Log the error response
                return Alert.alert(`Error: ${response.status} - ${errorText}`);
            }

            const result = await response.json();
            // console.log({ result });

            if (result.status === '200') {
                Alert.alert(result?.message);
                setLoading(false);
            } else {
                Alert.alert(result?.message);
                setLoading(false);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            Alert.alert('An unexpected error occurred. Please try again later.');
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.root_}>
            <ProfileHeader navigation={navigation} title={'Change Email'} />

            <ScrollView style={styles.content_}>

                <View style={styles.input_section}>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='old email'
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                            value={userInfo?.email && userInfo?.email}
                            editable={false}
                        // onChangeText={(val) => setFirstName(val)}
                        />
                        <TouchableOpacity style={styles.verifyButton} onPress={sendOTP} disabled={!(timeLeft === "00:00")}>
                            {OTPloading ?
                                <ActivityIndicator size={'small'} color={appColors.white} /> :
                                <Text style={{ color: appColors.white, fontSize: 14, fontWeight: 'bold' }}>{timeLeft === "00:00" ? "Send OTP" : timeLeft}</Text>

                            }
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Enter OTP'
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                            value={isOTP}
                            maxLength={5}
                            keyboardType='number-pad'
                            onChangeText={(val) => setIsOTP(val)}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Enter New Email'
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                            value={newEmail}
                            keyboardType='email-address'
                            onChangeText={(val) => setNewEmail(val)}
                        />
                    </View>

                    <TouchableOpacity style={[styles.buttonStyle, (!newEmail || !isOTP) && { opacity: 0.5 }]} onPress={addNewEmail} disabled={!newEmail || !isOTP}>
                        <Text style={{ color: appColors.white, fontWeight: '700' }}>Save changes</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default ChangeEmail

const styles = StyleSheet.create({
    root_: {
        flex: 1,
        backgroundColor: appColors.white
    },
    content_: {
        paddingHorizontal: 18
    },
    top_section: {
        marginVertical: 20,
        gap: 5
    },
    text_light: {
        color: appColors.grey,
        fontSize: 13
    },
    text_20: {
        color: appColors.black,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input_section: {
        gap: 5
    },
    lebel_: {
        color: appColors.black,
        fontSize: 12,
        fontWeight: '700',
        left: 5
    },
    input_container: {
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        width: '100%',
        height: 45,
        borderRadius: 5,
        paddingHorizontal: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 8,
        backgroundColor: appColors.lightGrey,
        marginTop: 16,
        // marginHorizontal: 16,
        height: 45
    },
    input_: {
        color: appColors.black,
        width: '70%',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        paddingHorizontal: 10
    },
    button_: {
        backgroundColor: appColors.red,
        height: 45,
        borderRadius: 45 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: appColors.white,
        fontWeight: 'bold',
        fontSize: 14
    },
    text_16: {
        color: appColors.black,
        fontSize: 16,
        fontWeight: 'bold'
    },
    caln_icon: {
        width: scale(20),
        height: scale(20),
        marginRight: scale(8)
    },
    verifyButton: {
        width: '30%',
        backgroundColor: appColors.red,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    buttonStyle: {
        color: appColors.white,
        backgroundColor: appColors.red,
        padding: 16,
        borderRadius: 24,
        marginTop: 20,
        alignItems: 'center',
    },
})