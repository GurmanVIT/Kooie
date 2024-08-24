import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { appColors } from '../../utils/appColors';
import Images from '../theme/Images';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('JoinSignIn');
    }, 3000);
  }, []);

  return (
    <View style={styles.containerStyle}>
      <View style={styles.logoStyle}>
        <Image
          resizeMode="cover"
          source={Images.kooieLogo}
        />
      </View>

      <Text style={styles.textStyle}>Personalised Search platform</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: appColors.black,
    flex: 1,
  },
  logoStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: appColors.grey,
    bottom: 40,
    alignSelf: 'center',
    fontWeight: '800',
  },
});
