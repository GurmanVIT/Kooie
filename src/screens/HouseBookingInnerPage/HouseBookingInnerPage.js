import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { appColors } from '../../utils/appColors';
import SearchBottomIcon from '../../assets/svg/SearchBottomIcon';

const HouseBookingInnerPage = ({ navigation }) => {

    const [active, setActive] = useState(0);


    return (
        <View style={styles.containerStyle}>
            <View style={styles.headSearchStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <SearchBottomIcon stroke={appColors.grey} width={22} height={22} />
                    <Text style={styles.textInputStyle}> Chippendale, NSW 2008</Text>
                </View>
                <Text style={{ color: appColors.black }}>Cancel</Text>
            </View>
            <View style={styles.tabStyle}>
                <Text style={[styles.textStyles,
                {
                    color: active == 0 ? appColors.red : appColors.black,
                    borderBottomWidth: 1,
                    borderColor: appColors.red
                }]}
                >
                    Buy
                </Text>
                <View>
                    <Text style={[styles.textStyles, { color: appColors.grey }]} disabled>Rent</Text>
                    <Text style={{ color: appColors.grey, fontSize: 10 }} disabled>Comming Soon</Text>
                </View>
                <Text style={[styles.textStyles, { color: appColors.placeholderColor }]}>Sold</Text>
            </View>

            <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 30, }}>

                </View>
            </ScrollView >
        </View >
    );
};

export default HouseBookingInnerPage;

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
        justifyContent: 'space-between'
    },
    textInputStyle: {
        backgroundColor: appColors.lightGrey,
        padding: 6,
        fontSize: 12,
        borderRadius: 24,
        marginLeft: 10,
        color: appColors.black,
    },
    tabStyle: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: appColors.lightGrey,
        paddingVertical: 8
    },
    textStyles: {
        fontWeight: '600',
        textAlign: 'center'
    },
});
