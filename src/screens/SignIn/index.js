import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { appColors } from '../../utils/appColors';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';
import Images from '../theme/Images';

const SignInWithPhone = ({ navigation }) => {

  const [phoneNumber, setPhoneNumber] = useState('1');
  const [countryCode, setCountryCode] = useState('IN');

  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  const toggleCountryPicker = () => {
    setCountryPickerVisible(!countryPickerVisible);
  };

  const onSelectCountry = country => {
    setCountryCode(country.cca2);
    const callingCode = country.callingCode[0];
    console.log('callingCode ==>', callingCode);
    setPhoneNumber(callingCode);

    setCountryPickerVisible(false);
  };
  useEffect(() => {
    console.log('Phone number ==>', phoneNumber);
  }, [phoneNumber]);

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Sign in with Phone</Text>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Image resizeMode="cover" source={Images.kooieBlackLogo} />
      </View>
      <View style={styles.logoStyle}>

        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600', color: appColors.black }}>Sign in</Text>
        <View
          style={{ backgroundColor: appColors.lightGrey, marginHorizontal: 16, padding: 15, borderRadius: 8, marginTop: 30, }}>
          <PhoneInput
            onPressFlag={toggleCountryPicker}
            initialCountry={countryCode}
            initialValue={phoneNumber}
            value={phoneNumber}
            onChangePhoneNumber={number => setPhoneNumber(number)}
            textStyle={{ color: appColors.black }}
          />
        </View>

        {countryPickerVisible && (
          <CountryPicker
            withFilter
            withFlagButton={false}
            withCountryNameButton={false}
            onSelect={onSelectCountry}
            onClose={() => setCountryPickerVisible(false)}
            visible={countryPickerVisible}
            containerButtonStyle={styles.countryPickerButton}
            closeButtonImageStyle={styles.countryPickerCloseButton}
          />
        )}

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('OtpScreen')}>
          <Text style={{ color: appColors.white, fontWeight: '700' }}>
            Send Code
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.signInStyle}
        onPress={() => {
          navigation.navigate('SignInWithEmail');
        }}>
        <Text style={{ color: appColors.white, fontWeight: '700' }}>
          Sign in with Email
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInWithPhone;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: appColors.white,
    flex: 1,
  },
  logoStyle: {
    flex: 1,
    marginTop: 50
  },
  textStyle: {
    color: appColors.black,
    alignSelf: 'center',
    marginTop: 30,
    fontWeight: '600',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: appColors.inputColor,
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
  phoneInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  countryPickerButton: {
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  countryPickerCloseButton: {
    width: 20,
    height: 20,
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
