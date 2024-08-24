import { ActivityIndicator, Alert, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import { appColors } from '../../utils/appColors';
import CheckBox from '@react-native-community/checkbox';
import Images from '../theme/Images';
import { BASE_URL } from '../../config/config';
import * as Keychain from 'react-native-keychain';
import { AuthContext } from '../../Contexts/authContext';




const SignInWithEmail = ({ navigation }) => {
  const { isAuthenticated, isLoading, checkToken } = useContext(AuthContext);


  const inputEmailRef = useRef(null);
  const inputPassRef = useRef(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isEmail, setEmail] = useState("rajbahadur@yopmail.com");
  const [isPassword, setPassword] = useState("12345678");
  const [loading, setLoading] = useState(false)



  const submitLogin = async () => {

    setLoading(true)
    const formdata = new FormData();
    formdata.append("email", isEmail);
    formdata.append("password", isPassword);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    fetch(`${BASE_URL}/login`, requestOptions).then((response) => response.json())
      .then(async (result) => {
        console.log(result);

        if (result.status === '200') {
          await Keychain.setGenericPassword('accessToken', result?.access_token, { service: 'accessToken' });
          await Keychain.setGenericPassword('userID', JSON.stringify(result?.user_id), { service: 'userID' });

          Alert.alert(result?.message)
          checkToken()
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


  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}></Text>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Image resizeMode="cover" source={Images.kooieBlackLogo} />
      </View>
      <View style={styles.viewStyle}>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600', color: appColors.black, marginTop: 50 }}>Sign in</Text>
        <TextInput
          ref={inputEmailRef}
          style={styles.inputStyle}
          placeholder="Email"
          placeholderTextColor={appColors.placeholderColor}
          value={isEmail}
          onChangeText={(val) => setEmail(val)}
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

        <TouchableOpacity style={styles.buttonStyle} onPress={submitLogin} disabled={loading}>
          {loading ? <>
            <ActivityIndicator size={'small'} color={appColors.white} />
          </> :
            <Text style={{ color: appColors.white, fontWeight: '700' }}> Sign In </Text>}
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 16, }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              boxType={'square'}
              lineWidth={2}
              tintColors={{ true: 'red', false: 'red' }}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={{ color: appColors.black }}>Remember Me</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.textForgotStyle}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Pressable style={{ backgroundColor: appColors.offWhite, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2 }} onPress={() => navigation.navigate('SignupWithEmail')}>
        <Text style={{ fontSize: 13, color: appColors.grey }}>Don't have an account? </Text>
        <Text style={{ fontSize: 14, color: appColors.lightRed, fontWeight: '700' }}>Signup</Text>
      </Pressable>
      {/* <TouchableOpacity style={styles.signInStyle} onPress={() => navigation.navigate('SignIn')}>
        <Text style={{ color: appColors.white, fontWeight: '700' }}> Signup </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default SignInWithEmail;

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
    color: appColors.black
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
});
