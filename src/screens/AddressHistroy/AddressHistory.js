import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appColors } from '../../utils/appColors'
import { ProfileFooter, ProfileHeader } from '../../components'
// import AddCurrentAddress from '../../assets/svg/addCurrentAddress'

const AddressHistory = ({ navigation }) => {

    return (
        <View style={styles.containerStyle}>
            <ProfileHeader navigation={navigation} title={'Profile'} />
            <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 12, fontWeight: '300', color: appColors.placeholderColor }}>Renter Profile</Text>
                <Text style={styles.headStyle}>Address history</Text>
                <Text style={styles.headSecoundStyle}>Address history</Text>
                <Text style={{ marginVertical: 6, color: appColors.black }}>Add two or more years of your most recent
                    address history and help verify your details with
                    a valid reference.
                </Text>
                <Text style={{ marginTop: 10, color: appColors.black }}>Your history could include living with parents
                    or the property you own.
                </Text>

                <Text style={{ fontSize: 12, color: appColors.black, marginTop: 10, marginLeft: 6 }}>Introduce yourself</Text>

                <View style={styles.addButtonStyle}>
                    {/* <AddCurrentAddress /> */}
                    <Text style={{ color: appColors.black, marginLeft: 10 }}>Add current address</Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('')}>
                    <Text style={{ color: appColors.white, fontWeight: '700' }}>
                        Save and back
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={{ marginBottom: 14 }}>
                <ProfileFooter />
            </View>
        </View>
    )
}

export default AddressHistory

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    headStyle: {
        fontSize: 18,
        fontWeight: '600',
        color: appColors.black,
        marginTop: 4
    },
    headSecoundStyle: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        color: appColors.black
    },
    addButtonStyle: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        alignSelf: 'center',
        padding: 16,
        borderRadius: 8,
        width: '100%'
    },
    buttonStyle: {
        color: appColors.white,
        backgroundColor: appColors.red,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 24,
        marginTop: 40,
        alignItems: 'center',
    },
})