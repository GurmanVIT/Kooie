import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileHeader } from '../../components'
import { appColors } from '../../utils/appColors'
import DownIcon from '../../assets/svg/DownIcon'
import RNPickerSelect from 'react-native-picker-select';
import { moderateScale } from 'react-native-size-matters'
import SavingIcon from '../../assets/svg/SavingIcon'

const MyFinanceLink = ({ navigation }) => {

    const [selectedValue, setSelectedValue] = useState("Salary");
    const [selectedValueMonth, setSelectedValueMonth] = useState("Per month");

    return (
        <SafeAreaView style={styles.root_}>
            <ProfileHeader navigation={navigation} title={'My finances'} />
            <ScrollView style={styles.content_}>
                <View style={styles.top_section}>
                    <Text style={styles.text_20}>My finances</Text>
                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 4 }}>Tools to help you make better decisions.</Text>
                </View>
                <View style={styles.input_section}>

                    <View style={styles.dropdownStyle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                            <Text style={styles.fontSame}>Total savings </Text>
                            <SavingIcon style={{ marginTop: 4 }} />
                        </View>
                        <View style={styles.input_container}>
                            <TextInput
                                placeholder='Amount'
                                keyboardType="numeric"
                                placeholderTextColor={appColors.placeholderColor}
                                style={styles.input_}
                            />
                        </View>
                    </View>

                    <View style={styles.dropdownStyle}>
                        <Text style={styles.fontSame}>Income</Text>
                        <View style={styles.enquiredStyle}>
                            <Text style={{ color: appColors.placeholderColor, flex: 1, fontSize: 16 }}>$0 per month</Text>
                            <TouchableOpacity style={{ width: 24, height: 24 }} >
                                <DownIcon />
                            </TouchableOpacity>
                        </View>
                        <View >
                            <Text style={styles.fontSame}>Income source</Text>
                            <View style={styles.pickerWrapper}>
                                <RNPickerSelect
                                    onValueChange={(value) => setSelectedValue(value)}
                                    items={[
                                        { label: "Salary", value: "Salary" },
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
                            <Text style={[styles.fontSame, { marginTop: 14, fontSize: 13 }]}>If you have multiple salary sources they will be
                                combined for the purpose of this calculation.
                            </Text>

                            <Text style={[styles.fontSame, { marginTop: 10 }]}>Frequency</Text>
                            <View style={styles.pickerWrapper}>
                                <RNPickerSelect
                                    onValueChange={(value) => setSelectedValueMonth(value)}
                                    items={[
                                        { label: "Per month", value: "Per month" },
                                        { label: "JavaScript", value: "javascript" },
                                        { label: "Python", value: "python" },
                                    ]}
                                    value={selectedValueMonth}
                                    style={{
                                        inputIOS: styles.input,
                                        inputAndroid: styles.input,
                                    }}
                                />
                            </View>

                            <Text style={[styles.fontSame, { marginTop: 12 }]}>Amount</Text>
                            <View style={styles.input_container}>
                                <TextInput
                                    placeholder='Amount'
                                    keyboardType="numeric"
                                    placeholderTextColor={appColors.placeholderColor}
                                    style={styles.input_}
                                />
                            </View>

                            <View style={styles.addButtonContatiner}>
                                <Text style={styles.addButton}>Add</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.dropdownStyle}>
                        <Text style={styles.fontSame}>Expense</Text>
                        <View style={styles.enquiredStyle}>
                            <Text style={{ color: appColors.placeholderColor, flex: 1, fontSize: 16 }}>$0 per month</Text>
                            <TouchableOpacity style={{ width: 24, height: 24 }} >
                                <DownIcon />
                            </TouchableOpacity>
                        </View>
                        <View >
                            <Text style={styles.fontSame}>Expense source</Text>
                            <View style={styles.pickerWrapper}>
                                <RNPickerSelect
                                    onValueChange={(value) => setSelectedValue(value)}
                                    items={[
                                        { label: "Salary", value: "Salary" },
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

                            <Text style={[styles.fontSame, { marginTop: 10 }]}>Frequency</Text>
                            <View style={styles.pickerWrapper}>
                                <RNPickerSelect
                                    onValueChange={(value) => setSelectedValueMonth(value)}
                                    items={[
                                        { label: "Per month", value: "Per month" },
                                        { label: "JavaScript", value: "javascript" },
                                        { label: "Python", value: "python" },
                                    ]}
                                    value={selectedValueMonth}
                                    style={{
                                        inputIOS: styles.input,
                                        inputAndroid: styles.input,
                                    }}
                                />
                            </View>

                            <Text style={[styles.fontSame, { marginTop: 12 }]}>Amount</Text>
                            <View style={styles.input_container}>
                                <TextInput
                                    placeholder='Amount'
                                    keyboardType="numeric"
                                    placeholderTextColor={appColors.placeholderColor}
                                    style={styles.input_}
                                />
                            </View>

                            <View style={styles.addButtonContatiner}>
                                <Text style={styles.addButton}>Add</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.dropdownStyle}>
                        <Text style={styles.fontSame}>Assets</Text>
                        <View style={styles.enquiredStyle}>
                            <Text style={{ color: appColors.placeholderColor, flex: 1, fontSize: 16 }}>$0 total</Text>
                            <TouchableOpacity style={{ width: 24, height: 24 }} >
                                <DownIcon />
                            </TouchableOpacity>
                        </View>
                        <View >
                            <Text style={styles.fontSame}>Asset type</Text>
                            <View style={styles.pickerWrapper}>
                                <RNPickerSelect
                                    onValueChange={(value) => setSelectedValue(value)}
                                    items={[
                                        { label: "Salary", value: "Salary" },
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

                            <Text style={[styles.fontSame, { marginTop: 12 }]}>Amount</Text>
                            <View style={styles.input_container}>
                                <TextInput
                                    placeholder='Amount'
                                    keyboardType="numeric"
                                    placeholderTextColor={appColors.placeholderColor}
                                    style={styles.input_}
                                />
                            </View>

                            <View style={styles.addButtonContatiner}>
                                <Text style={styles.addButton}>Add</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.dropdownStyle}>
                        <Text style={styles.fontSame}>Debts</Text>
                        <View style={styles.enquiredStyle}>
                            <Text style={{ color: appColors.placeholderColor, flex: 1, fontSize: 16 }}>Repayments & limits</Text>
                            <TouchableOpacity style={{ width: 24, height: 24 }} >
                                <DownIcon />
                            </TouchableOpacity>
                        </View>
                        <View >
                            <Text style={styles.fontSame}>Debt type</Text>
                            <View style={styles.pickerWrapper}>
                                <RNPickerSelect
                                    onValueChange={(value) => setSelectedValue(value)}
                                    items={[
                                        { label: "Salary", value: "Salary" },
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

                            <Text style={[styles.fontSame, { marginTop: 12 }]}>Amount</Text>
                            <View style={styles.input_container}>
                                <TextInput
                                    placeholder='Amount'
                                    keyboardType="numeric"
                                    placeholderTextColor={appColors.placeholderColor}
                                    style={styles.input_}
                                />
                            </View>

                            <View style={styles.addButtonContatiner}>
                                <Text style={styles.addButton}>Add</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default MyFinanceLink

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
    fontSame: {
        fontSize: 12,
        color: appColors.black,
        marginTop: 4,
    },
    text_20: {
        color: appColors.black,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input_section: {
        gap: 16
    },
    input_: {
        color: appColors.inputColor,
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        backgroundColor: appColors.white,
        width: '100%',
        height: 50,
        borderRadius: 8,
        paddingHorizontal: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
    },
    input_container: {
        marginTop: 8
    },
    addButtonContatiner: {
        alignItems: 'flex-end',
        marginTop: 12,
        marginBottom: 6,
    },
    addButton: {
        backgroundColor: appColors.red,
        paddingHorizontal: 34,
        paddingVertical: 8,
        borderRadius: 24,
        color: appColors.white,
        fontWeight: '600',
    },
    pickerWrapper: {
        marginTop: 8,
    },
    input: {
        fontSize: 15,
        color: appColors.placeholderColor,
        backgroundColor: appColors.white,
    },
    dropdownStyle: {
        padding: 14,
        borderRadius: 6,
        backgroundColor: appColors.lightGrey,
    },
    enquiredStyle: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 4,
    },
    textArea: {
        marginTop: 8,
        padding: 10,
        borderColor: appColors.lightGrey,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: appColors.white,
        textAlignVertical: 'top',
        width: "100%",
        height: 40,
    },
})