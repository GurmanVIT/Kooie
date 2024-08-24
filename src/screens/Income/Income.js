import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { appColors } from '../../utils/appColors';
import UpdateIcon from '../../assets/svg/UpdateIcon';
import { ProfileFooter, ProfileHeader } from '../../components';
import AddIncomeSource from '../../assets/svg/AddIncomeSource';
import CheckBox from '@react-native-community/checkbox';

const Income = ({ navigation }) => {

    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.containerStyle}>
            <ProfileHeader navigation={navigation} title={'Profile'} />
            <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 12, fontWeight: '300', color: appColors.placeholderColor }}>Renter Profile</Text>
                <Text style={styles.headStyle}>Income (after tax)</Text>
                <Text style={styles.headSecoundStyle}>Sources of income</Text>
                <Text style={{ marginVertical: 6, color: appColors.black }}>Add all your income sources to help show you can
                    afford the rent.</Text>

                <View style={styles.updateButtonStyle}>
                    <AddIncomeSource />
                    <Text style={{ color: appColors.black, marginLeft: 10 }}>Add income source</Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isChecked}
                        onValueChange={setChecked}
                    />
                    <Text style={{ color: appColors.black }}>I currently don’t receive any income</Text>
                </View>

                <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 16, color: appColors.black }}>Recent proof of income</Text>
                <Text style={{ marginTop: 8, color: appColors.black }}>Attach your three most recent payslips or any other supporting documents that prove your income.</Text>

                <Text style={{ fontSize: 12, color: appColors.black, marginTop: 14, marginLeft: 6 }}>Upload a file</Text>
                <View style={styles.updateButtonStyle}>
                    <UpdateIcon />
                    <Text style={{ color: appColors.black, marginLeft: 10 }}>Upload a file</Text>
                </View>
                <Text style={{ fontSize: 12, color: appColors.placeholder, textAlign: 'center', marginTop: 8 }}>Max. 10MB - GIF, JPG, JPEG, PNG, HEIC, PDF</Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('')}>
                    <Text style={{ color: appColors.white, fontWeight: '700' }}>
                        Save and back
                    </Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 14, color: appColors.black }}>How we store your uploads</Text>
                <Text style={{ fontWeight: '300', marginTop: 8, color: appColors.placeholderColor }}>We’ll store your uploads securely on our servers. Find out more in <Text style={{ fontWeight: '600', color: appColors.black }}>our help centre.</Text></Text>
                <Text style={{ fontWeight: '300', marginTop: 12, color: appColors.placeholderColor }}>We’ll store your uploads securely on our servers. Find out more in our help centre.
                    If you remove files once you’ve submitted an application, that will remove them from your profile, but not from submitted applications.
                </Text>
            </ScrollView>
            <ProfileFooter />

        </View>
    );
};

export default Income;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    headStyle: {
        fontSize: 18,
        fontWeight: '600',
        color: appColors.black,
        marginTop: 4
    },
    headSecoundStyle: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        color: appColors.black
    },
    headSecoundStyle: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        color: appColors.black
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        marginTop: 12,
    },
    updateButtonStyle: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        alignSelf: 'center',
        padding: 16,
        borderRadius: 8,
        width: '100%'
    },
    buttonStyle: {
        color: appColors.white,
        backgroundColor: appColors.red,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 24,
        marginTop: 20,
        alignItems: 'center',
    },
});
