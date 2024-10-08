import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { appColors } from '../../utils/appColors'
import { ProfileHeader } from '../../components'
import CheckBox from '@react-native-community/checkbox'
import { moderateScale } from 'react-native-size-matters'
import RNPickerSelect from 'react-native-picker-select';
import { AuthContext } from '../../Contexts/authContext'
import { useNavigation, useRoute } from '@react-navigation/native'
import { BASE_URL } from '../../config/config'

const Enquiry = ({ propID }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const item = route?.params
    const maxLength = 3000;
    const { userID, authToken } = useContext(AuthContext);

    //states
    const [loading, setLoading] = useState(false)
    const [enquiry, setEnquiry] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [fistName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [postcode, setPostcode] = useState();
    const [selectedValue, setSelectedValue] = useState("");
    const [preApproval, setPreApproval] = useState("");


    const handleCheckBoxChange = (option) => {
        setSelectedOption(option); // Set the selected option
    };


    const handleEnquiry = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);
        // if (!selectedOption || !(item?.propID) || !phone || !fistName || !lastName || !email || !enquiry || !postcode || !preApproval) {
        //     return Alert.alert('Please fill all the feilds!');
        // }
        const formdata = new FormData();
        formdata.append("phone", phone);
        formdata.append("first_name", fistName);
        formdata.append("last_name", lastName);
        formdata.append("message", enquiry);
        formdata.append("property_id", item?.propID);
        formdata.append("enquiry_about", selectedOption);
        formdata.append("postcode", postcode);
        formdata.append("tell_us", selectedValue);
        formdata.append("finance_pre_approval", preApproval);
        formdata.append("user_id", userID);
        formdata.append("email", email);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        setLoading(true)
        fetch(`${BASE_URL}/property/enquiry`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result)
                if (result?.status === 200) {
                    Alert.alert(result?.message)
                    navigation.goBack()
                    setLoading(false)
                } else {
                    Alert.alert(result?.messages)
                    setLoading(false)
                }
            })
            .catch((error) => {
                setLoading(false)
                console.error(error)
            });

    }





    return (
        <SafeAreaView style={styles.root_}>
            <ProfileHeader navigation={navigation} title={'Make an enquiry'} />
            <ScrollView style={styles.content_} showsVerticalScrollIndicator={false}>
                <View style={styles.top_section}>
                    <Text style={styles.text_20}>Whats your enquiry about?</Text>
                    {/* <View style={styles.containerCheckBox}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            boxType={'square'}
                            lineWidth={2}
                            tintColors={{ true: 'grey', false: 'grey' }}
                            onValueChange={newValue => setToggleCheckBox(newValue)}
                        />
                        <Text style={{ fontSize: 14, color: appColors.black, }}>Scheduling an inspection</Text>
                    </View> */}
                    <View style={styles.containerCheckBox}>
                        <CheckBox
                            disabled={false}
                            value={selectedOption === 'priceInfo'}
                            boxType={'square'}
                            lineWidth={2}
                            tintColors={{ true: appColors.red, false: 'grey' }}
                            onValueChange={() => handleCheckBoxChange('priceInfo')}
                        />
                        <Text style={{ fontSize: 14, color: appColors.black }}>Price information</Text>
                    </View>
                    <View style={styles.containerCheckBox}>
                        <CheckBox
                            disabled={false}
                            value={selectedOption === 'ratesAndFees'}
                            boxType={'square'}
                            lineWidth={2}
                            tintColors={{ true: appColors.red, false: 'grey' }}
                            onValueChange={() => handleCheckBoxChange('ratesAndFees')}
                        />
                        <Text style={{ fontSize: 14, color: appColors.black }}>Rates and fees</Text>
                    </View>
                    <View style={styles.containerCheckBox}>
                        <CheckBox
                            disabled={false}
                            value={selectedOption === 'similarProperties'}
                            boxType={'square'}
                            lineWidth={2}
                            tintColors={{ true: appColors.red, false: 'grey' }}
                            onValueChange={() => handleCheckBoxChange('similarProperties')}
                        />
                        <Text style={{ fontSize: 14, color: appColors.black }}>Finding similar properties</Text>
                    </View>

                    <TextInput
                        style={styles.textArea}
                        placeholder="Add a message"
                        placeholderTextColor="gray"
                        value={enquiry}
                        onChangeText={setEnquiry}
                        multiline={true}
                        numberOfLines={4}
                        maxLength={maxLength}
                    />

                    <Text style={{ fontSize: 16, color: appColors.black, fontWeight: '600', marginTop: 14, marginBottom: 6 }}>Enter your details</Text>
                    <View style={styles.input_container}>
                        <TextInput
                            placeholder='First Name (required)'
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                            value={fistName}
                            onChangeText={(val) => setFirstName(val)}
                        />
                    </View>
                    <View style={styles.input_container}>
                        <TextInput
                            placeholder='Last Name (required)'
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                            value={lastName}
                            onChangeText={(val) => setLastName(val)}
                        />
                    </View>

                    <View style={styles.input_container}>
                        <TextInput
                            placeholder='Email address (required)'
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                            value={email}
                            onChangeText={(val) => setEmail(val)}
                        />
                    </View>

                    <View style={styles.input_container}>
                        <TextInput
                            placeholder='Phone Number'
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                            keyboardType='phone-pad'
                            maxLength={10}
                            value={phone}
                            onChangeText={(val) => setPhone(val)}
                        />
                    </View>

                    <View style={styles.input_container}>
                        <TextInput
                            placeholder='Postcode'
                            placeholderTextColor={appColors.placeholderColor}
                            style={styles.input_}
                            keyboardType='phone-pad'
                            value={postcode}
                            onChangeText={(val) => setPostcode(val)}
                        />
                    </View>

                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 10 }}>Tell us a bit about you</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Write about you"
                        placeholderTextColor="gray"
                        value={selectedValue}
                        onChangeText={setSelectedValue}
                        multiline={true}
                        numberOfLines={4}
                        maxLength={maxLength}
                    />
                    {/* <View style={styles.pickerWrapper}>
                        <RNPickerSelect
                            onValueChange={(value) => setSelectedValue(value)}
                            value={selectedValue}
                            style={{ inputIOS: styles.input, inputAndroid: styles.input, }}
                            items={[
                                { label: "What type of properties are you interested?", value: "What type of properties are you interested in?" },
                                { label: "Do you prefer renting or buying?", value: "Do you prefer renting or buying?" },
                                { label: "What's your ideal living situation?", value: "What's your ideal living situation?" },
                            ]}
                        />
                        
                    </View> */}

                    <Text style={{ fontSize: 12, color: appColors.black, marginTop: 10 }}>Do you have finance pre-approval</Text>
                    {/* <View style={styles.pickerWrapper}>
                        <RNPickerSelect
                            onValueChange={(value) => setPreApproval(value)}
                            value={selectedValue}
                            style={{ inputIOS: styles.input, inputAndroid: styles.input, }}
                            items={[
                                { label: "No", value: "no" },
                                { label: "Yes", value: "yes" },
                            ]}
                        />
                    </View> */}
                    <TextInput
                        style={styles.textArea}
                        placeholder="Write about pre-approval"
                        placeholderTextColor="gray"
                        value={preApproval}
                        onChangeText={setPreApproval}
                        multiline={true}
                        numberOfLines={4}
                        maxLength={maxLength}
                    />

                    <Text style={{ fontSize: 13, marginTop: 6, color: appColors.grey }}>Having finance pre-approval means you’ve gotten the thumbs up from your bank to start making offers.</Text>
                    <View style={{ flexDirection: 'row', marginTop: 8, marginBottom: 14 }}>
                        <Text style={{ borderBottomWidth: 1, borderColor: appColors.placeholderColor, color: appColors.black }}>Personal information collection statement</Text>
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <TouchableOpacity style={styles.button_} onPress={handleEnquiry}>
                            {loading ?
                                <ActivityIndicator size={'small'} color={appColors.white} /> :
                                <Text style={styles.button_text}>Send enquiry</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Enquiry

const styles = StyleSheet.create({
    root_: {
        flex: 1,
        backgroundColor: appColors.white
    },
    content_: {
        paddingHorizontal: 16,
        marginTop: 10,
    },
    top_section: {
        marginBottom: 20,
        gap: 5
    },
    text_20: {
        color: appColors.black,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button_: {
        backgroundColor: appColors.red,
        height: 50,
        borderRadius: 50 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: appColors.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
    containerCheckBox: {
        backgroundColor: appColors.offWhite,
        borderRadius: 6,
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 8,
        alignItems: 'center',
        gap: 10,
        marginBottom: 8,
    },
    textArea: {
        height: 120,
        padding: 10,
        borderColor: appColors.lightGrey,
        borderWidth: 1,
        borderRadius: 5,
        textAlignVertical: 'top',
        color: appColors.black
    },
    input_container: {
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        width: '100%',
        height: 45,
        borderRadius: 5,
        paddingHorizontal: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input_: {
        color: appColors.inputColor
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: appColors.lightGrey,
        // marginTop: 6,
        borderRadius: 5,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        fontSize: 15,
        color: appColors.placeholderColor,
        backgroundColor: appColors.white,
    },
})