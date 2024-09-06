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
import dateFormat from "dateformat";
import { AuthContext } from '../../Contexts/authContext';
import { IMAGES } from '../../assets';
import { scale } from 'react-native-size-matters';
import { useNavigation, useRoute } from '@react-navigation/native';
import Heart from '../../assets/svg/Heart';

const HouseBooking = () => {
    const { userID, authToken } = useContext(AuthContext);
    const navigation = useNavigation();
    let route = useRoute();
    const item = route?.params;

    const [loading, setLoading] = useState(false);
    const [propData, setPropData] = useState([]);
    const [propCount, setPropCount] = useState(0);
    const [propSearch, setPropSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedProperties, setSelectedProperties] = useState([]);
    // console.log('propData--------------------------------->', propData);

    useEffect(() => {
        if (item) {
            setPropSearch(item?.location);
            fetchData(item?.location);
        } else {
            fetchData();
        }
    }, [item,]);

    useEffect(() => {
        getSuggestions();
    }, [propSearch]);

    const fetchData = async (location) => {
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const formdata = new FormData();
        formdata.append("location", location || propSearch || '');
        formdata.append("bedroom", item?.BedroomsCount || '');
        formdata.append("bathroom", item?.BathroomsCount || '');
        formdata.append("carspaces", item?.CarSpaceCount || '');
        formdata.append("amount_range", item?.minSize || '');
        formdata.append("maximum_amount", item?.maxSize || '');

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow",
        };

        try {
            const response = await fetch(`${BASE_URL}/search/property`, requestOptions);
            const result = await response.json();
            if (result?.status === '200') {
                setPropData(result?.datas);
                setPropCount(result?.totalCount);
            } else {
                alert(result?.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const addFavourate = async (propertyId) => {
        console.log(propertyId, '<--propertyId');

        if (!propertyId) {
            return alert('Somthing is wrong!')
        }
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const formdata = new FormData();
        formdata.append("userid", userID || '');
        formdata.append("propertyid", propertyId || '');

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow",
        };

        try {
            const response = await fetch(`${BASE_URL}/save/property`, requestOptions);
            const result = await response.json();
            // console.log('saveProperty,', result);

            if (result?.status === '200') {
                alert(result?.message);
            } else {
                alert(result?.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getSuggestions = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const formdata = new FormData();
        formdata.append("toSearch", propSearch);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow",
        };

        try {
            const response = await fetch(`${BASE_URL}/suggested/search`, requestOptions);
            const result = await response.json();
            if (result?.Status === '200') {
                setSuggestions(result?.data?.original?.cities || []);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const renderSuggestionItem = ({ item }) => {
        const isSelected = selectedProperties.some(selectedItem => selectedItem.id === item.id);
        return (
            <TouchableOpacity
                style={[styles.suggestionItem, isSelected && styles.selectedItem]}
                onPress={() => handleSuggestionSelect(item)}
            >
                <Text style={[styles.suggestionText, isSelected && styles.selectedText]}>
                    {item?.place_name}, {item?.state_name} ({item?.postcode})
                </Text>

            </TouchableOpacity>
        );
    };

    const handleSuggestionSelect = (selectedItem) => {
        const isSelected = selectedProperties.some(item => item.id === selectedItem.id);
        if (isSelected) {
            // If the item is already selected, remove it
            setSelectedProperties(prev => prev.filter(item => item.id !== selectedItem.id));
        } else {
            // If the item is not selected, add it
            setSelectedProperties(prev => [...prev, selectedItem]);
        }
        setSuggestions([]); // Close the suggestions list after selection
    };

    return (
        <View style={styles.containerStyle}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: "10%", height: scale(50) }}>
                    <BackIcon width={35} height={35} />
                </TouchableOpacity>
                <View style={{ width: "75%" }}>
                    <View style={styles.inputStyle}>
                        <TextInput
                            placeholder="Search suburb, postcode or state"
                            placeholderTextColor={appColors.placeholderColor}
                            style={[styles.input_]}
                            value={propSearch}
                            onChangeText={(val) => setPropSearch(val)}
                        />
                        <TouchableOpacity
                            style={{ height: "100%", width: "20%", alignItems: "center", justifyContent: "center" }}
                            onPress={() => fetchData()}
                        >
                            <SearchBottomIcon stroke={appColors.black} width={20} height={20} />
                        </TouchableOpacity>
                    </View>
                    {suggestions.length > 0 && (
                        <View style={styles.suggestionContainer}>
                            <FlatList
                                data={suggestions}
                                renderItem={renderSuggestionItem}
                                keyExtractor={(item) => item.id.toString()}
                                style={styles.suggestionList}
                            />
                        </View>
                    )}
                </View>
                <View style={{ width: "10%" }}>
                    <TouchableOpacity
                        style={{
                            width: scale(30),
                            height: scale(30),
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 5,
                            borderRadius: 34 / 2,
                        }}
                        onPress={() => navigation.navigate("Filters")}
                    >
                        <Image source={IMAGES.filter} style={styles.iconStyle} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Show loading indicator separately */}
            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={'large'} color={appColors.lightRed} />
                    <Text style={styles.loading_txt}>Loading properties, please wait...</Text>
                </View>
            ) : (
                <View style={{ flex: 1, paddingHorizontal: 16 }}>
                    {propCount > 0 ? (
                        <FlatList
                            data={propData}
                            contentContainerStyle={styles.listContainer}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                console.log('itemitemitemitem', item?.property_id);

                                return (
                                    <View style={{ borderWidth: 1, borderColor: appColors.offWhite, borderRadius: scale(10), marginBottom: scale(15), overflow: 'hidden' }} key={index}>
                                        <TouchableOpacity onPress={() => navigation.navigate('HouseBookingInnerPage', { item })} >
                                            <ImageBackground
                                                style={styles.imgStyle}
                                                resizeMode={(item?.cover_img) ? 'cover' : 'contain'}
                                                source={(item?.cover_img) ? { uri: IMAGE_URL + item?.cover_img } : IMAGES.kooieBlackLogo}
                                            >
                                                <TouchableOpacity style={{ width: scale(34), height: scale(34), padding: scale(5), borderRadius: scale(34 / 2), position: 'absolute', right: scale(10), top: scale(10), backgroundColor: appColors.white, alignItems: 'center', justifyContent: 'center' }} onPress={() => addFavourate(item?.property_id)}>
                                                    {
                                                        <Heart size={scale(24)} color={appColors.red} />
                                                        // <HeartBottomIcon stroke={appColors.red} />
                                                    }
                                                </TouchableOpacity>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <View style={{ padding: 14, }}>
                                            <Text style={styles.text_16}>For Sale {(item?.po_price) ? '$' + (item?.po_price) : (item?.from_price) && '$' + (item?.from_price)} {((item?.from_price) || (item?.to_price)) && ' - '} {(item?.to_price) && '$' + (item?.to_price)} </Text>

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

                                                {(item?.propbasic_details[0]?.interior) && <View style={styles.row_}>
                                                    <View style={styles.icon_container}>
                                                        <MeterIcon />
                                                    </View>
                                                    <Text style={styles.text_13}>{(item?.propbasic_details[0]?.interior) && (item?.propbasic_details[0]?.interior)}</Text>
                                                </View>}
                                            </View>

                                            <View>
                                                <Text style={styles.para_}>Inspection : <Text style={{ opacity: 1 }}>{(item.created_at) && dateFormat((item.created_at), "ddd, dd mmm yy")}</Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }}

                        />

                    ) : (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.loading_txt}>No properties found!</Text>
                        </View>

                    )}
                </View>
            )}
        </View>
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
        // alignItems: 'center',
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
        width: '100%',
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
    suggestionContainer: {
        position: 'absolute',
        top: scale(50),
        left: 0,
        right: 0,
        zIndex: 1
    },
    suggestionList: {
        // marginTop: scale(10),
        backgroundColor: appColors.white,
        borderRadius: 8,
        maxHeight: 200,
    },
    suggestionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: appColors.lightGrey,

    },
    suggestionText: {
        color: appColors.black,
    },
    selectedContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    selectedItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },
    selectedItemText: {
        color: appColors.black,
        fontSize: 14,
    },
    removeText: {
        color: 'red',
    },
    selectedItem: {
        backgroundColor: '#e0f7fa',
    },
    selectedText: {
        color: appColors.primary,
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
