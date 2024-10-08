import { ActivityIndicator, Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { BASE_URL } from '../../config/config';
import Images from '../theme/Images';
import { appColors } from '../../utils/appColors';
import { useNavigation } from '@react-navigation/native';
import { IMAGES } from '../../assets';
import validator from 'validator';



const SignupWithEmail = () => {
    const navigation = useNavigation();
    const inputFirstRef = useRef(null);
    const inputLastRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputPassRef = useRef(null);
    const inputConfirmPassRef = useRef(null);
    const inputAddressRef = useRef(null);

    const [loading, setLoading] = useState(false)
    const [OTPloading, setOTPLoading] = useState(false)
    const [firstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [isEmail, setEmail] = useState("");
    const [isPassword, setPassword] = useState("");
    const [isPasswordShow, setPasswordShow] = useState(true);
    const [isConfirmPassword, setConfirmPassword] = useState("");
    const [isConfirmPasswordShow, setConfirmPasswordShow] = useState(true);
    const [isAddress, setAddress] = useState('');
    const [isOTP, setOTP] = useState(null);

    const [emailDisable, setEmailDisable] = useState(true)

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
        return regex.test(password);
    };

    const submitRegister = async () => {
        const firstNameSanitized = validator.escape(firstName.trim());
        const lastNameSanitized = validator.escape(LastName.trim());
        const emailSanitized = validator.normalizeEmail(isEmail);
        const addressSanitized = validator.escape(isAddress.trim());

        // Frontend validations
        if (!validator.isAlpha(firstNameSanitized) || !validator.isAlpha(lastNameSanitized)) {
            Alert.alert('Error', 'First and last name must contain only alphabetic characters.');
            return;
        }
        if (!validator.isEmail(emailSanitized)) {
            Alert.alert('Error', 'Invalid email address.');
            return;
        }
        if (!validatePassword(isPassword)) {
            Alert.alert('Error', 'Password must be at least 8 characters, include a number, an uppercase, lowercase letter, and a special character.');
            return;
        }
        if (isPassword !== isConfirmPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }
        if (!validator.isNumeric(isOTP)) {
            Alert.alert('Error', 'OTP must be a numeric value.');
            return;
        }

        const formdata = new FormData();
        formdata.append("first_name", firstNameSanitized);
        formdata.append("last_name", lastNameSanitized);
        formdata.append("email", emailSanitized);
        formdata.append("password", isPassword);  // Hash if needed
        formdata.append("password_confirmation", isConfirmPassword);
        formdata.append("address", addressSanitized);
        formdata.append("otp", isOTP);

        try {
            setLoading(true)
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

            const result = JSON.parse(text);
            if (result?.status === '200') {
                Alert.alert('Success', result?.message);
                setLoading(false);
                navigation.navigate('SignInWithEmail');
            } else {
                throw new Error(result?.message || 'Registration failed');
            }
        } catch (error) {
            console.log('Error:', error.message);
            Alert.alert('Registration failed', error.message);
        } finally {
            setLoading(false);
        }


    };

    const sendOTP = async () => {
        const formdata = new FormData();
        formdata.append("email", isEmail);

        const requestOptions = {
            method: "POST",
            body: formdata,
        };
        setOTPLoading(true)
        fetch(`${BASE_URL}/verfy/email`, requestOptions).then((response) => response.json())
            .then((result) => {
                console.log(result?.otp)
                if (result?.status === "200") {
                    setEmailDisable(false)
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
                setEmailDisable(true)
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
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            ref={inputEmailRef}
                            style={[styles.inputStyle, { width: '70%', marginHorizontal: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0 }]}
                            placeholder="Email"
                            placeholderTextColor={appColors.placeholderColor}
                            value={isEmail}
                            onChangeText={(val) => setEmail(val)}
                            editable={emailDisable}
                        />
                        <TouchableOpacity style={styles.verifyButton} onPress={sendOTP} disabled={!(timeLeft === "00:00")}>
                            {OTPloading ?
                                <ActivityIndicator size={'small'} color={appColors.white} /> :
                                <Text style={{ color: appColors.white, fontSize: 14, fontWeight: 'bold' }}>{timeLeft === "00:00" ? "Send OTP" : timeLeft}</Text>

                            }
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        ref={inputEmailRef}
                        style={styles.inputStyle}
                        placeholder="OTP"
                        placeholderTextColor={appColors.placeholderColor}
                        value={isOTP}
                        maxLength={5}
                        onChangeText={(val) => setOTP(val)}
                    />
                    <View style={styles.inputContainer}>

                        <TextInput
                            ref={inputPassRef}
                            placeholder="Password"
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                            value={isPassword}
                            onChangeText={(val) => setPassword(val)}
                            secureTextEntry={isPasswordShow}
                        />
                        <TouchableOpacity style={styles.eyeBtn} onPress={() => setPasswordShow(!isPasswordShow)}>
                            <Image source={isPasswordShow ? IMAGES.hideEye : IMAGES.showEye} style={{ width: 24, height: 24 }} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            ref={inputConfirmPassRef}
                            placeholder="Confirm Password"
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                            value={isConfirmPassword}
                            onChangeText={(val) => setConfirmPassword(val)}
                            secureTextEntry={isConfirmPasswordShow}
                        />
                        <TouchableOpacity style={styles.eyeBtn} onPress={() => setConfirmPasswordShow(!isConfirmPasswordShow)}>
                            <Image source={isConfirmPasswordShow ? IMAGES.hideEye : IMAGES.showEye} style={{ width: 24, height: 24 }} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        ref={inputAddressRef}
                        style={styles.inputStyle}
                        placeholder="Address"
                        placeholderTextColor={appColors.placeholderColor}
                        value={isAddress}
                        onChangeText={(val) => setAddress(val)}
                    />


                    <TouchableOpacity style={[styles.buttonStyle, (!firstName || !LastName || !isAddress || !isEmail || !isPassword || !isConfirmPassword || !isOTP) && { opacity: 0.5 }]} onPress={submitRegister} disabled={!firstName || !LastName || !isAddress || !isEmail || !isPassword || !isConfirmPassword || !isOTP}>
                        <Text style={{ color: appColors.white, fontWeight: '700' }}>Sign up</Text>
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
        paddingHorizontal: 16
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
        width: '85%',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        paddingHorizontal: 10
    },
    eyeBtn: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        borderRadius: 8,
        backgroundColor: appColors.lightGrey,
        marginTop: 16,
        color: appColors.black,
        height: 45,
        paddingHorizontal: 10
    },
    buttonStyle: {
        color: appColors.white,
        backgroundColor: appColors.red,
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