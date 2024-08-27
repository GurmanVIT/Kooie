import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileHeader } from '../../components'
import { appColors } from '../../utils/appColors'
import ArrowRightIcon from '../../assets/svg/ArrowRightIcon'
import HomeLoadIcon from '../../assets/svg/HomeLoadIcon'

const MyFinance = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.root_}>
            <ProfileHeader navigation={navigation} title={'My finances'} />
            <ScrollView style={styles.content_}>
                <View style={styles.top_section}>
                    <Text style={styles.text_20}>My finances</Text>
                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 4 }}>Tools to help you make better decisions.</Text>
                </View>
                <View style={styles.input_section}>

                    <TouchableOpacity style={styles.firstButtonStyle}>
                        <Text style={{ color: appColors.black, flex: 1 }}>First home buyer’s checklist</Text>
                        <Text style={styles.goButtonStyle}>Let’s go!</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('Preferences')}>
                        <Text style={{ color: appColors.black, flex: 1, }}>My preferences</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('MyFinanceLink')}>
                        <Text style={{ color: appColors.black, flex: 1, }}>My finances</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('HomeLoan')}>
                        <Text style={{ color: appColors.black, flex: 1, }}>My home loan</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.calculatorTextStyle}>Calculators</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                        <View style={styles.secoundCardStyle}>
                            <Text style={styles.cardHead}>Home loan</Text>
                            <Text style={styles.textStyle}>Understand your potential loan repayments</Text>
                        </View>
                        <View style={styles.secoundCardStyle}>
                            <Text style={styles.cardHead}>Refinance</Text>
                            <Text style={styles.textStyle}>See how much you could save on your current loan</Text>
                        </View>
                    </ScrollView>

                    <Text style={styles.calculatorTextStyle}>Articles</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.thirdCardStyle}>
                            <Text style={styles.textStyle}>First home buyer</Text>
                        </View>
                        <View style={styles.thirdCardStyle}>
                            <Text style={styles.textStyle}>Next home buyer</Text>
                        </View>
                    </View>


                    <View style={styles.secureStyle} >
                        <Text style={{ color: appColors.black, flex: 1, }}>How secure is my data?</Text>
                        <View style={{ width: 24, height: 24 }}>
                            <ArrowRightIcon />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.cardBottomStyle}>
                        <View style={{ flexDirection: 'row' }}>
                            <HomeLoadIcon />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ color: appColors.white, flex: 1 }}>Need a home loan?</Text>
                                <Text style={{ color: appColors.grey, flex: 1, fontSize: 12 }}>We can help</Text>
                            </View>
                        </View>
                        <Text style={styles.goButtonStyle}>Get started</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default MyFinance

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
        marginTop: 4
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
    cardStyle: {
        flexDirection: 'row',
        marginTop: 6,
        paddingVertical: 14,
        paddingHorizontal: 12,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: appColors.lightGrey,
    },
    firstButtonStyle: {
        flexDirection: 'row',
        paddingVertical: 14,
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        borderRadius: 6,
        backgroundColor: appColors.white
    },
    goButtonStyle: {
        backgroundColor: appColors.red,
        color: appColors.white,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontWeight: "600",
        borderRadius: 24,
    },
    calculatorTextStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: appColors.black,
        marginVertical: 10,
    },
    secoundCardStyle: {
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        borderRadius: 6,
        padding: 10,
        width: 220,
        marginRight: 12
    },
    cardHead: {
        fontSize: 12,
        color: appColors.grey
    },
    textStyle: {
        fontWeight: '600',
        color: appColors.black,
    },
    thirdCardStyle: {
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        borderRadius: 6,
        padding: 10,
        width: '45%',
    },
    secureStyle: {
        flexDirection: 'row',
        marginTop: 6,
        paddingVertical: 14,
        paddingHorizontal: 12,
        alignItems: 'center',
    },
    cardBottomStyle: {
        flexDirection: 'row',
        paddingVertical: 14,
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: appColors.black,
        justifyContent: 'space-between',
    },
})