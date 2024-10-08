import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { appColors } from '../../utils/appColors';
import ArrowRightIcon from '../../assets/svg/ArrowRightIcon';
import { ProfileFooter, ProfileHeader } from '../../components';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const RenterProfile = ({ }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.containerStyle}>
            <ProfileHeader navigation={navigation} title={'Profile'} />
            <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.headStyle}>Renter Profile</Text>
                    <Text style={{ marginTop: 6, color: appColors.black, fontWeight: '300' }}>Create your Renter Profile once and reuse it for all your applications</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 10, color: appColors.black }}>Personal </Text>
                    <Text style={{ marginVertical: 6, color: appColors.black, fontWeight: '300' }}>Details to help property managers validate who you are and assess your identity, employment and income. </Text>

                    <TouchableOpacity style={styles.enquiredStyle} onPress={() => navigation.navigate('PersonalDetails')}>
                        <Text style={{ color: appColors.black, flex: 1, }}>Personal details</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.enquiredStyle} onPress={() => navigation.navigate('About')}>
                        <Text style={{ color: appColors.black, flex: 1, }}>About me</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.enquiredStyle} onPress={() => navigation.navigate('AddressHistory')}>
                        <Text style={{ color: appColors.black, flex: 1, }}>Address history</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity style={styles.enquiredStyle} onPress={() => navigation.navigate('Employment')}>
                        <Text style={{ color: appColors.black, flex: 1, }}>Employment</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity style={styles.enquiredStyle} onPress={() => navigation.navigate('Income')}>
                        <Text style={{ color: appColors.black, flex: 1, }}>Income</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity style={styles.enquiredStyle} onPress={() => navigation.navigate('IdentityDocument')}>
                        <Text style={{ color: appColors.black, flex: 1, }}>Identity documents</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity style={styles.enquiredStyle} onPress={() => navigation.navigate('EmergencyContact')}>
                        <Text style={{ color: appColors.black, flex: 1, }}>Emergency contact</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity style={styles.enquiredStyle} onPress={() => navigation.navigate('')}>
                        <View style={{ width: '93%' }}>
                            <Text style={{ color: appColors.black, flex: 1, }}>Tenant check (recommended)</Text>
                            <Text style={{ color: appColors.placeholderColor, fontWeight: '300', fontSize: 12, }}>Give yourself a better chance. Help property managers evaluate you faster.</Text>
                        </View>

                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity> */}

                    {/* <Text style={[styles.headStyle, { marginTop: 20 }]}>Household</Text>
                    <Text style={{ marginTop: 6, color: appColors.black, fontWeight: '300' }}>Details of who you’ll live with, pets & utility
                        preferences. Adding ‘People’ and ‘Pets’ here
                        allows you to easily add them to any future
                        application.
                    </Text>

                    <TouchableOpacity style={[styles.enquiredStyle, { marginTop: 20 }]} onPress={() => navigation.navigate('People')}>
                        <Text style={{ color: appColors.black, flex: 1, }}>People</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.enquiredStyle} onPress={() => navigation.navigate('Pets')}>
                        <Text style={{ color: appColors.black, flex: 1, }}>Pets</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.enquiredStyle} onPress={() => navigation.navigate('UtilityConnectionService')}>
                        <Text style={{ color: appColors.black, flex: 1, }}>Utility connection service</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity> */}

                    {/* <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 20, color: appColors.black }}>Manage applications </Text>
                    <Text style={{ fontWeight: '600', marginTop: 8, color: appColors.black }}>Manage and view rental applications <Text style={{ fontWeight: '300', color: appColors.placeholderColor }}>you’ve already started.</Text></Text> */}
                    <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 14, color: appColors.black }}>How long we keep your data</Text>
                    <Text style={{ fontWeight: '300', marginTop: 8, color: appColors.placeholderColor }}>To keep your Renter Profile data more secure, we delete certain details after 18 months (six months for users in South Australia). Learn more in  <Text style={{ fontWeight: '600', color: appColors.black }}>our help centre. </Text></Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 20, color: appColors.black }}>Need help? </Text>
                    <Text style={{ fontWeight: '300', marginTop: 8, color: appColors.placeholderColor }}>Search and find answers in<Text style={{ fontWeight: '600', color: appColors.black }}> our help centre.</Text></Text>

                    <ProfileFooter />
                </View>
            </ScrollView>
        </View>
    );
};

export default RenterProfile;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
        // paddingHorizontal: 16,
    },
    collectionStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: appColors.black,
    },
    backIconStyle: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headStyle: {
        fontSize: 18,
        fontWeight: '600',
        color: appColors.black
    },
    enquiredStyle: {
        flexDirection: 'row',
        marginTop: 10,
        paddingVertical: 14,
        paddingHorizontal: 12,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: appColors.lightGrey,
    },
    privancyStyle: {
        fontSize: 12,
        fontWeight: '600',
        color: appColors.black
    },
    bottomLinkStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        borderBottomWidth: 2,
        borderColor: appColors.lightGrey,
        paddingBottom: 16,
        paddingHorizontal: moderateScale(10)
    },
});
