import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProfileHeader } from '../../components'
import { useNavigation } from '@react-navigation/native'

const TermAndCondition = () => {
    let navigation = useNavigation()
    return (
        <View>
            <ProfileHeader navigation={navigation} title={'Term & Conditions'} />
            <Text>TermAndCondition</Text>
        </View>
    )
}

export default TermAndCondition

const styles = StyleSheet.create({})