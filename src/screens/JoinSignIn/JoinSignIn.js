import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { appColors } from '../../utils/appColors';
import Images from '../theme/Images';

const JoinSignIn = ({ navigation }) => {

    return (
        <View style={styles.containerStyle}>
            <View style={{ marginTop: 20, alignItems: 'center', flex: 1 }}>
                <Text style={{ color: appColors.black, fontWeight: '600', marginBottom: 20 }}>Join or sign in</Text>
                <Image
                    resizeMode="cover"
                    source={Images.Illustration_1}
                />
                <Text style={{ fontSize: 20, color: appColors.black, textAlign: 'center', fontWeight: '700', marginTop: 40 }}>Join or sign in</Text>
                <Text style={{ fontSize: 16, color: appColors.black, textAlign: 'center', marginTop: 14, letterSpacing: .5 }}>With Kooie you have everything at
                    your fingertips for when you’re ready
                    to make a move.
                </Text>
            </View>
            <TouchableOpacity style={styles.signInStyle} onPress={() => navigation.navigate('SignInWithEmail')} >
                <Text style={{ color: appColors.white, fontWeight: '700' }}> Sign In </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.signInStyle, { backgroundColor: appColors.red }]} onPress={() => navigation.navigate('SignupWithEmail')} >
                <Text style={{ color: appColors.white, fontWeight: '700' }}> Sign Up </Text>
            </TouchableOpacity>
        </View >
    );
};

export default JoinSignIn;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
        padding: 16,
    },
    signInStyle: {
        borderRadius: 24,
        backgroundColor: appColors.black,
        alignItems: 'center',
        padding: 16,
        width: '100%',
        marginBottom: 12,
    },
});
