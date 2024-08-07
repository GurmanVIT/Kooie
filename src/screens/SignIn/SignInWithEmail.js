import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { appColors } from '../../utils/appColors';
import CheckBox from '@react-native-community/checkbox';
import Images from '../theme/Images';

const SignInWithEmail = ({ navigation }) => {

  const inputEmailRef = useRef(null);
  const inputPassRef = useRef(null);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Sign in with Phone</Text>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Image
          resizeMode="cover"
          source={Images.kooieBlackLogo}
        />
      </View>
      <View style={styles.viewStyle}>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600', color: appColors.black, marginTop: 50 }}>Sign in</Text>
        <TextInput
          ref={inputEmailRef}
          style={
            styles.inputStyle}
          placeholder="Email"
          placeholderTextColor={appColors.placeholderColor}
        />
        <TextInput
          ref={inputPassRef}
          placeholder="Password"
          placeholderTextColor={appColors.placeholderColor}
          style={
            styles.inputStyle
          }
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('StartingScreen')}
        >
          <Text style={{ color: appColors.white, fontWeight: '700' }}>
            Sign In
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            marginHorizontal: 16,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
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
          <View>
            <Text style={styles.textForgotStyle}>Forgot Password?</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.signInStyle}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={{ color: appColors.white, fontWeight: '700' }}>
          Sign in with Phone
        </Text>
      </TouchableOpacity>
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
