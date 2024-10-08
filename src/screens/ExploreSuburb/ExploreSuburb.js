import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileHeader } from '../../components'
import { appColors } from '../../utils/appColors'
import ExploreImg from '../../assets/svg/ExploreImg'
import SearchBottomIcon from '../../assets/svg/SearchBottomIcon'
import Images from '../theme/Images'
import InformedImg from '../../assets/svg/InformedImg'
import EstimateValueWhiteIcon from '../../assets/svg/EstimateValueWhiteIcon'

const ExploreSuburb = ({ navigation }) => {

    const [active, setActive] = useState(0);

    const DATA = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
    ];

    return (
        <SafeAreaView style={styles.root_}>
            <ProfileHeader navigation={navigation} title={'Explore suburbs'} />
            <ScrollView style={styles.content_}>
                <View style={styles.input_section}>
                    <View style={styles.explore_section}>
                        <ExploreImg />
                        <Text style={styles.textStyle}>Find a suburb that suits you</Text>
                        <Text style={styles.property_content}>Inform your property journey with the latest market insights for Australian suburbs</Text>

                        <View style={styles.searchContainer}>
                            <View style={{ width: 20, height: 20, position: 'absolute', zIndex: 1, top: 10, left: 10 }}>
                                <SearchBottomIcon stroke={appColors.grey} />
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Suburb or postcode"
                                placeholderTextColor="#aaa"
                            />
                        </View>

                        <View style={{ marginVertical: 20 }}>
                            <TouchableOpacity style={styles.button_}>
                                <Text style={styles.button_text}>Search suburb profiles</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={styles.text_16}>Regional suburbs with the largest growth in demand over the past year</Text>
                    <Text style={{ color: appColors.black, marginBottom: 14 }}>Demand is the number of potential buyers for
                        each property listed on Kooie.com.au, this
                        list compares May 2020 - April 2021 with May 2021 - April 2022
                    </Text>

                    <FlatList
                        data={DATA}
                        style={{ marginTop: 10 }}
                        renderItem={() => (
                            <View style={{ borderRadius: 8, borderColor: appColors.lightGrey, borderWidth: 1, marginBottom: 20 }}>
                                <View style={{ width: '100%' }}>
                                    <Image source={Images.RealEstate_img} resizeMode='cover' style={{ width: '100%', borderTopRightRadius: 8, borderTopLeftRadius: 8, }} />
                                </View>
                                <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                                    <Text style={{ fontWeight: '600', color: appColors.black }}>How to Find a Good Real Estate Agent</Text>
                                    <Text style={{ marginTop: 4, color: appColors.black }}>Oct  24, 2023</Text>
                                </View>
                            </View>

                        )}
                        keyExtractor={item => item.id}
                    />

                    <Text style={{ fontSize: 16, fontWeight: '600', color: appColors.black }}>Buying an apartment guide</Text>
                    <FlatList
                        data={DATA}
                        horizontal
                        style={{ marginTop: 12 }}
                        renderItem={() => (
                            <View style={{ width: 240, marginRight: 14, borderRadius: 8, borderColor: appColors.lightGrey, borderWidth: 1 }}>
                                <View style={{ height: 150 }}>
                                    <Image source={Images.Boats} resizeMode='cover' style={{ width: '100%', height: '100%', borderTopRightRadius: 8, borderTopLeftRadius: 8, }} />
                                </View>
                                <View style={{ paddingHorizontal: 10, paddingVertical: 6 }}>
                                    <Text style={{ marginTop: 8, color: appColors.black }}>Part one</Text>
                                    <Text style={{ fontWeight: '600', color: appColors.black, marginTop: 4 }}>Everyting you need to know about buying an apartment</Text>
                                </View>
                            </View>

                        )}
                        keyExtractor={item => item.id}
                    />


                    <View style={styles.already_section}>
                        <Text style={[styles.textStyle, { marginTop: 0 }]}>Buy, rent or invest with confidence</Text>
                        <Text style={styles.property_content}>With market leading insights from Kooie.com.au,  use suburb profiles to: </Text>

                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <EstimateValueWhiteIcon />
                            <Text style={[styles.textStyle, { fontSize: 16 }]}>Know how much it costs to buy or rent in a suburb</Text>
                            <Text style={styles.property_content}>Median prices are the quickest way to gauge if an area is affordable for you.</Text>
                        </View>

                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <InformedImg />
                            <Text style={[styles.textStyle, { fontSize: 16 }]}>Make data informed, savvy property decisions</Text>
                            <Text style={styles.property_content}>Understand market performance, buyer demand and property supply.</Text>
                        </View>

                    </View>

                    <View style={styles.tabStyle}>
                        <View style={{ width: '50%' }}>
                            <Text
                                onPress={() => setActive(0)}
                                style={{
                                    textAlign: 'center',
                                    color: active === 0 ? appColors.red : appColors.grey,
                                    paddingBottom: active === 0 ? 12 : 12,
                                    borderBottomWidth: active === 0 ? 1 : 1,
                                    borderColor: active === 0 ? appColors.red : appColors.lightGrey,
                                }}
                            >
                                Popular Australia suburbs
                            </Text>
                        </View>
                        <View style={{
                            width: '50%'

                        }}>
                            <Text onPress={() => setActive(1)}
                                style={{
                                    textAlign: 'center',
                                    color: active === 1 ? appColors.red : appColors.grey,
                                    paddingBottom: active === 1 ? 12 : 12,
                                    borderBottomWidth: active === 1 ? 1 : 1,
                                    borderColor: active === 1 ? appColors.red : appColors.lightGrey,
                                }}
                            >
                                Explore Australia
                            </Text>
                        </View>
                    </View>

                    <View style={{ padding: 16, paddingBottom: 0 }}>
                        <View style={styles.containerTextBorder}>
                            <Text style={styles.textBorder}>Melbourne</Text>
                        </View>
                        <View style={styles.containerTextBorder}>
                            <Text style={styles.textBorder}>Perth</Text>
                        </View>
                        <View style={styles.containerTextBorder}>
                            <Text style={styles.textBorder}>Sydney</Text>
                        </View>
                        <View style={styles.containerTextBorder}>
                            <Text style={styles.textBorder}>Brisbane City</Text>
                        </View>
                        <View style={styles.containerTextBorder}>
                            <Text style={styles.textBorder}>Adelaide</Text>
                        </View>
                        <View style={styles.containerTextBorder}>
                            <Text style={styles.textBorder}>Ballarat Central</Text>
                        </View>
                        <View style={styles.containerTextBorder}>
                            <Text style={styles.textBorder}>Cairns City</Text>
                        </View>
                        <View style={styles.containerTextBorder}>
                            <Text style={styles.textBorder}>Hobart</Text>
                        </View>
                        <View style={styles.containerTextBorder}>
                            <Text style={styles.textBorder}>Darwin City</Text>
                        </View>
                        <View style={styles.containerTextBorder}>
                            <Text style={styles.textBorder}>Bendigo</Text>
                        </View>
                        <View style={styles.containerTextBorder}>
                            <Text style={styles.textBorder}>Toowoomba City</Text>
                        </View>
                        <View style={styles.containerTextBorder}>
                            <Text style={styles.textBorder}>Surfers Paradise</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default ExploreSuburb

const styles = StyleSheet.create({
    root_: {
        flex: 1,
        backgroundColor: appColors.white
    },
    content_: {
        paddingHorizontal: 16
    },
    input_section: {
        gap: 10,
        marginBottom: 20
    },
    explore_section: {
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
        backgroundColor: appColors.offWhite,
        paddingHorizontal: 14,
        paddingVertical: 30,
        borderRadius: 8,
        marginTop: 14,
    },
    tracking_btn: {
        fontWeight: '600',
        color: appColors.white,
        backgroundColor: appColors.red,
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 30,
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
    searchContainer: {
        flexDirection: 'row',
        marginTop: 20,
        position: 'relative',
    },
    input: {
        flex: 1,
        height: 44,
        backgroundColor: appColors.white,
        borderRadius: 30,
        paddingLeft: 45,
        paddingRight: 10,
    },
    text_16: {
        fontSize: 16,
        color: appColors.black,
        fontWeight: '600',
        marginTop: 10,
    },
    tabStyle: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 30,
    },
    containerTextBorder: {
        flexDirection: 'row',
        marginBottom: 10
    },
    textBorder: {
        borderColor: appColors.placeholderColor,
        borderBottomWidth: 1,
        color: appColors.black,
        opacity: 0.7
    },
})