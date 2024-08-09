import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { appColors } from '../../../utils/appColors';
import EstimateImage from '../../../assets/svg/EstimateImage';
import AddressIcon from '../../../assets/svg/AddressIcon';
import SearchLocalIcon from '../../../assets/svg/SearchLocalIcon';
import BrokerLocalIcon from '../../../assets/svg/BrokerLocalIcon';
import HomeLocalIcon from '../../../assets/svg/HomeLocalIcon';

const Property = () => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.collectionStyle}>My Property</Text>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={{ width: 300, height: 210, justifyContent: 'center', marginTop: 16 }}>
                        <EstimateImage />
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center', color: appColors.black, marginTop: 30 }}>Get your estimate</Text>
                    <Text style={{ fontSize: 16, fontWeight: '300', color: appColors.black, marginTop: 14, textAlign: 'center' }}>
                        Track how much your property is worth and stay up to date with market insights
                    </Text>

                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <View style={styles.searchButton}>
                            <View style={{ width: 24, height: 24 }}>
                                <AddressIcon stroke={appColors.white} />
                            </View>
                            <Text style={{ fontWeight: '600', marginTop: 2, color: appColors.white, marginLeft: 8, }}>Enter address</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 16, fontWeight: '600', color: appColors.black, marginTop: 30, textAlign: 'left', width: '100%' }}>Toolkit</Text>

                    <View style={{ width: "100%" }}>
                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            <View style={styles.enquiredStyle}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 56, height: 56 }}>
                                        <SearchLocalIcon />
                                    </View>
                                    <Text style={styles.textStyle}>Search local agents</Text>
                                </View>
                            </View>

                            <View style={styles.enquiredStyle}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 56, height: 56 }}>
                                        <BrokerLocalIcon />
                                    </View>
                                    <Text style={styles.textStyle}>Find a local broker</Text>
                                </View>
                            </View>

                            <View style={styles.enquiredStyle}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 56, height: 56 }}>
                                        <HomeLocalIcon />
                                    </View>
                                    <Text style={styles.textStyle}>Rent out your home</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Property;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    collectionStyle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: appColors.black,
        marginTop: 16
    },
    searchButton: {
        backgroundColor: appColors.red,
        borderRadius: 35,
        paddingHorizontal: 30,
        paddingVertical: 16,
        flexDirection: 'row',
    },
    enquiredStyle: {
        flexDirection: 'row',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderColor: appColors.lightGrey
    },
    textStyle: {
        color: appColors.black,
        fontWeight: '600',
        marginLeft: 14,
    },
});
