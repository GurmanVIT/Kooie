import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { appColors } from '../../../utils/appColors';
import ArrowRightIcon from '../../../assets/svg/ArrowRightIcon';
import RenterProfileIcon from '../../../assets/svg/RenterProfileIcon';
import FinanceIcon from '../../../assets/svg/FinanceIcon';
import GuidesIcon from '../../../assets/svg/GuidesIcon';
import ExploreSuburb from '../../../assets/svg/ExploreSuburb';
import RentalApplicationIcon from '../../../assets/svg/RentalApplicationIcon';
import ListingIcon from '../../../assets/svg/ListingIcon';
import IconSetting from '../../../assets/svg/IconSetting';

const Profile = ({ navigation }) => {

    return (
        <View style={styles.containerStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                <Text style={styles.collectionStyle}>Profile</Text>
                <TouchableOpacity style={styles.settingIconStyle} onPress={() => navigation.navigate('Setting')}>
                    <IconSetting />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity style={styles.enquiredStyle} onPress={() => navigation.navigate('RenterProfile')}>
                        <View style={styles.profileIconStyle}>
                            <RenterProfileIcon />
                        </View>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={styles.textStyle}>Renter profile</Text>
                            <Text style={{ fontSize: 12, color: appColors.grey, }}>Create or update your renter profile</Text>
                        </View>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.enquiredStyle}>
                        <View style={styles.profileIconStyle}>
                            <FinanceIcon />
                        </View>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={styles.textStyle}>My finances</Text>
                            <Text style={{ fontSize: 12, color: appColors.grey, }}>Update your data and view your home loan approvals.</Text>
                        </View>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </View>

                    <View style={styles.enquiredStyle}>
                        <View style={styles.profileIconStyle}>
                            <GuidesIcon />
                        </View>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={styles.textStyle}>Guides</Text>
                            <Text style={{ fontSize: 12, color: appColors.grey, }}>View our comprehensive guides and take control of your property journey.</Text>
                        </View>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </View>

                    <View style={styles.enquiredStyle}>
                        <View style={styles.profileIconStyle}>
                            <ExploreSuburb />
                        </View>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={styles.textStyle}>Explore suburbs</Text>
                            <Text style={{ fontSize: 12, color: appColors.grey, }}>Explore suburb insights & characteristics to find your ideal area</Text>
                        </View>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </View>

                    <View style={styles.enquiredStyle}>
                        <View style={styles.profileIconStyle}>
                            <RentalApplicationIcon />
                        </View>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={styles.textStyle}>Rental applications</Text>
                            <Text style={{ fontSize: 12, color: appColors.grey, }}>Explore suburb insights & characteristics to find your ideal area</Text>
                        </View>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </View>

                    <View style={styles.enquiredStyle}>
                        <View style={styles.profileIconStyle}>
                            <ListingIcon />
                        </View>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={styles.textStyle}>My rental listings</Text>
                            <Text style={{ fontSize: 12, color: appColors.grey, }}>Create and manage your rental property listings</Text>
                        </View>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Profile;

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
        backgroundColor: appColors.lightGrey,
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    enquiredStyle: {
        flexDirection: 'row',
        paddingVertical: 14,
        borderBottomWidth: 1,
        flex: 1,
        alignItems: 'center',
        borderColor: appColors.lightGrey
    },
    profileIconStyle: {
        backgroundColor: appColors.lightGrey,
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    textStyle: {
        color: appColors.black,
        fontWeight: '600',
        fontSize: 16,
    },
});
