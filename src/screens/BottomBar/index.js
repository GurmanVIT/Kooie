import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Tabs from '../../navigations/tabs';
import { appColors } from '../../utils/appColors';

const BottomBar = () => {
  return (
    <View style={styles.containerStyle}>
      <Tabs />
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: appColors.white,
    flex: 1,
  },
});