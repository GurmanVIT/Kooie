import { ActivityIndicator, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { appColors } from '../../utils/appColors';
import BackIcon from '../../assets/svg/BackIcon';
import SearchBottomIcon from '../../assets/svg/SearchBottomIcon';
import HeartBottomIcon from '../../assets/svg/HeartBottomIcon';
import MeterIcon from '../../assets/svg/MeterIcon';
import CarIcon from '../../assets/svg/CarIcon';
import ShawarIcon from '../../assets/svg/ShawarIcon';
import BedIcon from '../../assets/svg/BedIcon';
import Images from '../theme/Images';
import TransparentHeart from '../../assets/svg/TransparentHeart';
import { BASE_URL } from '../../config/config';
import dateFormat, { masks } from "dateformat";
import { AuthContext } from '../../Contexts/authContext';






const HouseBooking = ({ navigation }) => {
    const { isLoading, checkToken, authToken, } = useContext(AuthContext);


    const [propData, setPropData] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetchData()
    }, []);


    const fetchData = async () => {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const formdata = new FormData();
        formdata.append("id", "263");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch(`${BASE_URL}/get/saveproperty`, requestOptions).then((response) => response.json())
            .then(async (result) => {

                if (result.status === '200') {
                    setPropData(result?.savesearch)
                    setLoading(false)
                } else {
                    Alert.alert(result?.message)
                    setLoading(false)
                }
            })
            .catch((error) => console.error(error));
    }

    // console.log('propData', propData);



    return (
        <View style={styles.containerStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, paddingHorizontal: 16 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon width={35} height={35} />
                </TouchableOpacity>
                <View style={[styles.inputStyle, { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, height: 40 }]}>
                    <SearchBottomIcon stroke={appColors.grey} width={20} height={20} />
                    <TextInput
                        placeholder="sarching..."
                        placeholderTextColor={appColors.placeholderColor}
                        style={
                            [styles.inputStyle, { paddingLeft: 4, width: "85%", }]
                        }
                    />
                </View>
                <TouchableOpacity style={{ width: 24, height: 24 }}>
                    <HeartBottomIcon stroke={appColors.grey} />
                </TouchableOpacity>
            </View>
            <View style={styles.tabStyle}>
                <Text style={styles.textStyles}>Sort</Text>
                <Text style={styles.textStyles}>Inspections</Text>
                <Text style={styles.textStyles}>Map</Text>
            </View>
            <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 20 }}>
                    {loading ?
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '70%' }}>
                            <ActivityIndicator size={'large'} color={appColors.lightRed} />
                            <Text style={styles.loading_txt}>Please wait..</Text>
                        </View>
                        : <FlatList
                            data={propData}
                            scrollEnabled={false}
                            // keyExtractor={(index) => index.toString()}
                            contentContainerStyle={styles.listContainer}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => {

                                return (
                                    <View style={{ borderWidth: 1, borderColor: appColors.offWhite, borderRadius: 14, marginBottom: 16 }} key={index}>
                                        <TouchableOpacity onPress={() => navigation.navigate('HouseBookingInnerPage')}>
                                            <ImageBackground
                                                style={{ width: '100%', height: 250, borderTopRightRadius: 14, borderTopLeftRadius: 14 }}
                                                resizeMode="stretch"
                                                source={Images.house}
                                            >
                                                <View style={{ position: 'absolute', right: 18, top: 18 }}>
                                                    <TransparentHeart />
                                                </View>
                                                <Text style={styles.residentialStyle}>RESIDENTIAL</Text>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <View style={{ padding: 14, }}>
                                            <Text style={styles.text_16}>For Sale {(item?.max_price) && '$' + (item?.max_price)} - {(item?.max_price) && '$' + (item?.max_price)} </Text>

                                            <Text>{(item?.city) && (item?.city)}</Text>

                                            <View style={{ marginVertical: 8, flexDirection: 'row', gap: 25 }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={styles.row_}>
                                                        <View style={styles.icon_container}>
                                                            <BedIcon />
                                                        </View>
                                                        <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 6 }}>{(item?.bed_room) ? (item?.bed_room) : 0}</Text>
                                                    </View>
                                                    <View style={styles.row_}>
                                                        <View style={styles.icon_container}>
                                                            <ShawarIcon />
                                                        </View>
                                                        <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 6, color: appColors.black }}>{(item?.bathroom) ? (item?.bathroom) : 0}</Text>
                                                    </View>
                                                    <View style={styles.row_}>
                                                        <View style={styles.icon_container}>
                                                            <CarIcon />
                                                        </View>
                                                        <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 6, color: appColors.black }}>{(item?.car_spaces) ? (item?.car_spaces) : 0}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.row_}>
                                                    <View style={styles.icon_container}>
                                                        <MeterIcon />
                                                    </View>
                                                    <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 6, color: appColors.black }}>600 m2</Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text>Inspection : <Text style={{ color: appColors.black, }}>{(item.created_at) && dateFormat((item.created_at), "ddd, dd mmm")}</Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }}

                        />}

                </View>
            </ScrollView >
        </View >
    );
};

export default HouseBooking;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    collectionStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: appColors.black,
    },
    settingIconStyle: {
        backgroundColor: appColors.red,
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        borderRadius: 8,
        backgroundColor: appColors.lightGrey,
        paddingLeft: 14,
        color: appColors.black,
        width: '70%',
    },
    tabStyle: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: appColors.lightGrey,
        paddingVertical: 14
    },
    textStyles: {
        color: appColors.black,
        fontWeight: '600',
    },
    loading_txt: {
        fontSize: 13,
        color: appColors.placeholderColor,
        fontWeight: '600',
    },
    residentialStyle: {
        fontSize: 12,
        fontWeight: '600',
        backgroundColor: appColors.white,
        color: appColors.black,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 18,
        textAlign: 'center',
        position: 'absolute',
        left: 14,
        borderWidth: 1,
        borderColor: appColors.grey,
        bottom: 14
    },
    row_: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 14
    },
    icon_container: {
        width: 24,
        height: 24
    },
    text_16: {
        color: appColors.black,
        fontWeight: '600',
        fontSize: 16,

    }
});
