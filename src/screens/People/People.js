import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileFooter, ProfileHeader } from '../../components'
import { appColors } from '../../utils/appColors'
import AddOccupantIcon from '../../assets/svg/AddOccupantIcon'

const People = ({ navigation }) => {

    const [active, serActive] = useState(0)

    return (
        <SafeAreaView style={styles.root_}>
            <ProfileHeader navigation={navigation} title={'Profile'} />
            <ScrollView style={styles.content_}>
                <View style={styles.top_section}>
                    <Text style={styles.text_light}>Renter Profile</Text>
                    <Text style={styles.text_20}>People</Text>
                    <Text style={{ fontSize: 12, color: appColors.black, }}>Will you live with other occupants who are not on the lease?</Text>
                </View>
                <View style={styles.input_section}>

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
                                borderRightWidth: 0,
                                borderColor: appColors.lightGrey,
                            }} onPress={() => serActive(0)}
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
                            paddingHorizontal: 16,
                            borderWidth: 1,
                            borderColor: active == 1 ? "#000" : "#E9EBEE",
                        }} onPress={() => serActive(1)}
                        >
                            No
                        </Text>
                    </View>
                    {active == 0 ?
                        <View>
                            <Text style={{ fontSize: 12, marginTop: 6, color: appColors.black, }}>Will you live with other occupants who are not on the lease?</Text>
                            <Text style={{ fontSize: 12, marginTop: 12, fontWeight: '600', color: appColors.black, }}>Add details of other occupants so the agent
                                knows who you plan to live with.
                            </Text>

                            <View style={styles.updateButtonStyle}>
                                <AddOccupantIcon />
                                <Text style={{ color: appColors.black, marginLeft: 10 }}>Add occupant</Text>
                            </View>
                        </View>
                        :
                        ""
                    }

                    <View style={{ marginVertical: 40 }}>
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

export default People

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
    updateButtonStyle: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        alignSelf: 'center',
        padding: 14,
        borderRadius: 8,
        width: '100%'
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
})