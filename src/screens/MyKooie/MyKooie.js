import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import React from 'react';
import { appColors } from '../../utils/appColors';
import BedIcon from '../../assets/svg/BedIcon';
import ShawarIcon from '../../assets/svg/ShawarIcon';
import CarIcon from '../../assets/svg/CarIcon';
import MeterIcon from '../../assets/svg/MeterIcon';
import Images from '../theme/Images';
import Fibreglass from '../../assets/svg/Fibreglass';
import Distance from '../../assets/svg/Distance';
import ShipIcon from '../../assets/svg/ShipIcon';
import Calender from '../../assets/svg/Calender';
import Clock from '../../assets/svg/Clock';
import TransparentHeart from '../../assets/svg/TransparentHeart';

const MyKooie = ({ navigation }) => {

    return (
        <View style={styles.containerStyle}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                <Text style={{ fontSize: 20, fontWeight: '600', color: appColors.black, marginBottom: 14 }}>My Kooie</Text>
                <Text style={{ fontSize: 16, fontWeight: '600', color: appColors.black, marginBottom: 10 }}>Collect your favorites</Text>
                <Text style={{ color: appColors.black, marginBottom: 14 }}>Tap the Heart on any Property, Car, Boat or Jet  to add it to this collection</Text>

                <View style={{ borderWidth: 1, borderColor: appColors.offWhite, borderRadius: 14, marginBottom: 16 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('BottomBar')} >
                        <ImageBackground
                            style={{ width: '100%', height: 240, borderTopRightRadius: 14, borderTopLeftRadius: 14 }}
                            resizeMode="stretch"
                            source={Images.house}
                        >
                            <TouchableOpacity style={{ position: 'absolute', right: 18, top: 18 }}>
                                <TransparentHeart />
                            </TouchableOpacity>
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

                <View style={{ borderWidth: 1, borderColor: appColors.offWhite, borderRadius: 14, marginBottom: 16 }}>
                    <TouchableOpacity>
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
                        <Text style={{ color: appColors.black, fontWeight: '600', fontSize: 16, marginBottom: 6 }}>Regal LX4</Text>
                        <Text style={{ color: appColors.black, fontWeight: '600', fontSize: 15, marginBottom: 6 }}>For Sale $900,000 - $990,000 </Text>
                        <Text>21 Gladswood Gardens, Double Bay NSW 2028</Text>
                        <View style={{ marginVertical: 8, flexDirection: 'row', }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 14 }}>
                                    <View style={{ width: 24, height: 24 }}>
                                        <Fibreglass />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 6 }}>Fibreglass</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 14 }}>
                                    <View style={{ width: 24, height: 24 }}>
                                        <Distance />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 6, color: appColors.black }}>7.4 m</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 14 }}>
                                    <View style={{ width: 24, height: 24 }}>
                                        <ShipIcon />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 6, color: appColors.black }}>V-Hull</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Inspection : <Text style={{ color: appColors.black, }}>Sat 8 Jun</Text></Text>
                        </View>
                    </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: appColors.offWhite, borderRadius: 14, marginBottom: 16 }}>
                    <TouchableOpacity>
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
                        <Text style={{ color: appColors.black, fontWeight: '600', fontSize: 16, marginBottom: 6 }}>2018 Vision SF50</Text>
                        <Text style={{ color: appColors.black, fontWeight: '600', fontSize: 15, marginBottom: 6 }}>For Sale $900,000 - $990,000 </Text>
                        <Text>21 Gladswood Gardens, Double Bay NSW 2028</Text>
                        <View style={{ marginVertical: 8, flexDirection: 'row', }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 14 }}>
                                    <View style={{ width: 24, height: 24 }}>
                                        <Calender />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 6 }}>2018</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 14 }}>
                                    <View style={{ width: 24, height: 24 }}>
                                        <Clock />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 6, color: appColors.black }}>
                                        690 hrs
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Inspection : <Text style={{ color: appColors.black, }}>Sat 8 Jun</Text></Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
};

export default MyKooie;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
        padding: 16,
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    usernameStyle: {
        color: appColors.black,
        fontFamily: 'SF-Pro',
        fontWeight: '700',
        fontSize: 16
    },
    newChatButton: {
        backgroundColor: appColors.black,
        color: appColors.white,
        fontWeight: '600',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25
    },
    personalStyle: {
        color: appColors.black,
        fontSize: 16,
        fontWeight: '600',
        marginTop: 15
    },
    notificationStyle: {
        backgroundColor: '#FAF48D',
        padding: 6,
        alignItems: 'center',
        borderRadius: 50,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: '600',
        fontSize: 12,
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
