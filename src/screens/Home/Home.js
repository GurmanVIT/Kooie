import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { appColors } from '../../utils/appColors';
import Images from '../theme/Images';
import SearchIcon from '../../assets/svg/SearchIcon';
import HeartIcon from '../../assets/svg/HeartIcon';
import PropertyIcon from '../../assets/svg/PropertyIcon';
import AgentImage from '../../assets/svg/AgentImage';
import RedSearchIcon from '../../assets/svg/RedSearchIcon';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { AuthContext } from '../../Contexts/authContext';
import { BASE_URL, IMAGE_URL } from '../../config/config';
import dateFormat from 'dateformat';
import { useFocusEffect } from '@react-navigation/native';




const Home = ({ navigation }) => {
    const { userID, authToken } = useContext(AuthContext);
    const [isEnabled, setIsEnabled] = useState(true);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [recentSearch, setRecentSearch] = useState([]);
    const [news, setNews] = useState([]);
    const [isPropInsight, setPropInsight] = useState([]);
    const [isGuideInspireation, setGuideInspireation] = useState([]);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    useFocusEffect(
        useCallback(() => {
            fetchData();
            latestNews();
            PropInsights();
            GuideInspireation();
        }, [])
    );

    const fetchData = async () => {
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const formdata = new FormData();
        formdata.append("user_id", userID);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch(`${BASE_URL}/get/recent/search`, requestOptions)
            .then(response => response.json())
            .then(result => {

                if (result?.status === '200') {
                    setRecentSearch(result?.data)
                    setLoading(false);
                } else {
                    alert(result?.message);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    };
    const latestNews = async () => {
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const formdata = new FormData();
        formdata.append("category_id", "8");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch(`${BASE_URL}/get/latest/news`, requestOptions)
            .then(response => response.json())
            .then(result => {

                if (result?.status === '200') {
                    setNews(result?.data)
                    setLoading(false);
                } else {
                    alert(result?.message);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });

    };
    const PropInsights = async () => {
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const formdata = new FormData();
        formdata.append("category_id", "9");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch(`${BASE_URL}/get/latest/news`, requestOptions)
            .then(response => response.json())
            .then(result => {

                if (result?.status === '200') {
                    setPropInsight(result?.data)
                    setLoading(false);
                } else {
                    alert(result?.message);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });

    };
    const GuideInspireation = async () => {
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const formdata = new FormData();
        formdata.append("category_id", "10");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch(`${BASE_URL}/get/latest/news`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log({ result });

                if (result?.status === '200') {
                    setGuideInspireation(result?.data)
                    setLoading(false);
                } else {
                    alert(result?.message);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });

    };

    return (
        <View style={styles.containerStyle}>

            <ScrollView style={{ flex: 1, marginBottom: 10 }} showsVerticalScrollIndicator={false}>
                <ImageBackground style={{ height: 200, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }} source={Images.country_img}>
                    <Pressable style={styles.searchContainer} onPress={() => navigation.navigate('HouseBooking', search)}>

                        <TextInput
                            style={styles.input}
                            placeholder="Start searching"
                            placeholderTextColor="#aaa"
                            onChangeText={setSearch}
                            value={search}
                            editable={false}
                        />
                        <TouchableOpacity>
                            <RedSearchIcon />
                        </TouchableOpacity>
                    </Pressable>
                </ImageBackground>

                <View style={{ paddingHorizontal: moderateScale(16) }}>

                    <View style={styles.switchContainer}>
                        <Text style={styles.text_14}>Recent searches</Text>
                        <Switch
                            trackColor={{ false: '#edf3f6', true: '#FF474C' }}
                            thumbColor={isEnabled ? '#fff' : '#fff'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    {isEnabled &&
                        <>

                            {recentSearch?.location && <TouchableOpacity style={styles.iconTextStyle} onPress={() => navigation.navigate('HouseBooking', recentSearch)}>
                                <View style={{ flexDirection: 'row', gap: scale(5), alignItems: 'center' }}>
                                    <View style={{ width: scale(40), height: scale(40) }}>
                                        <SearchIcon />
                                    </View>
                                    <View>
                                        <Text style={styles.text_12}>{recentSearch?.location}</Text>
                                        <Text style={styles.para_}>{recentSearch?.Property_subtype} - {recentSearch?.price_range}</Text>
                                    </View>
                                </View>
                                {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: scale(20), height: scale(20) }}>
                                        <HeartIcon />
                                    </View>
                                    <Text style={styles.text_12}>Save</Text>
                                </View> */}
                            </TouchableOpacity>}

                        </>
                    }

                    {/* <Text style={styles.text_14}>Suggestions for you</Text>

                    <FlatList
                        data={DATA}
                        style={{ marginVertical: verticalScale(10) }}
                        scrollEnabled={false}
                        keyExtractor={item => (item.id).toString()}
                        renderItem={() => (
                            <View style={styles.propertyIconText}>
                                <View style={{ width: '30%', }}>
                                    <View style={{ width: '100%', height: scale(60) }}>
                                        <PropertyIcon />
                                    </View>
                                </View>
                                <View style={{ marginLeft: 16, flex: 1, width: '70%', }}>
                                    <Text style={{ fontSize: 16, fontWeight: '600', color: appColors.black }}>Get an estimate</Text>
                                    <Text style={styles.para_}>See how much a property is worth</Text>
                                </View>
                            </View>
                        )}
                    /> */}

                    {news && news?.length > 0 && <>
                        <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '600', color: appColors.black }}>Latest News</Text>
                        <FlatList
                            data={news}
                            keyExtractor={item => item?.id}
                            horizontal
                            style={{ marginTop: 12 }}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ width: 240, marginRight: 14 }} key={index}>
                                        <View style={{ width: 240, height: 160, }}>
                                            <Image source={{ uri: IMAGE_URL + "images/" + item?.featured_img }} style={{ width: '100%', height: '100%', borderRadius: scale(10) }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontWeight: '600', color: appColors.black, fontSize: 15, marginTop: 8 }}>{(item?.image_title) && item?.image_title}</Text>
                                            <Text style={{ marginTop: 4, fontSize: 12 }}>{dateFormat(item?.created_at, "mmm dd, yyyy")}</Text>
                                        </View>
                                    </View>

                                )
                            }}

                        />
                    </>}

                    {isPropInsight && isPropInsight.length > 0 &&
                        <>
                            <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '600', color: appColors.black }}>Property Insights</Text>
                            <FlatList
                                data={isPropInsight}
                                horizontal
                                style={{ marginTop: 12 }}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={{ width: 240, marginRight: 14 }} key={index}>
                                            <View style={{ width: 240, height: 160, }}>
                                                <Image source={{ uri: IMAGE_URL + "images/" + item?.featured_img }} style={{ width: '100%', height: '100%', borderRadius: scale(10) }} />
                                            </View>
                                            <View>
                                                <Text style={{ fontWeight: '600', color: appColors.black, fontSize: 15, marginTop: 8 }}>{(item?.image_title) && item?.image_title}</Text>
                                                <Text style={{ marginTop: 4, fontSize: 12 }}>{dateFormat(item?.created_at, "mmm dd, yyyy")}</Text>
                                            </View>
                                        </View>

                                    )
                                }}
                            />
                        </>
                    }
                    {isGuideInspireation && isGuideInspireation.length > 0 && <>
                        <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '600', color: appColors.black }}>Guides & Inspiration</Text>
                        <FlatList
                            data={isGuideInspireation}
                            horizontal
                            style={{ marginTop: 12 }}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) => {
                                // console.log({ item });

                                return (
                                    <View style={{ width: 240, marginRight: 14 }} key={index}>
                                        <View style={{ width: 240, height: 160, }}>
                                            <Image source={{ uri: IMAGE_URL + "images/" + item?.featured_img }} style={{ width: '100%', height: '100%', borderRadius: scale(10) }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontWeight: '600', color: appColors.black, fontSize: 15, marginTop: 8 }}>{(item?.image_title) && item?.image_title}</Text>
                                            <Text style={{ marginTop: 4, fontSize: 12 }}>{dateFormat(item?.created_at, "mmm dd, yyyy")}</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </>
                    }
                </View>
            </ScrollView>
        </View >
    );
};

export default Home;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginVertical: verticalScale(10)
    },
    text_14: {
        fontSize: scale(14),
        color: appColors.black,
        fontWeight: '600',
    },
    text_12: {
        color: appColors.black,
        fontSize: scale(12),
        fontWeight: '600'
    },
    para_: {
        fontSize: scale(11),
        color: appColors.black,
        opacity: 0.5
    },
    iconTextStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: scale(10),
        borderColor: appColors.lightGrey,
    },
    propertyIconText: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 2,
        borderColor: appColors.lightGrey,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: appColors.white,
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,
        elevation: 3,
        shadowColor: appColors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1.5,
        width: '70%',
        marginBottom: 30
    },
    input: {
        flex: 1,
        height: 40,
        color: appColors.black,
        fontSize: scale(13)
    },
});
