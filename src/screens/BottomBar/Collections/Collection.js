import {
    ActivityIndicator,
    FlatList,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { appColors } from '../../../utils/appColors';
import HeartCollectionIcon from '../../../assets/svg/HeartCollectionIcon';
import SearchBottomIcon from '../../../assets/svg/SearchBottomIcon';
import ArrowRightIcon from '../../../assets/svg/ArrowRightIcon';
import MassageIcon from '../../../assets/svg/MassageIcon';
import HiddenIcon from '../../../assets/svg/HiddenIcon';
import TabCalendarIcon from '../../../assets/svg/TabCalendarIcon';
import { scale } from 'react-native-size-matters';
import { BASE_URL, IMAGE_URL } from '../../../config/config';
import Heart from '../../../assets/svg/Heart';
import BedIcon from '../../../assets/svg/BedIcon';
import ShawarIcon from '../../../assets/svg/ShawarIcon';
import CarIcon from '../../../assets/svg/CarIcon';
import MeterIcon from '../../../assets/svg/MeterIcon';
import HeartBottomIcon from '../../../assets/svg/HeartBottomIcon';
import { AuthContext } from '../../../Contexts/authContext';
import dateFormat from "dateformat";

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getNextDays = (numDays) => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < numDays; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        dates.push({
            day: daysOfWeek[nextDate.getDay()],
            date: nextDate.getDate(),
            isToday: i === 0,
        });
    }
    return dates;
};
const dates = getNextDays(30);





