import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import React from 'react';
import { appColors } from '../../utils/appColors';
import Images from '../theme/Images';




const Marketplaces = ({ navigation }) => {

    // console.log({ getToken });


    return (
        <View style={styles.containerStyle}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                <Text style={{ fontSize: 16, fontWeight: '600', color: appColors.black, marginBottom: 20, textAlign: 'center' }}>Kooie Marketplaces</Text>
                <Text style={{ fontSize: 20, fontWeight: '700', color: appColors.black, marginBottom: 10 }}>Most popular</Text>

                <TouchableOpacity onPress={() => navigation.navigate('BottomBar')}>
                    <View style={{ marginVertical: 6 }}>
                        <Image resizeMode="cover" style={{ width: '100%', borderRadius: 14, }} source={Images.RealEstate} />
                    </View>
                </TouchableOpacity>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: appColors.black, fontSize: 16, fontWeight: '600', marginBottom: 8 }}>Kooie Marketplaces</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', gap: 15 }}>
                            <Image
                                resizeMode="cover"
                                style={{ borderRadius: 14, }}
                                source={Images.Commercial}
                            />
                            <Image
                                resizeMode="cover"
                                style={{ borderRadius: 14, }}
                                source={Images.Cars}
                            />
                            <Image
                                resizeMode="cover"
                                style={{ borderRadius: 14, }}
                                source={Images.Boats}
                            />
                            <Image
                                resizeMode="cover"
                                style={{ borderRadius: 14, }}
                                source={Images.Jets}
                            />
                            <Image
                                resizeMode="cover"
                                style={{ borderRadius: 14, }}
                                source={Images.RealEstate_img}
                            />
                        </View>
                    </ScrollView>
                </View>

            </ScrollView >
        </View >
    );
};

export default Marketplaces;

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
});
