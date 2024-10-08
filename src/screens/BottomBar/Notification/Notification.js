import { Alert, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { appColors } from '../../../utils/appColors';
import NotificationBottomIcon from '../../../assets/svg/NotificationBottomIcon';
import messaging from '@react-native-firebase/messaging';
import { useFocusEffect } from '@react-navigation/native';





const Notification = () => {
    const [notyToken, setNotyToken] = useState(null);
    console.log({ notyToken });

    useFocusEffect(
        useCallback(() => {
            requestUserPermission()
        }, [])
    )




    useEffect(() => {

        // Handle incoming messages while the app is in the foreground
        const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
        // Handle notifications when the app is opened from a background state
        const unsubscribeOnNotificationOpenedApp = messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
                'Notification caused app to open from background state:',
                remoteMessage.notification
            );
        });
        // Register background handler
        // messaging().setBackgroundMessageHandler(async remoteMessage => {
        //     console.log('Message handled in the background!', remoteMessage);
        // });

        // Cleanup on unmount
        return () => {
            unsubscribeOnMessage();
            unsubscribeOnNotificationOpenedApp();
        };
    }, []);

    // Request user permission for notifications
    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled = (authStatus === messaging.AuthorizationStatus.AUTHORIZED) || (authStatus === messaging.AuthorizationStatus.PROVISIONAL);

        if (enabled) {
            console.log('Authorization status:', authStatus, enabled);
            // Get the FCM token
            messaging().getToken().then(token => {
                setNotyToken(token) // Send this token to your server
            }).catch(error => {
                console.error('Error getting FCM token:', error);
            });

            // Handle notifications when the app is in a quit state
            messaging().getInitialNotification().then(remoteMessage => {
                if (remoteMessage) {
                    console.log('Notification caused app to open from quit state:', remoteMessage.notification);
                }
            }).catch(error => { console.error('Error handling initial notification:', error); });
        } else {
            console.log('Authorization status:', authStatus, 'Notifications are not enabled.');
        }
    };








    return (
        <View style={styles.containerStyle}>
            <Text style={styles.collectionStyle}>Notification</Text>

            {notyToken ?
                <>
                    <View style={{ paddingVertical: 20, }}>
                        <FlatList
                            data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]}
                            contentContainerStyle={{ gap: 10, paddingBottom: 30 }}
                            showsVerticalScrollIndicator={false}
                            renderItem={(() => {
                                return (
                                    <View style={{ backgroundColor: appColors.borderColor, height: 60, width: '100%', borderRadius: 8, padding: 10 }}>
                                        <Text style={{ color: appColors.black, fontSize: 16, fontWeight: 'bold' }}>HELLO Kooie's first user</Text>
                                        <Text style={{ color: appColors.black, fontSize: 13, opacity: 0.6 }}>This is your first notifation </Text>
                                    </View>
                                )
                            })}
                        />

                    </View>
                </> :
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center', color: appColors.black, marginTop: 30 }}>Start getting instant updates</Text>
                    <Text style={{ fontSize: 16, fontWeight: '300', color: appColors.black, marginTop: 12, textAlign: 'center' }}>
                        We’ll keep you up to date when something happens
                    </Text>

                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <TouchableOpacity style={styles.searchButton} onPress={() => requestUserPermission()}>
                            <View style={{ width: 24, height: 24 }}>
                                <NotificationBottomIcon stroke={appColors.white} />
                            </View>
                            <Text style={{ fontWeight: '600', marginTop: 2, color: appColors.white, marginLeft: 8, }}>Allow notifications</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
        paddingHorizontal: 16,
        // alignItems: 'center'
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
