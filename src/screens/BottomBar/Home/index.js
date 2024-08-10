import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { appColors } from '../../../utils/appColors';

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.containerStyle}>
      <Text>fgbhrgf</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: appColors.white,
    padding: 16,
    justifyContent: 'center',
  },
});
