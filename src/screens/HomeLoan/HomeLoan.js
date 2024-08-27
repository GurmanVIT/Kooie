import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileHeader } from '../../components'
import { appColors } from '../../utils/appColors'
import HomeLoanIImg from '../../assets/svg/HomeLoanIImg'
import ArrowRightIcon from '../../assets/svg/ArrowRightIcon'
import EstimateValueIcon from '../../assets/svg/EstimateValueIcon'
import LoanNotification from '../../assets/svg/LoanNotification'

const HomeLoan = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.root_}>
            <ProfileHeader navigation={navigation} title={'My finances'} />
            <ScrollView style={styles.content_}>
                <View style={styles.top_section}>
                    <Text style={styles.text_20}>My home loan</Text>
                </View>
                <View style={styles.input_section}>
                    <View style={styles.loan_section}>
                        <HomeLoanIImg />
                        <Text style={styles.textStyle}>Need a home loan?</Text>
                        <Text style={styles.property_content}>Let’s help you find the right property, then finance it</Text>

                        <View style={styles.cardStyle} >
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Text style={{ color: appColors.grey }}>1. </Text>
                                <Text style={{ color: appColors.white }}>Find out how much you could borrow </Text>
                            </View>
                            <View style={{ width: 24, height: 24 }}>
                                <ArrowRightIcon />
                            </View>
                        </View>

                        <View style={[styles.cardStyle, { backgroundColor: appColors.white }]} >
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Text style={{ color: appColors.grey }}>2. </Text>
                                <Text style={{ color: appColors.black }}>Search properties with confidence, knowing what you can afford</Text>
                            </View>
                            <View style={{ width: 24, height: 24 }}>
                                <ArrowRightIcon />
                            </View>
                        </View>
                    </View>

                    <View style={styles.already_section}>
                        <Text style={styles.textStyle}>Already have a home loan?</Text>
                        <Text style={styles.property_content}>Track your property value, equity and home loan, all in one place.</Text>

                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <EstimateValueIcon />
                            <Text style={[styles.textStyle, { fontSize: 16 }]}>Estimated value</Text>
                            <Text style={styles.property_content}>You’ll always know what your property’s worth and be able to estimate how much of it you own.</Text>
                        </View>

                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <LoanNotification />
                            <Text style={[styles.textStyle, { fontSize: 16 }]}>Regular updates</Text>
                            <Text style={styles.property_content}>Keep up to date with how your property and loan are performing in the market</Text>
                        </View>

                        <Text style={[styles.textStyle, { marginTop: 24 }]}>What are you waiting for?</Text>

                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Text style={styles.tracking_btn} onPress={() => navigation.navigate('LoginHomeLoan')}>Start tracking</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default HomeLoan

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
        gap: 20,
        marginBottom: 20
    },
    loan_section: {
        backgroundColor: appColors.lightGrey,
        paddingHorizontal: 14,
        paddingVertical: 20,
        borderRadius: 6
    },
    textStyle: {
        fontSize: 18,
        color: appColors.black,
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 10,
    },
    property_content: {
        color: appColors.black,
        textAlign: 'center',
        marginTop: 10,
    },
    cardStyle: {
        flexDirection: 'row',
        marginTop: 6,
        paddingVertical: 14,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: appColors.black,
        marginTop: 10,
    },
    already_section: {
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        paddingHorizontal: 14,
        paddingVertical: 20,
        borderRadius: 6
    },
    tracking_btn: {
        fontWeight: '600',
        color: appColors.white,
        backgroundColor: appColors.red,
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 30,
    },
})