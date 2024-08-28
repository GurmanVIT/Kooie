import { ActivityIndicator, Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../Contexts/authContext';
import { appColors } from '../../utils/appColors';
import Images from '../theme/Images';
import { BASE_URL } from '../../config/config';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = ({ }) => {
    const navigation = useNavigation()
    const { isAuthenticated, isLoading, checkToken } = useContext(AuthContext);


    const inputEmailRef = useRef(null);
    const inputPassRef = useRef(null);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [isEmail, setEmail] = useState("garry.jstech@gmail.com");
    const [isOTP, setOTP] = useState("12345");
    const [isPassword, setPassword] = useState("12345678");
    const [isConfirmPassword, setConfirmPassword] = useState("12345678");
    const [loading, setLoading] = useState(false)


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
    // console.log({ timeLeft });

    const submitForgot = async () => {
        const formdata = new FormData();
        formdata.append("email", isEmail);
        formdata.append("otp", isOTP);
        formdata.append("password", isPassword);
        formdata.append("confirm_password", isConfirmPassword);

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };

        setLoading(true)
        fetch(`${BASE_URL}/forgetpassword`, requestOptions).then((response) => response.json())
            .then(async (result) => {
                console.log(result);

                if (result.success === '200') {
                    navigation.goBack()
                    Alert.alert(result?.message)
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

        if (isEmail === undefined || isEmail === null || isEmail === '') {
            return Alert.alert('Please enter your email!')
        }


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
                    Alert.alert(result?.message)
                } else {
                    Alert.alert(result?.message)
                }
            })
            .catch((error) => console.error(error.message));
    }

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}></Text>
            <View style={{ alignItems: 'center', marginTop: 50 }}>
                <Image resizeMode="cover" source={Images.kooieBlackLogo} />
            </View>

            <View style={styles.viewStyle}>
                <Text style={styles.label}>Forgot password</Text>
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
                    placeholder="New Password"
                    placeholderTextColor={appColors.placeholderColor}
                    style={styles.inputStyle}
                    value={isPassword}
                    onChangeText={(val) => setPassword(val)}
                    secureTextEntry
                />
                <TextInput
                    ref={inputPassRef}
                    placeholder="Confirm Password"
                    placeholderTextColor={appColors.placeholderColor}
                    style={styles.inputStyle}
                    value={isConfirmPassword}
                    onChangeText={(val) => setConfirmPassword(val)}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.buttonStyle}
                    onPress={submitForgot} disabled={loading}
                >
                    {loading ? <>
                        <ActivityIndicator size={'small'} color={appColors.white} />
                    </> :
                        <Text style={{ color: appColors.white, fontWeight: '700' }}>Submit</Text>}
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: appColors.black }]} onPress={() => navigation.goBack()}>
                    <Text style={{ color: appColors.white, fontWeight: '700' }}>Go back</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}

export default ForgotPassword

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
    label: {
        textAlign: 'center',
        fontSize: 18, fontWeight: '600',
        color: appColors.black,
        marginTop: 50
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
})