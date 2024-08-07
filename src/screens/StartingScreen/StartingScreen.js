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

const StartingScreen = ({ navigation }) => {

    return (
        <View style={styles.containerStyle}>
            <View style={{ marginTop: 20, alignItems: 'center', flex: 1 }}>
                <Image
                    resizeMode="cover"
                    source={Images.Illustration}
                />
                <Text style={{ fontSize: 16, color: appColors.black, textAlign: 'center', fontWeight: '600', marginVertical: 20 }}>So we can help you find your way, what are you looking to do?</Text>

                <TouchableOpacity
                    style={styles.signInStyle}
                >
                    <Text style={{ color: appColors.white, fontWeight: '700' }}>
                        Buy
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.signInStyle}
                >
                    <Text style={{ color: appColors.white, fontWeight: '700' }}>
                        Sell
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.signInStyle}
                >
                    <Text style={{ color: appColors.white, fontWeight: '700' }}>
                        Rent
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.propertyStyle}
                >
                    <Text style={{ color: appColors.black, fontWeight: '700' }}>
                        Monitor my property
                    </Text>
                </TouchableOpacity>

                <Text style={{ marginTop: 20, color: appColors.grey, fontWeight: '600' }}>Just look around</Text>

            </View>

            <TouchableOpacity
                style={{
                    borderRadius: 24,
                    backgroundColor: appColors.red,
                    borderColor: appColors.red,
                    borderWidth: 1,
                    alignItems: 'center',
                    padding: 16,
                    width: '100%',
                    marginBottom: 12,
                }}
                onPress={() => navigation.navigate('JoinSignIn')}
            >
                <Text style={{ color: appColors.white, fontWeight: '700', }}>
                    Next
                </Text>
            </TouchableOpacity>

        </View >
    );
};

export default StartingScreen;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
        padding: 16,
    },
    signInStyle: {
        borderRadius: 24,
        borderColor: appColors.black,
        backgroundColor: appColors.black,
        borderWidth: 1,
        alignItems: 'center',
        padding: 16,
        width: '100%',
        marginBottom: 12,
    },
    propertyStyle: {
        marginHorizontal: 16,
        borderRadius: 24,
        borderColor: appColors.grey,
        borderWidth: 1,
        alignItems: 'center',
        padding: 16,
        width: '100%',
        marginBottom: 12,
    },
});
