import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { BASE_URL } from '../../config/config';
import Images from '../theme/Images';
import { appColors } from '../../utils/appColors';
import { useNavigation } from '@react-navigation/native';

const SignupWithEmail = () => {
    const navigation = useNavigation();
    const inputFirstRef = useRef(null);
    const inputLastRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputPassRef = useRef(null);
    const inputConfirmPassRef = useRef(null);
    const inputAddressRef = useRef(null);

    const [firstName, setFirstName] = useState('Sam');
    const [LastName, setLastName] = useState('Bahadur');
    const [isEmail, setEmail] = useState("sambahadur@yopmail.com");
    const [isPassword, setPassword] = useState("12345678");
    const [isConfirmPassword, setConfirmPassword] = useState("12345678");
    const [isAddress, setAddress] = useState('Chandigarh');
    const [isOTP, setOTP] = useState(null);

    const submitRegister = async () => {

        const formdata = new FormData();
        formdata.append("first_name", firstName);
        formdata.append("last_name", LastName);
        formdata.append("email", isEmail);
        formdata.append("password", isPassword);
        formdata.append("password_confirmation", isConfirmPassword);
        formdata.append("address", isAddress);
        formdata.append("otp", isOTP);

        try {
            const response = await fetch(`${BASE_URL}/register`, {
                method: "POST",
                body: formdata,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const text = await response.text();
            if (!text) {
                throw new Error('Empty response from server');
            }
            console.log(text);

            const result = JSON.parse(text);
            console.log({ result });

            if (result?.status === '200') {
                Alert.alert(result?.message);
                navigation.navigate('SignInWithEmail');
            } else {
                Alert.alert(result?.message);
            }
        } catch (error) {
            console.log('Error:', error.message);
            Alert.alert('Registration failed', error.message);
        }


    };

    const sendOTP = async () => {
        const formdata = new FormData();
        formdata.append("email", isEmail);

        const requestOptions = {
            method: "POST",
            body: formdata,
        };

        fetch(`${BASE_URL}/verfy/email`, requestOptions).then((response) => response.json())
            .then((result) => {
                console.log(result?.otp)
                if (result?.status === "200") {
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



    return (
        <View style={styles.containerStyle}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.textStyle}></Text>
                <View style={{ alignItems: 'center', marginTop: 50 }}>
                    <Image resizeMode="cover" source={Images.kooieBlackLogo} />
                </View>
                <View style={styles.viewStyle}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600', color: appColors.black, marginTop: 50 }}>Sign up</Text>

                    <TextInput
                        ref={inputFirstRef}
                        style={styles.inputStyle}
                        placeholder="First Name"
                        placeholderTextColor={appColors.placeholderColor}
                        value={firstName}
                        onChangeText={(val) => setFirstName(val)}
                    />
                    <TextInput
                        ref={inputLastRef}
                        style={styles.inputStyle}
                        placeholder="Last Name"
                        placeholderTextColor={appColors.placeholderColor}
                        value={LastName}
                        onChangeText={(val) => setLastName(val)}
                    />
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
                        <TextInput
                            ref={inputEmailRef}
                            style={[styles.inputStyle, { width: '70%', marginHorizontal: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0 }]}
                            placeholder="Email"
                            placeholderTextColor={appColors.placeholderColor}
                            value={isEmail}
                            onChangeText={(val) => setEmail(val)}
                        />
                        <TouchableOpacity style={styles.verifyButton} onPress={sendOTP} disabled={!(timeLeft === "00:00")}>
                            <Text style={{ color: appColors.white, fontSize: 14, fontWeight: 'bold' }}>{timeLeft === "00:00" ? "Send OTP" : timeLeft}</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        ref={inputEmailRef}
                        style={styles.inputStyle}
                        placeholder="OTP"
                        placeholderTextColor={appColors.placeholderColor}
                        value={isOTP}
                        onChangeText={(val) => setOTP(val)}
                    />
                    <TextInput
                        ref={inputPassRef}
                        placeholder="Password"
                        placeholderTextColor={appColors.placeholderColor}
                        style={styles.inputStyle}
                        value={isPassword}
                        onChangeText={(val) => setPassword(val)}
                        secureTextEntry
                    />
                    <TextInput
                        ref={inputConfirmPassRef}
                        placeholder="Confirm Password"
                        placeholderTextColor={appColors.placeholderColor}
                        style={styles.inputStyle}
                        value={isConfirmPassword}
                        onChangeText={(val) => setConfirmPassword(val)}
                        secureTextEntry
                    />
                    <TextInput
                        ref={inputAddressRef}
                        style={styles.inputStyle}
                        placeholder="Address"
                        placeholderTextColor={appColors.placeholderColor}
                        value={isAddress}
                        onChangeText={(val) => setAddress(val)}
                    />

                    <TouchableOpacity style={styles.buttonStyle} onPress={submitRegister} >
                        <Text style={{ color: appColors.white, fontWeight: '700' }}> Sign up </Text>
                    </TouchableOpacity>


                </View>
                <Pressable style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2 }} onPress={() => navigation.navigate('SignInWithEmail')}>
                    <Text style={{ fontSize: 13, color: appColors.grey }}>Already have an account? </Text>
                    <Text style={{ fontSize: 14, color: appColors.lightRed, fontWeight: '700' }}>Sign In</Text>
                </Pressable>
            </ScrollView>
            {/* <TouchableOpacity style={styles.signInStyle} onPress={() => navigation.navigate('SignIn')}>
          <Text style={{ color: appColors.white, fontWeight: '700' }}> Signup </Text>
        </TouchableOpacity> */}
        </View>
    );
};

export default SignupWithEmail

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: appColors.white,
        flex: 1,
    },
    textStyle: {
        color: appColors.black,
        alignSelf: 'center',
        marginTop: 30,
        fontWeight: '600',
    },
    textForgotStyle: {
        color: appColors.black,
        alignSelf: 'center',
        fontWeight: '500',
    },
    viewStyle: {
        flex: 1,
    },
    inputStyle: {
        marginHorizontal: 16,
        borderRadius: 8,
        backgroundColor: appColors.lightGrey,
        marginTop: 16,
        paddingHorizontal: 16,
        color: appColors.black,
        height: 45
    },
    buttonStyle: {
        color: appColors.white,
        backgroundColor: appColors.red,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 24,
        marginTop: 20,
        alignItems: 'center',
    },
    signInStyle: {
        marginHorizontal: 16,
        borderRadius: 24,
        borderColor: appColors.black,
        backgroundColor: appColors.black,
        borderWidth: 1,
        alignItems: 'center',
        padding: 16,
        bottom: 36,
    },
    verifyButton: {
        width: '30%',
        backgroundColor: appColors.red,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    }
});