import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { appColors } from '../../utils/appColors'
import BackIcon from '../../assets/svg/BackIcon'

const RentalApplications = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.root_}>
            <View style={styles.header_}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: '33%' }}>
                    <BackIcon width={35} height={35} />
                </TouchableOpacity>

                <Text style={styles.title_}>Rental Applications</Text>

                <View style={styles.right_side} />
            </View>

            <ScrollView style={styles.content_}>
                <View style={styles.top_section}>
                    <Text style={styles.text_20}>Apply for properties with your
                        Kooie.com.au Renter Profile
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={{ fontSize: 14, color: appColors.black, marginTop: 4 }}>Create your Rental Profile once and reuse it for all your rental applications</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={{ fontSize: 14, color: appColors.black, marginTop: 4 }}>Apply instantly on the go </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={{ fontSize: 14, color: appColors.black, marginTop: 4 }}>Easily create joint applications</Text>
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <TouchableOpacity style={styles.button_}>
                            <Text style={styles.button_text}>View saved properties</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.text_16}>How long we keep your data </Text>
                    <Text style={{ color: appColors.black, marginBottom: 4, fontWeight: '300' }}>To keep your data more secure, we delete submitted applications after three months and draft applications after six months. Your data will remain in your Renter Profile for 18 months (six months for users in South Australia). Learn more in <Text style={{ fontWeight: '600' }}> our help centre</Text></Text>

                    <Text style={styles.text_16}>Need help?</Text>
                    <Text style={{ color: appColors.black, marginBottom: 4, fontWeight: '300' }}>Search and find answers in<Text style={{ fontWeight: '600' }}> our help centre</Text></Text>

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default RentalApplications

const styles = StyleSheet.create({
    root_: {
        flex: 1,
        backgroundColor: appColors.white
    },
    header_: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        width: '100%'
    },
    title_: {
        fontSize: 14,
        fontWeight: '700',
        color: appColors.black,
        maxWidth: '40%'
    },
    right_side: {
        width: '26%'
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
    bullet: {
        fontSize: 24,
        marginRight: 8,
        color: appColors.black,
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
    text_16: {
        fontSize: 16,
        color: appColors.black,
        fontWeight: '600',
        marginTop: 10,
    },
})