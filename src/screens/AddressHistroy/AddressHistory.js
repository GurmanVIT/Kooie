import { ScrollView, StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, Platform, Alert } from 'react-native'
import React from 'react'
import { appColors } from '../../utils/appColors'
import { ProfileFooter, ProfileHeader } from '../../components'
import AddCurrentAddress from '../../assets/svg/AddCurrentAddress';
// import Geolocation from 'react-native-geolocation-service';
import Geolocation from '@react-native-community/geolocation';
import { GOOGLE_MAPS_API_KEY } from '../../config/config';





const AddressHistory = ({ navigation }) => {

    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Location Permission",
                        message: "This app needs access to your location.",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("You can use the location");
                    return true;
                } else {
                    console.log("Location permission denied");
                    return false;
                }
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else {
            return true; // iOS handles permissions differently
        }
    };



    const getCurrentLocation = async () => {
        try {

            const position = await new Promise((resolve, reject) => {

                Geolocation.getCurrentPosition(
                    (position) => resolve(position.coords),
                    (error) => {
                        console.error('Error fetching location: ', error);
                        reject(error);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 15000,
                        maximumAge: 10000,
                        forceRequestLocation: true,
                        showLocationDialog: true,
                    }
                );
            }
            );

            if (position) {
                console.log('Position: ', position);
                return position;
            } else {
                throw new Error('Position is null');
            }
        } catch (error) {
            console.error('Error fetching location: ', error);
            alert('Failed to get your location. Please ensure location services are enabled and try again.');
            return null;
        }
    };

    const getAddressFromCoordinates = async (latitude, longitude) => {
        console.log({ latitude, longitude });
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`;

        console.log('URL is: ', url);
        try {
            const response = await axios.get(url);
            if (response?.data?.results?.length > 0) {
                return response?.data?.results[0]?.formatted_address;
            } else {
                throw new Error('No address found');
            }
        } catch (error) {
            console.error(error);
            return null;
        };
    };

    const getCurrentAddress = async () => {
        const hasLocationPermission = await requestLocationPermission();

        if (!hasLocationPermission) {
            Alert.alert("Location permission is required to fetch your current address.");
            return;
        }

        try {
            const coords = await getCurrentLocation();

            if (coords) {
                const { latitude, longitude } = coords;
                const address = await getAddressFromCoordinates(latitude, longitude);

                if (address) {
                    console.log("Current Address: ", address);
                    // You can now display or save this address
                } else {
                    alert("Unable to fetch address. Please try again.");
                }
            } else {
                alert("Unable to fetch location. Please ensure location services are enabled and try again.");
            }
        } catch (error) {
            console.error("Error fetching location or address: ", error);
            alert("An error occurred while fetching your address. Please try again.");
        }
    };


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


                <TouchableOpacity style={styles.addButtonStyle} onPress={getCurrentAddress}>
                    <AddCurrentAddress />
                    <Text style={{ color: appColors.black, marginLeft: 10 }}>Add current address</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.goBack()}>
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
};

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