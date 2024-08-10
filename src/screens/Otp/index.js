import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { appColors } from '../../utils/appColors';
import OTPTextView from 'react-native-otp-textinput';
import CheckBox from '@react-native-community/checkbox';
import Images from '../theme/Images';

const OtpScreen = ({ navigation }) => {

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
      <View style={styles.logoStyle}>

        <Text style={{ fontSize: 16, color: appColors.black, textAlign: 'center', marginTop: 30, fontWeight: '600' }}>Check your phone for a code</Text>
        <Text style={{ marginTop: 10, color: appColors.black }}>Check your phone for a 6-digit code and
          enter it below.</Text>
        <OTPTextView
          containerStyle={{ marginTop: 20 }}
          textInputStyle={styles.roundedTextInput}
          tintColor={appColors.black}
          offTintColor={appColors.white}
        />

      </View>

      <View style={{
        flex: 1
      }}>
        <TouchableOpacity
          style={[styles.buttonStyle, { marginTop: 14 }]}
          onPress={() => navigation.navigate('MyKooie')}>
          <Text style={{ color: appColors.white, fontWeight: '700' }}>Submit</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
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
      </View>

      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: appColors.black }]}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={{ color: appColors.white, fontWeight: '700' }}>Sign in with Phone</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: appColors.white,
    flex: 1,
  },
  logoStyle: {
    alignItems: 'center',
  },
  textStyle: {
    color: appColors.black,
    alignSelf: 'center',
    marginTop: 30,
    fontWeight: '600',
  },
  inputStyle: {
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: appColors.inputBackground,
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  buttonStyle: {
    color: appColors.black,
    backgroundColor: appColors.red,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 24,
    marginBottom: 20,
    alignItems: 'center',
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderBottomWidth: 1,
    color: appColors.black,
    borderColor: appColors.lightGrey,
    backgroundColor: appColors.lightGrey,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
    paddingVertical: 20,
    borderWidth: 1,
  },
});
