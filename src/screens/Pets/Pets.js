import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileFooter, ProfileHeader } from '../../components'
import { appColors } from '../../utils/appColors'

const Pets = ({ navigation }) => {

    const [active, serActive] = useState(0);

    const DATA = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
    ];

    return (
        <SafeAreaView style={styles.root_}>
            <ProfileHeader navigation={navigation} title={'Profile'} />
            <ScrollView style={styles.content_}>
                <View style={styles.top_section}>
                    <Text style={styles.text_light}>Renter Profile</Text>
                    <Text style={styles.text_20}>Pets</Text>
                    <Text style={{ fontSize: 12, color: appColors.black, }}>Let the property manager know if you have pets.</Text>
                </View>

                <View style={styles.input_section}>

                    <FlatList
                        data={DATA}
                        renderItem={() => (
                            <View style={{ marginTop: 12 }}>
                                <Text>Dogs</Text>
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 4 }}>
                                    <Text
                                        style={[styles.activeButton, {
                                            color: active == 0 ? '#fff' : '#000',
                                            backgroundColor: active == 0 ? '#000' : '#fff',
                                            borderColor: active == 0 ? "#000" : "#E9EBEE",
                                        }]} onPress={() => serActive(0)}
                                    >
                                        0
                                    </Text>

                                    <Text style={[styles.activeButton, {
                                        color: active == 1 ? '#fff' : '#000',
                                        backgroundColor: active == 1 ? '#000' : '#fff',
                                        borderColor: active == 1 ? "#000" : "#E9EBEE",
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0,
                                    }]} onPress={() => serActive(1)}
                                    >
                                        1
                                    </Text>

                                    <Text style={[styles.activeButton, {
                                        color: active == 2 ? '#fff' : '#000',
                                        backgroundColor: active == 2 ? '#000' : '#fff',
                                        borderColor: active == 2 ? "#000" : "#E9EBEE",
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0,
                                    }]} onPress={() => serActive(2)}
                                    >
                                        2
                                    </Text>

                                    <Text style={[styles.activeButton, {
                                        color: active == 3 ? '#fff' : '#000',
                                        backgroundColor: active == 3 ? '#000' : '#fff',
                                        borderColor: active == 3 ? "#000" : "#E9EBEE",
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0,
                                    }]} onPress={() => serActive(3)}
                                    >
                                        3
                                    </Text>

                                    <Text style={[styles.activeButton, {
                                        color: active == 4 ? '#fff' : '#000',
                                        backgroundColor: active == 4 ? '#000' : '#fff',
                                        borderColor: active == 4 ? "#000" : "#E9EBEE",
                                        borderTopRightRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0,
                                    }]} onPress={() => serActive(4)}
                                    >
                                        4
                                    </Text>
                                </View>
                            </View>

                        )}
                        keyExtractor={item => item.id}
                    />


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

export default Pets

const styles = StyleSheet.create({
    root_: {
        flex: 1,
        backgroundColor: appColors.white
    },
    content_: {
        paddingHorizontal: 16
    },
    top_section: {
        marginBottom: 4,
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
    activeButton: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        width: '20%',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16,
        borderColor: appColors.lightGrey,
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