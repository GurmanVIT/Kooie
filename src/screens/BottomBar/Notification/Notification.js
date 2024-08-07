import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { appColors } from '../../../utils/appColors';
import NotificationBottomIcon from '../../../assets/svg/NotificationBottomIcon';

const Notification = () => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.collectionStyle}>Notification</Text>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center', color: appColors.black, marginTop: 30 }}>Start getting instant updates</Text>
                <Text style={{ fontSize: 16, fontWeight: '300', color: appColors.black, marginTop: 12, textAlign: 'center' }}>
                    We’ll keep you up to date when something happens
                </Text>

                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <View style={styles.searchButton}>
                        <View style={{ width: 24, height: 24 }}>
                            <NotificationBottomIcon stroke={appColors.white} />
                        </View>
                        <Text style={{ fontWeight: '600', marginTop: 2, color: appColors.white, marginLeft: 8, }}>Allow notifications</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    collectionStyle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: appColors.black,
        marginTop: 16
    },
    searchButton: {
        backgroundColor: appColors.red,
        borderRadius: 35,
        paddingHorizontal: 30,
        paddingVertical: 16,
        flexDirection: 'row',
    },
});