const Collection = ({ navigation }) => {
    const { userID, authToken } = useContext(AuthContext);
    const [active, setActive] = useState(0);
    const [loading, setLoading] = useState(false);
    const [propData, setPropData] = useState([]);
    const [favProp, setFavProp] = useState([]);

    // Fetch favorite properties (wishlist)
    useEffect(() => {
        favData(); // Fetch favorite property IDs first
    }, []);

    // Function to fetch favorite properties (wishlist)
    const favData = async () => {
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const formdata = new FormData();
        formdata.append("userid", '940');

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow",
        };

        try {
            const response = await fetch(`${BASE_URL}/get/wishlist/property`, requestOptions);
            const result = await response.json();
            if (result?.status === '200') {
                const favProperties = result?.data; // Save favorite property data
                setFavProp(favProperties); // Store favorites
                fetchData(favProperties); // Fetch all properties and filter them
            } else {
                alert(result?.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    };

    // Function to fetch all properties and filter by wishlist (favProp)
    const fetchData = async (favProperties) => {
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const formdata = new FormData();
        formdata.append("location", ''); // Include additional filters if needed

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
                const allProperties = result?.datas;

                // Extract property_id from favorite properties (wishlist)
                const favPropertyIds = favProperties.map(fav => fav.property_id);

                console.log({ favPropertyIds });

                // Filter the allProperties based on the wishlist's property_id
                const filteredProperties = allProperties.filter(prop => favPropertyIds.includes(prop.property_id));

                // Update the state with filtered properties
                setPropData(filteredProperties);
            } else {
                alert(result?.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // console.log({ propData });







    return (
        <View style={styles.containerStyle}>

            <Text style={styles.collectionStyle}>Collections</Text>


            <View style={styles.tabStyle}>
                <View style={{ width: '50%' }}>
                    <Text onPress={() => setActive(0)}
                        style={[styles.tab_text, active === 0 && { color: appColors.red, borderColor: appColors.red }]} >Properties </Text>
                </View>
                <View style={{ width: '50%' }}>
                    <Text onPress={() => setActive(1)}
                        style={[styles.tab_text, active === 1 && { color: appColors.red, borderColor: appColors.red }]}>Inspections</Text>
                </View>
            </View>
            <View style={{}} showsVerticalScrollIndicator={false} >
                {active === 0 ?
                    <>
                        {
                            <>
                                <View style={{}}>
                                    {/* <View style={{ alignItems: 'center', marginTop: 40 }}>
                            <View style={{ width: 96, height: 96 }}>
                                <HeartCollectionIcon />
                            </View>
                            <Text style={{ fontSize: 22, fontWeight: '600', color: appColors.black, marginTop: 20 }}>Collections</Text>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: appColors.black, marginTop: 30 }}>Collect your favorites</Text>
                            <Text style={{ fontSize: 16, fontWeight: '300', color: appColors.black, marginTop: 14, textAlign: 'center' }}>
                                Tap the Heart on any property to add it to this collection
                            </Text>

                            <View style={{ marginTop: 20 }}>
                                <View style={styles.searchButton}>
                                    <View style={{ width: 24, height: 24 }}>
                                        <SearchBottomIcon stroke={appColors.white} />
                                    </View>
                                    <Text style={{ fontWeight: '600', marginTop: 2, color: appColors.white, marginLeft: 8, }}>Start searching</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <View style={styles.enquiredStyle}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: 24, height: 24 }}>
                                            <MassageIcon />
                                        </View>
                                        <Text style={styles.textStyle}>Enquired</Text>
                                    </View>
                                    <View style={{ width: 24, height: 24 }}>
                                        <ArrowRightIcon />
                                    </View>
                                </View>

                                <View style={styles.enquiredStyle}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: 24, height: 24 }}>
                                            <HiddenIcon />
                                        </View>
                                        <Text style={styles.textStyle}>Hidden</Text>
                                    </View>
                                    <View style={{ width: 24, height: 24 }}>
                                        <ArrowRightIcon />
                                    </View>
                                </View>
                            </View>
                        </View> */}
                                    {loading ? (
                                        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                                            <ActivityIndicator size={'large'} color={appColors.lightRed} />
                                            <Text style={styles.loading_txt}>Loading properties, please wait...</Text>
                                        </View>
                                    ) : <>
                                        <FlatList
                                            data={propData}
                                            contentContainerStyle={styles.listContainer}
                                            showsVerticalScrollIndicator={false}
                                            // scrollEnabled={false}
                                            renderItem={({ item, index }) => {

                                                return (
                                                    <View style={styles.propCard} key={index}>
                                                        <TouchableOpacity onPress={() => navigation.navigate('HouseBookingInnerPage', { item })} >
                                                            <ImageBackground
                                                                style={styles.imgStyle}
                                                                resizeMode={(item?.cover_img) ? 'cover' : 'contain'}
                                                                source={(item?.cover_img) ? { uri: IMAGE_URL + item?.cover_img } : IMAGES.kooieBlackLogo}
                                                            >
                                                                <TouchableOpacity style={styles.favButton} >
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
                                    </>}

                                </View>
                            </>
                        }
                    </>
                    :
                    ""
                }

                {active === 1 ?
                    <View>
                        <View style={{ alignItems: 'center', marginTop: 40 }}>

                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                data={dates}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <View style={[styles.dateContainer, item.isToday && styles.todayContainer]}>
                                        <Text style={[styles.dateText, item.isToday && styles.todayDateText]}>{item.date}</Text>
                                        <Text style={styles.dayText}>{item.isToday ? 'Today' : item.day}</Text>
                                    </View>
                                )}
                                contentContainerStyle={styles.listContainer}
                            />

                            <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: '600', color: appColors.black, marginTop: 30 }}>Collect your favorites</Text>
                            <Text style={{ fontSize: 16, fontWeight: '300', color: appColors.black, marginTop: 14, textAlign: 'center' }}>
                                Whenever you add an event to your
                                plan, it’ll show up here.
                            </Text>

                            <View style={{ marginTop: 20 }}>
                                <View style={styles.searchButton}>
                                    <View style={{ width: 24, height: 24 }}>
                                        <TabCalendarIcon stroke={appColors.white} />
                                    </View>
                                    <Text style={{ fontWeight: '600', marginTop: 2, color: appColors.white, marginLeft: 8, }}>All inspection times</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    :
                    ""
                }
            </View>
        </View >
    );
};

export default Collection;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
        padding: 16,
    },
    collectionStyle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: appColors.black,
    },
    tabStyle: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 30,
    },
    tab_text: {
        textAlign: 'center',
        fontSize: scale(14),
        paddingBottom: 12,
        borderBottomWidth: 1,
        color: appColors.grey,
        borderColor: appColors.lightGrey,
    },
    searchButton: {
        backgroundColor: appColors.red,
        borderRadius: 35,
        paddingHorizontal: 30,
        paddingVertical: 16,
        flexDirection: 'row',
    },
    enquiredStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomWidth: 2,
        borderColor: appColors.lightGrey
    },
    textStyle: {
        color: appColors.black,
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 10,
    },
    listContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 28,
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    todayContainer: {
        borderColor: 'red',
        paddingHorizontal: 20
    },
    dateText: {
        fontSize: 26,
        fontWeight: '600',
    },
    todayDateText: {
        color: 'red',
    },
    dayText: {
        color: '#555',
    },
    imgStyle: {
        width: '100%',
        height: scale(250),
        borderTopRightRadius: scale(14),
        borderTopLeftRadius: scale(14),
        backgroundColor: appColors.offWhite
    },
    text_13: {
        fontSize: scale(13),
        fontWeight: '600',
        marginLeft: 6,
        color: appColors.black
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
    },
    loading_txt: {
        fontSize: 13,
        color: appColors.placeholderColor,
        fontWeight: '600',
    },
    propCard: {
        borderWidth: 1,
        borderColor: appColors.offWhite,
        borderRadius: scale(10),
        marginBottom: scale(15),
        overflow: 'hidden'
    },
    favButton: {
        width: scale(34),
        height: scale(34),
        padding: scale(5),
        borderRadius: scale(34 / 2),
        position: 'absolute',
        right: scale(10),
        top: scale(10),
        backgroundColor: appColors.white,
        alignItems: 'center',
        justifyContent: 'center'
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
});
