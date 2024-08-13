import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { appColors } from '../../utils/appColors';
import UpdateIcon from '../../assets/svg/UpdateIcon';
import { ProfileFooter, ProfileHeader } from '../../components';
import { AuthContext } from '../../Contexts/authContext';
import { BASE_URL } from '../../config/config';
import DocumentPicker, { types } from 'react-native-document-picker';





const About = ({ navigation }) => {
    const { authToken, userID } = useContext(AuthContext);
    const [aboutus, setAboutUs] = useState('');
    const [supotedDoc, setSupotedDoc] = useState('');
    const maxLength = 3000;
    const [loading, setLoading] = useState(false);

    console.log(supotedDoc);
    const pickFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [types.pdf, types.images], // Allow both PDFs and images
            });

            const validFormats = ['application/pdf', 'image/jpeg', 'image/png', 'image/gif'];
            const isValidFormat = validFormats.includes(res[0].type);
            const isValidSize = res[0].size <= 10 * 1024 * 1024; // 10MB in bytes

            if (isValidFormat && isValidSize) {
                setSupotedDoc(res?.[0])
                // uploadFile(res[0]);
            } else {
                Alert.alert('Invalid file format or size. Please select a PDF, JPG, JPEG, PNG, or GIF file under 10MB.');
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled document picker');
            } else {
                console.error('DocumentPicker Error: ', err);
            }
        }
    };

    const updateAboutMe = async () => {
        setLoading(true)
        if (!aboutus) {
            return Alert.alert('Please Introduce yourself!')
        }
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        let formdata = new FormData();
        formdata.append("id", userID);
        formdata.append("aboutus", aboutus);
        formdata.append("support_doc", supotedDoc);

        const requestOptions = { method: "POST", headers: myHeaders, body: formdata, };
        fetch(`${BASE_URL}/save/aboutme`, requestOptions).then((response) => response.json())
            .then(async (result) => {
                console.log({ result });

                if (result.status === '200') {
                    Alert.alert(result?.message)
                    navigation.goBack()
                    setLoading(false)
                } else {
                    Alert.alert(result?.message)
                    setLoading(false)

                }
            })
            .catch((error) => {
                console.error(error);
                setLoading(false)

            });

    }

    return (
        <View style={styles.containerStyle}>


            <ProfileHeader navigation={navigation} title={'Profile'} />
            <ScrollView style={{ flex: 1, paddingHorizontal: 16, }} showsVerticalScrollIndicator={false}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ fontSize: 12, fontWeight: '300', color: appColors.placeholderColor }}>Renter Profile</Text>
                    <Text style={styles.headStyle}>About me</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 10, color: appColors.black }}>Introduce yourself </Text>
                    <Text style={{ marginVertical: 6, color: appColors.black, fontWeight: '300' }}>Share with the agent and landlord why you are the bets fit for the property.</Text>

                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 10, marginLeft: 6 }}>Introduce yourself</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Type something..."
                        placeholderTextColor="gray"
                        value={aboutus}
                        onChangeText={setAboutUs}
                        multiline={true}
                        numberOfLines={4}
                        maxLength={maxLength}
                    />
                    <Text style={{ fontSize: 12, color: appColors.placeholderColor, marginTop: 8 }}>{aboutus.length}/{maxLength}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 16, color: appColors.black }}>Optional supporting documents</Text>
                    <Text style={{ marginTop: 8, color: appColors.black }}>Attach any supporting document you’d like e.g. letters of recommendation, tenant ledgers or company guarantees.</Text>

                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 14, marginLeft: 6 }}>Upload a file</Text>
                    <TouchableOpacity style={styles.updateButtonStyle} onPress={pickFile}>
                        <UpdateIcon />
                        <Text style={{ color: appColors.black, marginLeft: 10 }}>Upload a file</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, color: appColors.placeholder, textAlign: 'center', marginVertical: 10 }}>Max. 10MB - JPG, JPEG, PNG</Text>
                    <TouchableOpacity style={styles.button_} onPress={updateAboutMe}>
                        <Text style={styles.button_text}>Save and back</Text>
                    </TouchableOpacity>

                    <ProfileFooter />
                </View>


            </ScrollView>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,

    },
    collectionStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: appColors.black,
    },
    backIconStyle: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center'
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
    headSecoundStyle: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        color: appColors.black
    },
    textArea: {
        height: 180,
        padding: 10,
        borderColor: appColors.lightGrey,
        borderWidth: 1,
        borderRadius: 5,
        textAlignVertical: 'top',
        marginTop: 8
    },
    updateButtonStyle: {
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
        // marginHorizontal: 16,
        // padding: 16,
        borderRadius: 24,
        marginTop: 20,
        alignItems: 'center',
    },
    button_: {
        backgroundColor: appColors.red,
        height: 45,
        borderRadius: 45 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: appColors.white,
        fontWeight: 'bold',
        fontSize: 14
    },
});
