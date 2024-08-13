import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackIcon from '../assets/svg/BackIcon'
import { appColors } from '../utils/appColors'

const ProfileHeader = ({ navigation, title }) => {
    return (
        <View style={styles.header_}>

            <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: '33%' }}>
                <BackIcon width={35} height={35} />
            </TouchableOpacity>

            <Text style={styles.title_}>{title && title}</Text>

            <View style={styles.right_side} />
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({
    header_: {
        height: 60,
        // backgroundColor: appColors.lightGrey,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        width: '100%'
    },
    title_: {
        fontSize: 14,
        fontWeight: '700',
        color: appColors.black,
        maxWidth: '33%'
    },
    right_side: {
        width: '33%'
    }
})