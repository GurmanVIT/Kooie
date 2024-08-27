import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileHeader } from '../../components'
import { appColors } from '../../utils/appColors'
import { IMAGES } from '../../assets'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import dateFormat from 'dateformat'
import CountryPicker from 'react-native-country-picker-modal';
import { moderateScale, scale } from 'react-native-size-matters'

const LoginHomeLoan = ({ navigation }) => {


    const [countryCode, setCountryCode] = useState('IN');
    const [callingCode, setCallingCode] = useState('91');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDOB, setDOB] = useState(null);

    const handlePickDOB = (date) => {
        setDOB(date)
        setDatePickerVisibility(false)
    };


    return (
        <SafeAreaView style={styles.root_}>
            <ProfileHeader navigation={navigation} title={'My finances'} />
            <ScrollView style={styles.content_}>
                <View style={styles.top_section}>
                    <Text style={styles.text_20}>Home Loan</Text>
                </View>
                <View style={styles.input_section}>
                    <Text style={styles.textStyle}>Need a home loan?</Text>
                    <Text style={styles.property_content}>Fill out the contact form and our agents will get in touch with you shortly.</Text>

                    <View style={styles.input_section}>
                        <View style={{ gap: 5 }}>
                            <Text style={styles.lebel_}>Name</Text>
                            <View style={styles.input_container}>
                                <TextInput
                                    placeholder='Name'
                                    placeholderTextColor={appColors.placeholderColor}
                                    style={styles.input_}
                                />
                            </View>
                        </View>

                        <View style={{ gap: 5 }}>
                            <Text style={styles.lebel_}>Email</Text>
                            <View style={styles.input_container}>
                                <TextInput
                                    placeholder='Email'
                                    placeholderTextColor={appColors.placeholderColor}
                                    style={styles.input_}
                                />
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
                            <TouchableOpacity style={styles.button_}>
                                <Text style={styles.button_text}>Save and back</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handlePickDOB}
                onCancel={() => setDatePickerVisibility(false)}
            />
        </SafeAreaView >
    )
}

export default LoginHomeLoan

const styles = StyleSheet.create({
    root_: {
        flex: 1,
        backgroundColor: appColors.white
    },
    content_: {
        paddingHorizontal: 16
    },
    top_section: {
        marginBottom: 14,
        gap: 5
    },
    text_20: {
        color: appColors.black,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input_section: {
        gap: 10,
        marginBottom: 20,
    },
    textStyle: {
        fontSize: 18,
        color: appColors.black,
        textAlign: 'center',
        fontWeight: '600',
    },
    property_content: {
        color: appColors.black,
        textAlign: 'center',
        marginBottom: 10,
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
    },
})