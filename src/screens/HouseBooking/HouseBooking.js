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
import { BASE_URL, IMAGE_URL } from '../../config/config';
import dateFormat, { masks } from "dateformat";
import { AuthContext } from '../../Contexts/authContext';
import { IMAGES } from '../../assets';
import { scale } from 'react-native-size-matters';
import { useRoute } from '@react-navigation/native';






const HouseBooking = ({ navigation }) => {
    const { isLoading, checkToken, authToken, } = useContext(AuthContext);

    let route = useRoute()
    const item = route?.params;

    const [loading, setLoading] = useState(false)
    const [propData, setPropData] = useState([]);
    const [propCount, setPropCount] = useState(0);
    const [propSearch, setPropSearch] = useState('');
    console.log('props-->', propSearch);

    useEffect(() => {
        if (item) {
            setPropSearch(item)
            fetchData(item)
        } else {
            fetchData()

        }
    }, []);


    const fetchData = async (locations) => {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const formdata = new FormData();
        formdata.append("location", locations ? locations : '');

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch(`${BASE_URL}/search/property`, requestOptions).then((response) => response.json())
            .then(async (result) => {

                if (result?.status === '200') {
                    setPropData(result?.totaldata)
                    setPropCount(result?.totalCount)
                    setLoading(false)
                } else {
                    alert(result?.message)
                    setLoading(false)
                }
            })
            .catch((error) => {
                console.error(error)
                setLoading(false)
            });
    }





    return (
        <View style={styles.containerStyle}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: '10%', }}>
                    <BackIcon width={35} height={35} />
                </TouchableOpacity>

                <View style={styles.inputStyle}>

                    <TextInput
                        placeholder="sarching..."
                        placeholderTextColor={appColors.placeholderColor}
                        style={[styles.input_]}
                        value={propSearch}
                        onChangeText={(val) => setPropSearch(val)}
                    />
                    <TouchableOpacity style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center', }} onPress={() => fetchData(propSearch)}>
                        <SearchBottomIcon stroke={appColors.black} width={20} height={20} />
                    </TouchableOpacity>

                </View>

                <View style={{ width: '10%' }}>
                    <TouchableOpacity style={{ width: scale(30), height: scale(30), justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 34 / 2 }} onPress={() => navigation.navigate('Filters')}>
                        <Image source={IMAGES.filter} style={styles.iconStyle} resizeMode='contain' />
                        {/* <HeartBottomIcon stroke={appColors.grey} /> */}
                    </TouchableOpacity>
                </View>
            </View>

            {/* <View style={styles.tabStyle}>
                <Text style={styles.textStyles}>Sort</Text>
                <Text style={styles.textStyles}>Inspections</Text>
                <Text style={styles.textStyles}>Map</Text>
            </View> */}

            <View style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                {propCount > 0 && <Text style={{ color: appColors.black, textAlign: 'right' }}>{propCount} records found!</Text>}
                <View style={{ marginTop: 20 }}>
                    {loading ?
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '70%' }}>
                            <ActivityIndicator size={'large'} color={appColors.lightRed} />
                            <Text style={styles.loading_txt}>Please wait..</Text>
                        </View>
                        :
                        <FlatList
                            data={propData}
                            contentContainerStyle={styles.listContainer}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => {

                                return (
                                    <View style={{ borderWidth: 1, borderColor: appColors.offWhite, borderRadius: scale(10), marginBottom: scale(15), overflow: 'hidden' }} key={index}>
                                        <TouchableOpacity onPress={() => navigation.navigate('HouseBookingInnerPage', { details: item?.propbasic_details })} >
                                            <ImageBackground
                                                style={styles.imgStyle}
                                                resizeMode={(item?.cover_img) ? 'cover' : 'contain'}
                                                source={(item?.cover_img) ? { uri: IMAGE_URL + item?.cover_img } : IMAGES.kooieBlackLogo}
                                            >
                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <View style={{ padding: 14, }}>
                                            <Text style={styles.text_16}>For Sale {(item?.from_price) && '$' + (item?.from_price)} - {(item?.to_price) && '$' + (item?.to_price)} </Text>

                                            <Text style={styles.para_}>{(item?.title) && (item?.title)}</Text>

                                            <View style={{ marginVertical: 8, flexDirection: 'row', }}>

                                                {(item?.bedrooms) > 1 && <View style={styles.row_}>
                                                    <View style={styles.icon_container}>
                                                        <BedIcon />
                                                    </View>
                                                    <Text style={styles.text_13}>{(item?.bedrooms) ? (item?.bedrooms) : 0}</Text>
                                                </View>}

                                                {(item?.bathrooms) > 1 && <View style={styles.row_}>
                                                    <View style={styles.icon_container}>
                                                        <ShawarIcon />
                                                    </View>
                                                    <Text style={styles.text_13}>{(item?.bathrooms) ? (item?.bathrooms) : 0}</Text>
                                                </View>}

                                                {(item?.car_spaces) > 1 && <View style={styles.row_}>
                                                    <View style={styles.icon_container}>
                                                        <CarIcon />
                                                    </View>
                                                    <Text style={styles.text_13}>{(item?.car_spaces) ? (item?.car_spaces) : 0}</Text>
                                                </View>}

                                                <View style={styles.row_}>
                                                    <View style={styles.icon_container}>
                                                        <MeterIcon />
                                                    </View>
                                                    <Text style={styles.text_13}>600 m2</Text>
                                                </View>
                                            </View>

                                            <View>
                                                <Text style={styles.para_}>Inspection : <Text style={{ opacity: 1 }}>{(item.created_at) && dateFormat((item.created_at), "ddd, dd mmm yy")}</Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }}

                        />}

                </View>
            </View >
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
    text_13: {
        fontSize: scale(13),
        fontWeight: '600',
        marginLeft: 6,
        color: appColors.black
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: scale(10),
        paddingHorizontal: scale(16),
        width: '100%'
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
        paddingHorizontal: 14,
        width: '75%',
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft: 10,
        height: scale(35)
    },
    imgStyle: {
        width: '100%',
        height: scale(250),
        borderTopRightRadius: scale(14),
        borderTopLeftRadius: scale(14),
        backgroundColor: appColors.offWhite
    },
    input_: {
        color: appColors.black,
        width: '85%',
        overflow: 'hidden'
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
        marginRight: 10
    },
    icon_container: {
        width: 24,
        height: 24
    },
    text_16: {
        color: appColors.black,
        fontWeight: '600',
        fontSize: 16,

    },
    iconStyle: {
        width: '100%',
        height: '100%',

    },
    para_: {
        fontSize: scale(11),
        color: appColors.black,
        opacity: 0.5
    }
});
