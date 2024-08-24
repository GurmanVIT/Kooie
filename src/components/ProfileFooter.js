import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { appColors } from '../utils/appColors'

const ProfileFooter = () => {
    return (
        <View>
            <View style={styles.bottomLinkStyle}>
                <Text style={styles.privancyStyle}>Privacy Policy</Text>
                <Text style={styles.privancyStyle}>Terms and conditions</Text>
                <Text style={styles.privancyStyle}>Help centre</Text>
            </View>

            <Text style={{ marginTop: 14, textAlign: 'center', fontSize: 12, fontWeight: '600' }}>Kooie.com.au is owned and operated by xxx</Text>
        </View>
    )
}

export default ProfileFooter

const styles = StyleSheet.create({
    bottomLinkStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        borderBottomWidth: 2,
        borderColor: appColors.lightGrey,
        paddingBottom: 16,
        paddingHorizontal: moderateScale(10)
    },
    privancyStyle: {
        fontSize: 12,
        fontWeight: '600',
        color: appColors.black
    },
})