import { ActivityIndicator, Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { memo, useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackIcon from '../../assets/svg/BackIcon'
import { ProfileFooter, ProfileHeader } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { appColors } from '../../utils/appColors'
import { StretchOutY } from 'react-native-reanimated'
import { BASE_URL } from '../../config/config'
import { AuthContext } from '../../Contexts/authContext'
import { IMAGES } from '../../assets'
import { moderateScale, scale } from 'react-native-size-matters'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import dateFormat from 'dateformat'
import CountryPicker from 'react-native-country-picker-modal';



const EmergencyContact = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isDOB, setDOB] = useState(null);


    const [countryCode, setCountryCode] = useState('IN');
    const [callingCode, setCallingCode] = useState('91');

    return (
        <SafeAreaView style={styles.root_}>
            <ProfileHeader navigation={navigation} title={'Profile'} />
            <ScrollView style={styles.content_}>
                <View style={styles.top_section}>
                    <Text style={styles.text_light}>Renter Profile</Text>
                    <Text style={styles.text_20}>Emergency contact</Text>
                    <Text style={{ fontSize: 12, color: appColors.black, }}>The real estate agency requires an emergency contact who will not be living with you in case of an emergency or if you are unreachable during your tenancy.</Text>
                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 10 }}>You must have this person’s consent to provide their personal information and to be contacted by the relevant agency. </Text>
                </View>
                <View style={styles.input_section}>
                    <View style={{ gap: 5 }}>
                        <Text style={styles.lebel_}>First name</Text>
                        <View style={styles.input_container}>
                            <TextInput
                                placeholder='First name'
                                placeholderTextColor={appColors.placeholderColor}
                                style={styles.input_}
                                value={firstName && firstName}
                                onChangeText={(val) => setFirstName(val)} />
                        </View>
                    </View>

                    <View style={{ gap: 5 }}>
                        <Text style={styles.lebel_}>Last name</Text>
                        <View style={styles.input_container}>
                            <TextInput
                                placeholder='Last name'
                                placeholderTextColor={appColors.placeholderColor}
                                style={styles.input_}
                                value={lastName && lastName}
                                onChangeText={(val) => setLastName(val)} />
                        </View>
                    </View>

                    <View style={{ gap: 5 }}>
                        <Text style={styles.lebel_}>Date of Birth <Text style={{ color: appColors.red }}>*</Text></Text>
                        <View style={[styles.input_container, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }]}>
                            <TextInput
                                placeholder='Date of birth'
                                placeholderTextColor={appColors.placeholderColor}
                                style={styles.input_}
                                value={isDOB ? dateFormat(isDOB, 'dd-mm-yyyy') : ''}
                                editable={false}
                            // onChange={(val) => setDOB(val)}
                            />
                            <TouchableOpacity style={styles.caln_icon} onPress={() => { setDatePickerVisibility(true) }}>
                                <Image source={IMAGES.calender} style={{ width: '100%', height: '100%' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text style={styles.lebel_}>Phone number (mobile preferred)</Text>
                        <View style={styles.input_container}>
                            <CountryPicker
                                countryCode={countryCode}
                                withFilter
                                withFlag
                                withCallingCode
                                containerButtonStyle={{}}
                                onSelect={(country) => {
                                    setCountryCode(country.cca2);
                                    setCallingCode(country.callingCode[0]);
                                }}
                            />
                            <Text style={styles.input_}>+{callingCode}</Text>
                            <TextInput
                                placeholder='Mobile number'
                                placeholderTextColor={appColors.placeholderColor}
                                style={styles.input_}
                                keyboardType='phone-pad'
                                maxLength={10}
                            />
                        </View>
                        <Text style={{ fontSize: 11, left: 5, color: appColors.grey }}>Use numbers only, without spaces or other characters, e.g. 0416222333 or 0244443333.</Text>
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <TouchableOpacity style={styles.button_} >
                            <Text style={styles.button_text}>Save and back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <ProfileFooter />
        </SafeAreaView>
    )
}

export default EmergencyContact

const styles = StyleSheet.create({
    root_: {
        flex: 1,
        backgroundColor: appColors.white
    },
    content_: {
        paddingHorizontal: 16
    },
    top_section: {
        marginBottom: 20,
        gap: 5
    },
    text_light: {
        color: appColors.grey,
        fontSize: 13
    },
    text_20: {
        color: appColors.black,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input_section: {
        gap: 10
    },
    lebel_: {
        color: appColors.black,
        fontSize: 12,
        fontWeight: '700',
        left: 5
    },
    input_container: {
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        width: '100%',
        height: 45,
        borderRadius: 5,
        paddingHorizontal: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    input_: {
        color: appColors.inputColor
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
    caln_icon: {
        width: scale(20),
        height: scale(20),
        marginRight: scale(8)
    }
})