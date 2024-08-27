import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileHeader } from '../../components'
import { appColors } from '../../utils/appColors'
import RNPickerSelect from 'react-native-picker-select';

const Preferences = ({ navigation }) => {

    const [active, setActive] = useState();
    const [selectedValue, setSelectedValue] = useState("Select");

    return (
        <SafeAreaView style={styles.root_}>
            <ProfileHeader navigation={navigation} title={'My finances'} />
            <ScrollView style={styles.content_}>
                <View style={styles.top_section}>
                    <Text style={styles.text_20}>My preferences</Text>
                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 4 }}>We use this information to show you more
                        accurate financial details based on
                        government and lender requirements</Text>
                </View>
                <View style={styles.input_section}>
                    <Text style={{ fontWeight: '600', fontSize: 16, color: appColors.black }}>First home buyer?</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            style={{
                                color: active == 0 ? '#fff' : '#000',
                                backgroundColor: active == 0 ? '#000' : '#fff',
                                paddingVertical: 12,
                                paddingHorizontal: 16,
                                borderColor: active == 0 ? "#000" : "#E9EBEE",
                                borderWidth: 1,
                                borderTopLeftRadius: 8,
                                borderBottomLeftRadius: 8,
                                borderRightWidth: 1,
                                borderColor: appColors.lightGrey,
                            }} onPress={() => setActive(0)}
                        >
                            Yes
                        </Text>
                        <Text style={{
                            color: active == 1 ? '#fff' : '#000',
                            backgroundColor: active == 1 ? '#000' : '#fff',
                            paddingVertical: 12,
                            borderLeftWidth: 0,
                            borderTopRightRadius: 8,
                            borderBottomRightRadius: 8,
                            paddingHorizontal: 20,
                            borderWidth: 1,
                            borderColor: active == 1 ? "#000" : "#E9EBEE",
                        }} onPress={() => setActive(1)}
                        >
                            No
                        </Text>
                    </View>
                </View>

                <View style={styles.input_section}>
                    <Text style={{ fontWeight: '600', fontSize: 16, color: appColors.black, marginTop: 20 }}>I’m buying a property to</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            style={{
                                color: active == 0 ? '#fff' : '#000',
                                backgroundColor: active == 0 ? '#000' : '#fff',
                                paddingVertical: 12,
                                paddingHorizontal: 16,
                                borderColor: active == 0 ? "#000" : "#E9EBEE",
                                borderWidth: 1,
                                borderTopLeftRadius: 8,
                                borderBottomLeftRadius: 8,
                                borderRightWidth: 1,
                                borderColor: appColors.lightGrey,
                            }} onPress={() => setActive(0)}
                        >
                            Live in
                        </Text>
                        <Text style={{
                            color: active == 1 ? '#fff' : '#000',
                            backgroundColor: active == 1 ? '#000' : '#fff',
                            paddingVertical: 12,
                            borderLeftWidth: 0,
                            borderTopRightRadius: 8,
                            borderBottomRightRadius: 8,
                            paddingHorizontal: 20,
                            borderWidth: 1,
                            borderColor: active == 1 ? "#000" : "#E9EBEE",
                        }} onPress={() => setActive(1)}
                        >
                            Invest in
                        </Text>
                    </View>
                </View>

                <Text style={{ fontSize: 12, color: appColors.black, marginTop: 20 }}>Martial status</Text>
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

                <Text style={{ fontSize: 12, color: appColors.black, marginTop: 20 }}>Number of dependants</Text>
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

                <TouchableOpacity style={styles.button_}>
                    <Text style={styles.button_text}>Update preferences</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView >
    )
}

export default Preferences

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
    text_20: {
        color: appColors.black,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input_section: {
        gap: 10
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
    button_: {
        backgroundColor: appColors.red,
        height: 45,
        borderRadius: 45 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    button_text: {
        color: appColors.white,
        fontWeight: 'bold',
        fontSize: 14
    },
})