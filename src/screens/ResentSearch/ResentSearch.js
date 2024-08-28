import { Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { appColors } from '../../utils/appColors';
import SearchBottomIcon from '../../assets/svg/SearchBottomIcon';
import LocationIcon from '../../assets/svg/LocationIcon';
import ResentSearchIcon from '../../assets/svg/ResentSearchIcon';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const ResentSearch = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('recent')
    return (
        <View style={styles.containerStyle}>
            <View style={styles.headSearchStyle}>
                <View style={{ width: 30, height: 30, marginTop: 4 }}>
                    <SearchBottomIcon stroke={appColors.grey} />
                </View>
                <Pressable style={{ width: '75%' }} onPress={() => navigation.navigate('HouseBooking')}>
                    <TextInput
                        style={{ color: appColors.grey, }}
                        placeholder="Search"
                        placeholderTextColor="#aaa"
                        editable={false}
                    />
                </Pressable>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: appColors.black }}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <View style={{ marginVertical: verticalScale(15), alignItems: 'center' }}>
                    <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('HouseBooking')}>
                        <LocationIcon />
                        <Text style={styles.text_13}>Use current location</Text>
                        <View />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginTop: scale(15), gap: scale(10) }}>

                        <TouchableOpacity style={[styles.savedButtonStyle, activeTab === 'recent' && styles.activebtn]} onPress={() => setActiveTab('recent')}>
                            <Text style={[styles.btnText, activeTab === 'recent' && styles.activeBtnText]}>Recent</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.savedButtonStyle, activeTab === 'saved' && styles.activebtn]} onPress={() => setActiveTab('saved')}>
                            <Text style={[styles.btnText, activeTab === 'saved' && styles.activeBtnText]}>Saved</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginVertical: verticalScale(10), alignItems: 'center' }}>
                        {/* <View>
                            <ResentSearchIcon size={60} />
                        </View> */}

                        {activeTab === 'recent' ?
                            <View>
                                <Text style={styles.text_16}>Recent searches</Text>
                                <Text style={[styles.text_12, { opacity: 0.6, paddingHorizontal: moderateScale(30), marginVertical: verticalScale(5), textAlign: 'center' }]}>Your recent searches will appear here, so you can easily run your favourite searches </Text>
                            </View>
                            : activeTab === 'saved' ?
                                <View>
                                    <Text style={styles.text_16}>Saved searches</Text>
                                    <Text style={[styles.text_12, { opacity: 0.6, paddingHorizontal: moderateScale(30), marginVertical: verticalScale(5), textAlign: 'center' }]}>Your saved searches will appear here, so you can easily run your favourite searches</Text>
                                </View>
                                : null}

                    </View>
                </View>
            </ScrollView >
        </View >
    );
};

export default ResentSearch;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    headSearchStyle: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        marginTop: 16,
        borderBottomWidth: 1,
        borderColor: appColors.lightGrey
    },
    collectionStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: appColors.black,
    },
    text_16: {
        fontSize: scale(16),
        fontWeight: '600',
        color: appColors.black,
    },
    text_13: {
        fontSize: scale(13),
        color: appColors.black,
    },
    text_12: {
        fontSize: scale(12),
        color: appColors.black,
    },
    searchButton: {
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        borderRadius: scale(8),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: moderateScale(15),
        paddingVertical: verticalScale(10),
        color: appColors.black,
        gap: scale(5)
    },
    savedButtonStyle: {
        backgroundColor: appColors.white,
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        borderRadius: scale(8),
        paddingHorizontal: moderateScale(30),
        paddingVertical: verticalScale(8),

    },
    activebtn: {
        borderWidth: 1,
        borderColor: appColors.black,

    },
    btnText: {
        fontSize: scale(12),
        fontWeight: '500',
        color: appColors.grey,
    },
    activeBtnText: {
        fontSize: scale(12),
        fontWeight: '500',
        color: appColors.black,
    }
});
