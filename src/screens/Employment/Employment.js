import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { appColors } from '../../utils/appColors'
import { ProfileFooter, ProfileHeader } from '../../components'
import CheckBox from '@react-native-community/checkbox'
import RNPickerSelect from 'react-native-picker-select';

const Employment = ({ navigation }) => {

    const [isChecked, setChecked] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");

    return (
        <View style={styles.containerStyle}>
            <ProfileHeader navigation={navigation} title={'Profile'} />
            <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 12, fontWeight: '300', color: appColors.placeholderColor }}>Renter Profile</Text>
                <Text style={styles.headStyle}>Employment</Text>
                <Text style={styles.headSecoundStyle}>Employment</Text>
                <Text style={{ marginVertical: 6, color: appColors.black }}>Add your current employment information and
                    help verify your details with a valid reference.
                </Text>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isChecked}
                        onValueChange={setChecked}
                    />
                    <Text style={{ color: appColors.black }}>I am currently not employed</Text>
                </View>

                <Text style={{ fontSize: 12, color: appColors.black, marginTop: 14, marginLeft: 6 }}>Whats the employment type?</Text>
                <View style={styles.pickerWrapper}>
                    <RNPickerSelect
                        onValueChange={(value) => setSelectedValue(value)}
                        items={[
                            { label: "Java", value: "java" },
                            { label: "JavaScript", value: "javascript" },
                            { label: "Python", value: "python" },
                        ]}
                        value={selectedValue}
                        style={{
                            inputIOS: styles.input,
                            inputAndroid: styles.input,
                        }}
                    />
                </View>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('')}>
                    <Text style={{ color: appColors.white, fontWeight: '700' }}>
                        Save and back
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={{ marginBottom: 14 }}>
                <ProfileFooter />
            </View>
        </View>
    )
}

export default Employment

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
    addButtonStyle: {
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
        marginTop: 40,
        alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        marginTop: 10,
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        borderRadius: 5,
        marginTop: 10,
    },
    input: {
        fontSize: 16,
        color: appColors.placeholderColor,
    },
})