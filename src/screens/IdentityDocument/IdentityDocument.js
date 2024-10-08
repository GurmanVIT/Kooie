import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { appColors } from '../../utils/appColors';
import { ProfileFooter, ProfileHeader } from '../../components';
import AdPhoto from '../../assets/svg/AdPhoto';

const IdentityDocument = ({ navigation }) => {

    return (
        <View style={styles.containerStyle}>
            <ProfileHeader navigation={navigation} title={'Profile'} />
            <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 12, fontWeight: '300', color: appColors.placeholderColor }}>Renter Profile</Text>
                <Text style={styles.headStyle}>Identity documents</Text>
                <Text style={styles.headSecoundStyle}>Add your ID</Text>
                <Text style={{ marginVertical: 6, color: appColors.black }}>Upload images of two IDs. At least one ID must
                    have your photo on it.
                </Text>

                <View style={styles.updateButtonStyle}>
                    <AdPhoto />
                    <Text style={{ color: appColors.black, marginLeft: 10 }}>Add photo ID</Text>
                </View>

                {/* <View style={styles.updateButtonStyle}>
                    <AdPhoto />
                    <Text style={{ color: appColors.black, marginLeft: 10 }}>Add second ID</Text>
                </View> */}

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

export default IdentityDocument;

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
