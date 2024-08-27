import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { appColors } from '../../utils/appColors'
import { ProfileHeader } from '../../components'
import CheckBox from '@react-native-community/checkbox'
import { moderateScale } from 'react-native-size-matters'
import RNPickerSelect from 'react-native-picker-select';

const Enquiry = ({ navigation }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [enquiry, setEnquiry] = useState('');
    const [selectedValue, setSelectedValue] = useState("Select");

    const maxLength = 3000;

    return (
        <SafeAreaView style={styles.root_}>
            <ProfileHeader navigation={navigation} title={'Make an enquiry'} />
            <ScrollView style={styles.content_}>
                <View style={styles.top_section}>
                    <Text style={styles.text_20}>Whats your enquiry about?</Text>
                    <View style={styles.containerCheckBox}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            boxType={'square'}
                            lineWidth={2}
                            tintColors={{ true: 'grey', false: 'grey' }}
                            onValueChange={newValue => setToggleCheckBox(newValue)}
                        />
                        <Text style={{ fontSize: 14, color: appColors.black, }}>Scheduling an inspection</Text>
                    </View>
                    <View style={styles.containerCheckBox}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            boxType={'square'}
                            lineWidth={2}
                            tintColors={{ true: 'grey', false: 'grey' }}
                            onValueChange={newValue => setToggleCheckBox(newValue)}
                        />
                        <Text style={{ fontSize: 14, color: appColors.black }}>Price information</Text>
                    </View>
                    <View style={styles.containerCheckBox}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            boxType={'square'}
                            lineWidth={2}
                            tintColors={{ true: 'grey', false: 'grey' }}
                            onValueChange={newValue => setToggleCheckBox(newValue)}
                        />
                        <Text style={{ fontSize: 14, color: appColors.black, }}>Rates and fees</Text>
                    </View>
                    <View style={styles.containerCheckBox}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            boxType={'square'}
                            lineWidth={2}
                            tintColors={{ true: 'grey', false: 'grey' }}
                            onValueChange={newValue => setToggleCheckBox(newValue)}
                        />
                        <Text style={{ fontSize: 14, color: appColors.black, }}>Finding similar properties</Text>
                    </View>

                    <TextInput
                        style={styles.textArea}
                        placeholder="Add a message"
                        placeholderTextColor="gray"
                        value={enquiry}
                        onChangeText={setEnquiry}
                        multiline={true}
                        numberOfLines={4}
                        maxLength={maxLength}
                    />

                    <Text style={{ fontSize: 16, color: appColors.black, fontWeight: '600', marginTop: 14, marginBottom: 6 }}>Enter your details</Text>
                    <View style={styles.input_container}>
                        <TextInput
                            placeholder='Name (required)'
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                        />
                    </View>

                    <View style={styles.input_container}>
                        <TextInput
                            placeholder='Email address (required)'
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                        />
                    </View>

                    <View style={styles.input_container}>
                        <TextInput
                            placeholder='Phone number '
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                            keyboardType='phone-pad'
                            maxLength={10}
                        />
                    </View>

                    <View style={styles.input_container}>
                        <TextInput
                            placeholder='Postcode'
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                            keyboardType='phone-pad'
                        />
                    </View>

                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 10 }}>Tell us a bit about you</Text>
                    <View style={styles.pickerWrapper}>
                        <RNPickerSelect
                            onValueChange={(value) => setSelectedValue(value)}
                            items={[
                                { label: "Select", value: "Select" },
                                { label: "Select 1", value: "Select 1" },
                                { label: "Select 2", value: "Select 2" },
                            ]}
                            value={selectedValue}
                            style={{
                                inputIOS: styles.input,
                                inputAndroid: styles.input,
                            }}
                        />
                    </View>

                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 10 }}>Do you have finance pre-approval</Text>
                    <View style={styles.pickerWrapper}>
                        <RNPickerSelect
                            onValueChange={(value) => setSelectedValue(value)}
                            items={[
                                { label: "Select", value: "Select" },
                                { label: "Select 1", value: "Select 1" },
                                { label: "Select 2", value: "Select 2" },
                            ]}
                            value={selectedValue}
                            style={{
                                inputIOS: styles.input,
                                inputAndroid: styles.input,
                            }}
                        />
                    </View>

                    <Text style={{ fontSize: 13, marginTop: 6, color: appColors.grey }}>Having finance pre-approval means you’ve gotten the thumbs up from your bank to start making offers.</Text>
                    <View style={{ flexDirection: 'row', marginTop: 8, marginBottom: 14 }}>
                        <Text style={{ borderBottomWidth: 1, borderColor: appColors.placeholderColor }}>Personal information collection statement</Text>
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <TouchableOpacity style={styles.button_}>
                            <Text style={styles.button_text}>Send enquiry</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Enquiry

const styles = StyleSheet.create({
    root_: {
        flex: 1,
        backgroundColor: appColors.white
    },
    content_: {
        paddingHorizontal: 16,
        marginTop: 10,
    },
    top_section: {
        marginBottom: 20,
        gap: 5
    },
    text_20: {
        color: appColors.black,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button_: {
        backgroundColor: appColors.red,
        height: 50,
        borderRadius: 50 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: appColors.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
    containerCheckBox: {
        backgroundColor: appColors.offWhite,
        borderRadius: 6,
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 8,
        alignItems: 'center',
        gap: 10,
        marginBottom: 8,
    },
    textArea: {
        height: 180,
        padding: 10,
        borderColor: appColors.lightGrey,
        borderWidth: 1,
        borderRadius: 5,
        textAlignVertical: 'top',
    },
    input_container: {
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        width: '100%',
        height: 45,
        borderRadius: 5,
        paddingHorizontal: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input_: {
        color: appColors.inputColor
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        marginTop: 6,
    },
    input: {
        fontSize: 15,
        color: appColors.placeholderColor,
        backgroundColor: appColors.white,
    },
})