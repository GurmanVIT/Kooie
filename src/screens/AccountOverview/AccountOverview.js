import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { appColors } from '../../utils/appColors';
import BackIcon from '../../assets/svg/BackIcon';
import SettingWhiteIcon from '../../assets/svg/SettingWhiteIcon';
import LogoutIcon from '../../assets/svg/LogoutIcon';
import MassageIcon from '../../assets/svg/MassageIcon';
import { AuthContext } from '../../Contexts/authContext';
import { BASE_URL } from '../../config/config';

const AccountOverview = ({ navigation }) => {

    const [loading, setLoading] = useState(false);
    const { userID, authToken } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState('')
    // console.log({ userInfo });

    useEffect(() => {
        getUserInfo()
    }, [])

    const getUserInfo = async () => {
        setLoading(true)
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);
        const formdata = new FormData();
        formdata.append("id", userID && userID || "");
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        try {
            const response = await fetch(`${BASE_URL}/get/userprofile`, requestOptions);
            let result = await response.json();
            if (result?.status === '200') {
                setUserInfo(result?.Userprofile)
            } else {
                alert(result?.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }



    return (
        <View style={styles.containerStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                <TouchableOpacity style={{ width: 40, height: 40 }} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </TouchableOpacity>
                <Text style={styles.collectionStyle}>Account overview</Text>
                {/* <View style={styles.settingIconStyle}>
                    <SettingWhiteIcon />
                </View> */}
            </View>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: appColors.placeholderColor, fontSize: 18, fontWeight: '600', }}>Account overview</Text>

                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ color: appColors.black, fontWeight: '600', fontSize: 16 }}>Profile Email</Text>
                        <View>
                            <Text style={styles.changeEmailStyle}>Change email</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 16 }}>
                        <View style={{ width: 24, height: 24 }}>
                            <MassageIcon />
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                            <Text style={{ color: appColors.black }}>{(userInfo?.email) && (userInfo?.email)}</Text>
                            {userInfo && <Text style={[{ fontSize: 12, marginTop: 4, color: 'green' }, (userInfo?.email_verification_status === 0) && { color: appColors.red }]}>{(userInfo?.email_verification_status) ? `Verified` : `unverified`}</Text>}
                        </View>
                    </View>

                    <Text style={{ marginTop: 20, color: appColors.black, fontSize: 16, fontWeight: '600' }}>Password</Text>
                    <Text style={{ marginTop: 6, color: appColors.black, }}>Looking to update your password? We’ve gone password-less. Simply enter your email address when you log in to receive your unique verification code. </Text>

                    <Text style={{ marginTop: 20, color: appColors.black, fontSize: 16, fontWeight: '600' }}>Sign out everywhere</Text>
                    <Text style={{ marginTop: 6, color: appColors.black, }}>Lost a device or signed in from a public computer? Sign out on all devices to protect your account from unauthorised access.</Text>

                    <View style={styles.signoutButtonStyle}>
                        <LogoutIcon />
                        <Text style={{ fontSize: 16, fontWeight: '600', color: appColors.black, marginLeft: 10 }}>Sign out on all devices</Text>
                    </View>

                    <Text style={{ color: appColors.red, fontWeight: '600', textAlign: 'center', fontSize: 16, marginTop: 20 }}>Delete account</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default AccountOverview;

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
    changeEmailStyle: {
        borderBottomWidth: 1,
        borderColor: appColors.black,
        color: appColors.black,
        fontWeight: '600',
        flex: 1
    },
    signoutButtonStyle: {
        marginTop: 16,
        flexDirection: 'row',
        width: "75%",
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        alignSelf: 'center',
        padding: 16,
        borderRadius: 35
    },
});
