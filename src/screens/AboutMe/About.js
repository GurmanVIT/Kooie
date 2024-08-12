import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { appColors } from '../../utils/appColors';
import BackIcon from '../../assets/svg/BackIcon';
import UpdateIcon from '../../assets/svg/UpdateIcon';

const About = ({ navigation }) => {

    const [text, setText] = useState('');

    return (
        <View style={styles.containerStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                <TouchableOpacity style={styles.backIconStyle} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </TouchableOpacity>
                <Text style={styles.collectionStyle}>Profile</Text>

            </View>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ fontSize: 12, fontWeight: '300', color: appColors.placeholderColor }}>Renter Profile</Text>
                    <Text style={styles.headStyle}>About me</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 10, color: appColors.black }}>Introduce yourself </Text>
                    <Text style={{ marginVertical: 6, color: appColors.black, fontWeight: '300' }}>Share with the agent and landlord why you are the     bets fit for the property.</Text>

                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 10, marginLeft: 6 }}>Introduce yourself</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Type something..."
                        placeholderTextColor="gray"
                        value={text}
                        onChangeText={setText}
                        multiline={true}
                        numberOfLines={4}
                    />
                    <Text style={{ fontSize: 12, color: appColors.placeholderColor, marginTop: 8 }}>0/3000</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 16, color: appColors.black }}>Optional supporting documents</Text>
                    <Text style={{ marginTop: 8, color: appColors.black }}>Attach any supporting document you’d like e.g. letters of recommendation, tenant ledgers or company guarantees.</Text>

                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 14, marginLeft: 6 }}>Introduce yourself</Text>
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
                    <View style={styles.bottomLinkStyle}>
                        <Text style={styles.privancyStyle}>Privacy Policy</Text>
                        <Text style={styles.privancyStyle}>Terms and conditions</Text>
                        <Text style={styles.privancyStyle}>Help centre</Text>
                    </View>

                    <Text style={{ marginTop: 14, textAlign: 'center', fontSize: 12, fontWeight: '600' }}>Kooie.com.au is owned and operated by xxx</Text>
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
        paddingHorizontal: 16,
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
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 24,
        marginTop: 20,
        alignItems: 'center',
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
