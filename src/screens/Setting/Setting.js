import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { appColors } from '../../utils/appColors';
import BackIcon from '../../assets/svg/BackIcon';
import SettingWhiteIcon from '../../assets/svg/SettingWhiteIcon';
import ArrowRightIcon from '../../assets/svg/ArrowRightIcon';
import LogoutIcon from '../../assets/svg/LogoutIcon';
import * as Keychain from 'react-native-keychain';
import { AuthContext } from '../../Contexts/authContext';



const Setting = ({ navigation }) => {

    const { isAuthenticated, isLoading, logout, } = useContext(AuthContext);



    return (
        <View style={styles.containerStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                <TouchableOpacity style={{ width: 40, height: 40 }} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </TouchableOpacity>
                <Text style={styles.collectionStyle}>Setings    </Text>
                {/* <TouchableOpacity style={styles.settingIconStyle}>
                    <SettingWhiteIcon />
                </TouchableOpacity> */}
            </View>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: appColors.placeholderColor, fontSize: 18, fontWeight: '600' }}>Account</Text>

                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={styles.enquiredStyle} onPress={() => navigation.navigate('AccountOverview')}>
                            <Text style={{ fontSize: 16, color: appColors.black, flex: 1, fontWeight: '600' }}>Account overview</Text>
                            <View style={{ width: 24, height: 24 }}>
                                <ArrowRightIcon />
                            </View>
                        </TouchableOpacity>

                        {/* <View style={styles.enquiredStyle}>
                            <Text style={{ fontSize: 16, color: appColors.black, flex: 1, fontWeight: '600' }}>Notification settings</Text>
                            <View style={{ width: 24, height: 24 }}>
                                <ArrowRightIcon />
                            </View>
                        </View> */}
                    </View>
                </View>

                <View style={{ marginTop: 26 }}>
                    <Text style={{ color: appColors.placeholderColor, fontSize: 18, fontWeight: '600' }}>Feedback</Text>

                    <View style={{ marginTop: 10 }}>
                        <View style={styles.enquiredStyle}>
                            <Text style={{ fontSize: 16, color: appColors.black, flex: 1, fontWeight: '600' }}>Email your feedback</Text>
                            <View style={{ width: 24, height: 24 }}>
                                <ArrowRightIcon />
                            </View>
                        </View>

                        <View style={styles.enquiredStyle}>
                            <Text style={{ fontSize: 16, color: appColors.black, flex: 1, fontWeight: '600' }}>Rate us on the App Store</Text>
                            <View style={{ width: 24, height: 24 }}>
                                <ArrowRightIcon />
                            </View>
                        </View>
                    </View>
                </View>

                <Text style={{ fontWeight: '300', marginTop: 20, color: appColors.black }}>We’d love to hear your feedback, wether you’ve
                    got ideas on how we can improve - and would
                    really appreciate it if you rate us on the App Store.
                </Text>

                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                    <Text style={{ borderBottomWidth: 1, borderColor: appColors.black, color: appColors.black }}>Personal information collection statement</Text>
                    <View style={{ flex: 1 }} />
                </View>

                <View style={{ marginTop: 26 }}>
                    {/* <View style={styles.enquiredStyle}>
                        <Text style={{ fontSize: 16, color: appColors.black, flex: 1, fontWeight: '600' }}>Commercial property</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </View> */}

                    <View style={styles.enquiredStyle}>
                        <Text style={{ fontSize: 16, color: appColors.black, flex: 1, fontWeight: '600' }}>Privacy & terms</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={logout}>
                    <Text style={{ fontWeight: '600', color: appColors.black, fontSize: 16 }}>Sign out</Text>
                    <View style={{ marginLeft: 10 }}>
                        <LogoutIcon />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Setting;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
        paddingHorizontal: 16,
    },
    collectionStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: appColors.black,
    },
    settingIconStyle: {
        backgroundColor: appColors.red,
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    enquiredStyle: {
        flexDirection: 'row',
        paddingVertical: 18,
        borderBottomWidth: 1,
        alignItems: 'center',
        borderColor: appColors.lightGrey
    },
});
