import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { appColors } from '../../utils/appColors';
import BackIcon from '../../assets/svg/BackIcon';
import SearchBottomIcon from '../../assets/svg/SearchBottomIcon';
import HeartBottomIcon from '../../assets/svg/HeartBottomIcon';
import MeterIcon from '../../assets/svg/MeterIcon';
import CarIcon from '../../assets/svg/CarIcon';
import ShawarIcon from '../../assets/svg/ShawarIcon';
import BedIcon from '../../assets/svg/BedIcon';
import Images from '../theme/Images';
import TransparentHeart from '../../assets/svg/TransparentHeart';

const HouseBooking = ({ navigation }) => {

    const DATA = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
    ];

    return (
        <View style={styles.containerStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, paddingHorizontal: 16 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon width={35} height={35} />
                </TouchableOpacity>
                <View style={[styles.inputStyle, { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, height: 40 }]}>
                    <SearchBottomIcon stroke={appColors.grey} width={20} height={20} />
                    <TextInput
                        placeholder="sarching..."
                        placeholderTextColor={appColors.placeholderColor}
                        style={
                            [styles.inputStyle, { paddingLeft: 4, width: "85%", }]
                        }
                    />
                </View>
                <TouchableOpacity style={{ width: 24, height: 24 }}>
                    <HeartBottomIcon stroke={appColors.grey} />
                </TouchableOpacity>
            </View>
            <View style={styles.tabStyle}>
                <Text style={styles.textStyles}>Sort</Text>
                <Text style={styles.textStyles}>Inspections</Text>
                <Text style={styles.textStyles}>Map</Text>
            </View>
            <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={DATA}
                        keyExtractor={(index) => index.toString()}
                        renderItem={() => (
                            <View style={{ borderWidth: 1, borderColor: appColors.offWhite, borderRadius: 14, marginBottom: 16 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('HouseBookingInnerPage')}>
                                    <ImageBackground
                                        style={{ width: '100%', height: 250, borderTopRightRadius: 14, borderTopLeftRadius: 14 }}
                                        resizeMode="stretch"
                                        source={Images.house}
                                    >
                                        <View style={{ position: 'absolute', right: 18, top: 18 }}>
                                            <TransparentHeart />
                                        </View>
                                        <Text style={styles.residentialStyle}>RESIDENTIAL</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <View style={{ padding: 14, }}>
                                    <Text style={{ color: appColors.black, fontWeight: '600', fontSize: 16, marginBottom: 6 }}>For Sale $900,000 - $990,000 </Text>
                                    <Text>21 Gladswood Gardens, Double Bay NSW 2028</Text>
                                    <View style={{ marginVertical: 8, flexDirection: 'row', gap: 25 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 14 }}>
                                                <View style={{ width: 24, height: 24 }}>
                                                    <BedIcon />
                                                </View>
                                                <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 6 }}>2</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 14 }}>
                                                <View style={{ width: 24, height: 24 }}>
                                                    <ShawarIcon />
                                                </View>
                                                <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 6, color: appColors.black }}>2</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 14 }}>
                                                <View style={{ width: 24, height: 24 }}>
                                                    <CarIcon />
                                                </View>
                                                <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 6, color: appColors.black }}>2</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 14 }}>
                                            <View style={{ width: 24, height: 24 }}>
                                                <MeterIcon />
                                            </View>
                                            <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 6, color: appColors.black }}>600 m2</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text>Inspection : <Text style={{ color: appColors.black, }}>Sat 8 Jun</Text></Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        contentContainerStyle={styles.listContainer}
                    />

                </View>
            </ScrollView >
        </View >
    );
};

export default HouseBooking;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    collectionStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: appColors.black,
    },
    settingIconStyle: {
        backgroundColor: appColors.red,
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        borderRadius: 8,
        backgroundColor: appColors.lightGrey,
        paddingLeft: 14,
        color: appColors.black,
        width: '70%',
    },
    tabStyle: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: appColors.lightGrey,
        paddingVertical: 14
    },
    textStyles: {
        color: appColors.black,
        fontWeight: '600',
    },
    residentialStyle: {
        fontSize: 12,
        fontWeight: '600',
        backgroundColor: appColors.white,
        color: appColors.black,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 18,
        width: 100,
        textAlign: 'center',
        position: 'absolute',
        left: 14,
        borderWidth: 1,
        borderColor: appColors.grey,
        bottom: 14
    },
});
