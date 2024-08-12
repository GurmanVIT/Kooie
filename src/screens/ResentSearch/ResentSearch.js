import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { appColors } from '../../utils/appColors';
import SearchBottomIcon from '../../assets/svg/SearchBottomIcon';
import LocationIcon from '../../assets/svg/LocationIcon';
import ResentSearchIcon from '../../assets/svg/ResentSearchIcon';

const ResentSearch = ({ navigation }) => {

    return (
        <View style={styles.containerStyle}>
            <View style={styles.headSearchStyle}>
                <View style={{ width: 30, height: 30, marginTop: 4 }}>
                    <SearchBottomIcon stroke={appColors.grey} />
                </View>
                <TextInput
                    style={{ color: appColors.grey, width: '75%' }}
                    placeholder="Search"
                    placeholderTextColor="#aaa"
                />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: appColors.black }}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 30, alignItems: 'center' }}>
                    <TouchableOpacity style={styles.searchButton}>
                        <LocationIcon />
                        <Text style={{ marginTop: 2, color: appColors.black, marginLeft: 8 }}>Use current location</Text>
                        <View />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity>
                            <Text style={[styles.savedButtonStyle, { borderColor: appColors.black, }]}>Recent </Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={[styles.savedButtonStyle, { marginLeft: 10, color: appColors.grey, }]}>Saved</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 40, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('HouseBooking')}>
                            <ResentSearchIcon />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: appColors.black, marginTop: 20 }}>Recent searches                                                            </Text>
                        <Text style={{ fontSize: 16, fontWeight: '300', color: appColors.black, marginTop: 10, textAlign: 'center' }}>
                            Your recent searches will appear here,
                            so you can easily run your favourite searches
                        </Text>
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
    searchButton: {
        backgroundColor: appColors.white,
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        borderRadius: 14,
        paddingHorizontal: 14,
        alignItems: 'center',
        paddingVertical: 16,
        flexDirection: 'row',
        color: appColors.black,
    },
    savedButtonStyle: {
        backgroundColor: appColors.white,
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        borderRadius: 8,
        paddingHorizontal: 34,
        paddingVertical: 10,
        fontWeight: '600',
        color: appColors.black,
    },
});
