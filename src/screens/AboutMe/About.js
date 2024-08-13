import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { appColors } from '../../utils/appColors';
import BackIcon from '../../assets/svg/BackIcon';
import UpdateIcon from '../../assets/svg/UpdateIcon';
import { ProfileFooter, ProfileHeader } from '../../components';

const About = ({ navigation }) => {

    const [text, setText] = useState('');
    const maxLength = 3000;
    return (
        <View style={styles.containerStyle}>
            {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                <TouchableOpacity style={styles.backIconStyle} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </TouchableOpacity>
                <Text style={styles.collectionStyle}>Profile</Text>

            </View> */}
            <ProfileHeader navigation={navigation} title={'Profile'} />
            <ScrollView style={{ flex: 1, paddingHorizontal: 16, }} showsVerticalScrollIndicator={false}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ fontSize: 12, fontWeight: '300', color: appColors.placeholderColor }}>Renter Profile</Text>
                    <Text style={styles.headStyle}>About me</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 10, color: appColors.black }}>Introduce yourself </Text>
                    <Text style={{ marginVertical: 6, color: appColors.black, fontWeight: '300' }}>Share with the agent and landlord why you are the bets fit for the property.</Text>

                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 10, marginLeft: 6 }}>Introduce yourself</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Type something..."
                        placeholderTextColor="gray"
                        value={text}
                        onChangeText={setText}
                        multiline={true}
                        numberOfLines={4}
                        maxLength={maxLength}
                    />
                    <Text style={{ fontSize: 12, color: appColors.placeholderColor, marginTop: 8 }}>{text.length}/{maxLength}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 16, color: appColors.black }}>Optional supporting documents</Text>
                    <Text style={{ marginTop: 8, color: appColors.black }}>Attach any supporting document you’d like e.g. letters of recommendation, tenant ledgers or company guarantees.</Text>

                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 14, marginLeft: 6 }}>Introduce yourself</Text>
                    <View style={styles.updateButtonStyle}>
                        <UpdateIcon />
                        <Text style={{ color: appColors.black, marginLeft: 10 }}>Upload a file</Text>
                    </View>
                    <Text style={{ fontSize: 12, color: appColors.placeholder, textAlign: 'center', marginVertical: 10 }}>Max. 10MB - JPG, JPEG, PNG</Text>
                    <TouchableOpacity style={styles.button_}>
                        <Text style={styles.button_text}>Save and back</Text>
                    </TouchableOpacity>

                    <ProfileFooter />
                </View>
            </ScrollView>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,

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
        color: appColors.black,
        marginTop: 4
    },
    textArea: {
        height: 180,
        padding: 10,
        borderColor: appColors.lightGrey,
        borderWidth: 1,
        borderRadius: 5,
        textAlignVertical: 'top',
        marginTop: 8
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
        // marginHorizontal: 16,
        // padding: 16,
        borderRadius: 24,
        marginTop: 20,
        alignItems: 'center',
    },
    button_: {
        backgroundColor: appColors.red,
        height: 45,
        borderRadius: 45 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: appColors.white,
        fontWeight: 'bold',
        fontSize: 14
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
        paddingBottom: 16
    },
});
