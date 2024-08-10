import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import { appColors } from '../../utils/appColors';
import WhiteBackIcon from '../../assets/svg/WhiteBackIcon';
import CalenderIcon from '../../assets/svg/CalenderIcon';
import MenuIcon from '../../assets/svg/MenuIcon';


const Chat = ({ navigation }) => {

    return (
        <View style={styles.containerStyle}>
            <View style={styles.headerStyle}>
                <View style={{ height: 40, width: 40 }} >
                    <WhiteBackIcon onPress={() => navigation.goBack()} />
                </View>
                <Text style={styles.usernameStyle}>Chat</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{ marginHorizontal: 8 }}>
                        <CalenderIcon />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Menu')} >
                        <MenuIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                <Text>rfgejhbw</Text>

            </ScrollView >
        </View >
    );
};

export default Chat;

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
