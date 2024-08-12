import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackIcon from '../../assets/svg/BackIcon'
import { ProfileHeader } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { appColors } from '../../utils/appColors'
import { StretchOutY } from 'react-native-reanimated'

const PersonalDetails = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <ProfileHeader navigation={navigation} title={'Profile'} />
            <ScrollView style={styles.content_}>
                <View style={styles.top_section}>
                    <Text style={styles.text_light}>Renter Profile</Text>
                    <Text style={styles.text_20}>Personal Details</Text>
                </View>
                <View style={styles.input_section}>
                    <View style={{ gap: 5 }}>
                        <Text style={styles.lebel_}>First name</Text>
                        <View style={styles.input_container}>
                            <TextInput
                                placeholder='First name'
                                placeholderTextColor={appColors.placeholderColor}
                                style={styles.input_} />
                        </View>
                    </View>

                    <View style={{ gap: 5 }}>
                        <Text style={styles.lebel_}>Last name</Text>
                        <View style={styles.input_container}>
                            <TextInput
                                placeholder='Last name'
                                placeholderTextColor={appColors.placeholderColor}
                                style={styles.input_} />
                        </View>
                    </View>

                    <View style={{ gap: 5 }}>
                        <Text style={styles.lebel_}>Date of Birth</Text>
                        <View style={styles.input_container}>
                            <TextInput
                                placeholder='Date of birth'
                                placeholderTextColor={appColors.placeholderColor}
                                style={styles.input_} />
                        </View>
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text style={styles.lebel_}>Phone number (mobile preferred)</Text>
                        <View style={styles.input_container}>
                            <TextInput
                                placeholder='Mobile number'
                                placeholderTextColor={appColors.placeholderColor}
                                style={styles.input_}
                                keyboardType='phone-pad'
                            />
                        </View>
                        <Text style={{ fontSize: 11, left: 5, color: appColors.grey }}>user numbers only, without spaces,other charectors,</Text>
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <TouchableOpacity style={styles.button_}>
                            <Text style={styles.button_text}>Save and back</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ gap: 10, paddingRight: 50 }}>
                        <Text style={styles.text_16}>Want to change your email?</Text>
                        <Text style={styles.text_light}>We will use the email you have defined as your Kooie.com.au username to inform about status updates. You can <Text style={{ fontWeight: 'bold', color: appColors.black }}>change it here</Text></Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PersonalDetails

const styles = StyleSheet.create({
    content_: {
        paddingHorizontal: 18
    },
    top_section: {
        marginVertical: 20,
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
    text_16: {
        color: appColors.black,
        fontSize: 16,
        fontWeight: 'bold'
    }
})