import { ActivityIndicator, Alert, Image, TouchableOpacity, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import React, { useContext, useRef, useState, useEffect } from 'react';
import { appColors } from '../../utils/appColors';
import CheckBox from '@react-native-community/checkbox';
import Images from '../theme/Images';
import { BASE_URL } from '../../config/config';
import * as Keychain from 'react-native-keychain';
import { AuthContext } from '../../Contexts/authContext';
import validator from 'validator';

const SignInWithEmail = ({ navigation }) => {
  const { checkToken } = useContext(AuthContext);
  const inputEmailRef = useRef(null);
  const inputPassRef = useRef(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadRememberedData();
  }, []);

  const loadRememberedData = async () => {
    try {
      const emailData = await Keychain.getGenericPassword({ service: 'email' });
      const passwordData = await Keychain.getGenericPassword({ service: 'password' });

      if (emailData && passwordData) {
        setEmail(emailData.username);
        setPassword(passwordData.password);
        setToggleCheckBox(true);
      }
    } catch (error) {
      console.log('Error loading remembered data:', error);
    }
  };

  const validateInputs = () => {
    if (!validator.isEmail(isEmail)) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return false;
    }
    if (isPassword.length < 8) {
      Alert.alert("Weak password", "Password must be at least 8 characters long.");
      return false;
    }
    return true;
  };

  const submitLogin = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    const formdata = new FormData();
    formdata.append("email", isEmail);
    formdata.append("password", isPassword);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    try {
      const response = await fetch(`${BASE_URL}/login`, requestOptions);
      const result = await response.json();

      if (result.status === '200') {
        // Save tokens using Keychain
        await Keychain.setGenericPassword('accessToken', result?.access_token, { service: 'accessToken' });
        await Keychain.setGenericPassword('userID', JSON.stringify(result?.user_id), { service: 'userID' });

        // Remember credentials if the checkbox is checked
        if (toggleCheckBox) {
          await Keychain.setGenericPassword(isEmail, isPassword, { service: 'email' });
          await Keychain.setGenericPassword('password', isPassword, { service: 'password' });
        } else {
          // Clear remembered credentials if the checkbox is unchecked
          await Keychain.resetGenericPassword({ service: 'email' });
          await Keychain.resetGenericPassword({ service: 'password' });
        }

        checkToken();
        setLoading(false);
        Alert.alert(result?.message);
      } else {
        throw new Error(result?.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login Error:', error.message);
      Alert.alert("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}></Text>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Image resizeMode="cover" source={Images.kooieBlackLogo} />
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.signInText}>Sign in</Text>
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
          {loading ? <ActivityIndicator size={'small'} color={appColors.white} /> :
            <Text style={{ color: appColors.white, fontWeight: '700' }}> Sign In </Text>}
        </TouchableOpacity>

        <View style={styles.rememberContainer}>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              boxType={'square'}
              lineWidth={2}
              tintColors={{ true: 'red', false: 'red' }}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.textForgotStyle}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Pressable style={styles.footer} onPress={() => navigation.navigate('SignupWithEmail')}>
        <Text style={{ fontSize: 13, color: appColors.grey }}>Don't have an account? </Text>
        <Text style={{ fontSize: 14, color: appColors.lightRed, fontWeight: '700' }}>Signup</Text>
      </Pressable>
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
  signInText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: appColors.black,
    marginTop: 50,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 16,
  },
  checkBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: appColors.black,
  },
  footer: {
    backgroundColor: appColors.offWhite,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2
  }
});