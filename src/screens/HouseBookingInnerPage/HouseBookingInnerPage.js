import { ActivityIndicator, Alert, Dimensions, FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { appColors } from '../../utils/appColors';
import SearchBottomIcon from '../../assets/svg/SearchBottomIcon';
import BackIcon from '../../assets/svg/BackIcon';
import HeartBottomIcon from '../../assets/svg/HeartBottomIcon';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { IMAGES } from '../../assets';
import House from '../../assets/svg/House';
import BedIcon from '../../assets/svg/BedIcon';
import CarIcon from '../../assets/svg/CarIcon';
import ShawarIcon from '../../assets/svg/ShawarIcon';
import MeterIcon from '../../assets/svg/MeterIcon';
import LandSize from '../../assets/svg/LandSize';
import Calculater from '../../assets/svg/Calculater';
import ArrowRightIcon from '../../assets/svg/ArrowRightIcon';
import Deck from '../../assets/svg/Deck';
import Courtyard from '../../assets/svg/Courtyard';
import SpaIcon from '../../assets/svg/SpaIcon';
import Video from 'react-native-video';
import ArrowUp from '../../assets/svg/ArrowUp';
import MapView, { Marker } from 'react-native-maps';
import PhoneIcon from '../../assets/svg/PhoneIcon';
import MailIcon from '../../assets/svg/MailIcon';
import Images from '../theme/Images';
import TransparentHeart from '../../assets/svg/TransparentHeart';
import Calender from '../../assets/svg/Calender';
import Clock from '../../assets/svg/Clock';
import ArrowDown from '../../assets/svg/ArrowDown';
import { useRoute } from '@react-navigation/native';
import { APPNAME, BASE_URL, IMAGE_URL } from '../../config/config';
import { AuthContext } from '../../Contexts/authContext';
import HeartIcon from '../../assets/svg/HeartIcon';
import Amenities from '../../assets/svg/Amenities';
import call from 'react-native-phone-call';
import Mailer from 'react-native-mail';
import YoutubeIframe from 'react-native-youtube-iframe';
import dateFormat, { masks } from "dateformat";
import { differenceInHours, parseISO } from 'date-fns';
import SvgUri from 'react-native-svg-uri';






const HouseBookingInnerPage = ({ navigation }) => {
    const { isLoading, checkToken, authToken } = useContext(AuthContext);
    let route = useRoute();
    const propID = route?.params?.item?.id;
    const flatListRef = useRef(null);

    // States
    const [loading, setLoading] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [floorExpand, setFloorExpand] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [propData, setPropData] = useState([]);
    const [simillerProp, setSimillerProp] = useState([]);
    const [isAmenties, setAmenties] = useState([]);
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });
    const [videoURL, setVideoURL] = useState(null);

    const onViewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    };

    useEffect(() => {
        if (propID) {
            fetchData();
        }
    }, [propID]);

    useEffect(() => {
        if (propData && propData?.length > 0) {
            const videoUrl = propData[0]?.vedios[0]?.image_vedio_file;
            if (videoUrl) {
                const videoId = extractVideoId(videoUrl);
                setVideoURL(videoId);
            } else {
                console.log('No valid video URL found.');
            }
        }
    }, [propData]);

    const fetchData = async () => {
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const formdata = new FormData();
        formdata.append("id", propID);
        // formdata.append("amount_range", '793');

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch(`${BASE_URL}/propertydetail`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result?.status === '200') {
                    setPropData(result?.data);
                    setSimillerProp(result?.data2)
                    setRegion({
                        latitude: parseFloat(result?.data[0]?.latitude),
                        longitude: parseFloat(result?.data[0]?.longitude),
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                    setAmenties(result?.Amenties);
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

    const sendMail = async (mailID) => {
        if (!mailID) {
            Alert.alert('Email not found!');
            return;
        }
        Mailer.mail(
            {
                subject: 'Need help',
                recipients: [mailID],
                ccRecipients: ['supportCC@example.com'],
                bccRecipients: ['supportBCC@example.com'],
                body: '<b>A Bold Body</b>',
                customChooserTitle: 'This is my new title',
                isHTML: true,
                attachments: [
                    {
                        path: '',
                        uri: '',
                        type: '',
                        mimeType: '',
                        name: '',
                    },
                ],
            },
            (error, event) => {
                if (error) {
                    Alert.alert('Error', 'Could not send email. Please try again.');
                    console.error('Error:', error);
                } else {
                    Alert.alert('Success', 'Email sent successfully!');
                    console.log('Event:', event);
                }
            }
        );
    };

    const callAgent = async (agentNum) => {
        if (!agentNum) {
            return alert('Contact number not found!');
        }
        const args = {
            number: agentNum,
            prompt: true,
            skipCanOpen: true,
        };

        call(args).catch(error => {
            Alert.alert('Error', 'Unable to make a phone call. Please try again later.');
            console.error('Error making a phone call:', error);
        });
    };

    const extractVideoId = (url) => {
        if (!url) {
            return null;
        }
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const matches = url.match(regex);
        return matches ? matches[1] : null;
    };

    const calculateHoursFromDate = (dateString) => {
        // Parse the ISO date string
        const date = parseISO(dateString);

        // Get the current date
        const now = new Date();

        // Calculate the difference in hours
        const hoursDifference = differenceInHours(now, date);

        return `${hoursDifference} hrs`;
    };
    // console.log('propData && (propData[0]?.floorplane_link)', propData && (propData[0]?.floorplane_link).length > 0);


    return (
        <View style={styles.containerStyle}>
            <View style={styles.header_}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon width={35} height={35} />
                </TouchableOpacity>
                <Text style={styles.text_13}>Property Details</Text>
                <TouchableOpacity style={{ width: 34, height: 34, padding: 5, borderRadius: 34 / 2 }}>
                    <HeartBottomIcon stroke={appColors.grey} />
                </TouchableOpacity>
            </View>


            {loading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <ActivityIndicator color={appColors.red} size={'large'} />
                    <Text style={styles.para_}>Please wait..</Text>
                </View>
                :
                <>
                    <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>
                        <View style={{ marginTop: 30, gap: scale(10) }}>
                            {/* companyLogo */}

                            {(propData && propData[0]?.agent_agency?.agency_banar_img) &&
                                <Image
                                    source={(propData && propData[0]?.agent_agency?.agency_banar_img) && { uri: (IMAGE_URL + propData[0]?.agent_agency?.agency_banar_img) }}
                                    style={styles.companyLogo}
                                    resizeMode='contain'
                                    alt='Agency Logo' />}

                            {/* property images */}
                            <View style={styles.container}>
                                <FlatList
                                    ref={flatListRef}
                                    data={propData && propData[0]?.image_vedio_link}
                                    horizontal
                                    pagingEnabled
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <View style={styles.imageContainer}>
                                            <Image source={{ uri: IMAGE_URL + item?.image_vedio_file }} style={styles.image} resizeMode='cover' />
                                        </View>
                                    )}
                                    onViewableItemsChanged={onViewableItemsChanged}
                                    viewabilityConfig={{ itemVisiblePercentThreshold: 50, }}
                                />
                                <View style={styles.indexContainer}>
                                    <Text style={styles.indexText}>{`${currentIndex + 1} of ${propData && propData[0]?.image_vedio_link.length}`}</Text>
                                </View>
                            </View>

                            <View style={{ paddingHorizontal: 16, marginBottom: scale(20) }}>
                                <View style={styles.sections}>
                                    <Text style={styles.text_14}>For Sale {(propData && propData[0]?.from_price) ? (propData && '$' + propData[0]?.from_price + ' -') : null}  {(propData && propData[0]?.to_price) ? (propData && '$' + propData[0]?.to_price) : null}</Text>
                                    <Text style={styles.para_}>{propData && propData[0]?.street_address}</Text>
                                </View>

                                <View style={styles.line__} />

                                {propData && (propData[0]?.propamenties_key_count) &&
                                    <View style={styles.sections}>
                                        <Text style={styles.text_14}>Key insights</Text>

                                        <FlatList
                                            data={propData && propData[0]?.propamenties_key_count}
                                            numColumns={2}
                                            scrollEnabled={false}
                                            renderItem={({ item }) => {

                                                return (
                                                    <View style={styles.itemContainer}>
                                                        <View style={styles.iconContainer}>
                                                            {item?.key_name === 'Bedrooms' ?
                                                                <BedIcon size={scale(20)} color={appColors.red} /> :
                                                                item?.key_name === 'Bathrooms' ?
                                                                    <ShawarIcon size={scale(20)} color={appColors.red} /> :
                                                                    item?.key_name === 'Toilet' ?
                                                                        <ShawarIcon size={scale(20)} color={appColors.red} /> :
                                                                        item?.key_name === 'Living Area' ?
                                                                            <LandSize size={scale(20)} color={appColors.red} /> :
                                                                            item?.key_name === 'Garages' ?
                                                                                <Deck size={scale(20)} color={appColors.red} /> :
                                                                                item?.key_name === 'Carports' ?
                                                                                    <CarIcon size={scale(20)} color={appColors.red} /> :
                                                                                    <HeartIcon size={scale(20)} color={appColors.red} />


                                                            }
                                                        </View>
                                                        <View style={styles.textContainer}>
                                                            <Text style={styles.label}>{item?.key_name}</Text>
                                                            <Text style={styles.value}>{item?.totalcount + " " + item?.key_name}</Text>
                                                        </View>
                                                    </View>
                                                );
                                            }}
                                            keyExtractor={(item, index) => index.toString()}
                                            contentContainerStyle={styles.keysContainer}
                                        />


                                    </View>
                                }
                                <View style={styles.line__} />

                                <View style={styles.sections}>
                                    <Text style={styles.text_14}>Home Loan Calculator</Text>
                                    <View style={styles.row_between}>
                                        <View style={styles.row_}>
                                            <Calculater size={scale(20)} color={appColors.red} />
                                            <View>
                                                <Text style={styles.text_13}>$4,709/month</Text>
                                                <Text style={styles.para_}>estimated repayment</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={styles.calculateButton}>
                                            <Text style={styles.text_13}>Calculate</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <View style={styles.line__} />

                                <View style={styles.sections}>
                                    <Text style={styles.text_14}>Your Home Loan</Text>

                                    <TouchableOpacity style={styles.row_between}>
                                        <View style={{ width: '80%', marginVertical: verticalScale(10) }}>
                                            <Text style={[styles.para_,]}>While you search for your home, we can search for your home loan.</Text>
                                        </View>
                                        <ArrowRightIcon size={scale(20)} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.line__} />

                                {propData && (propData[0]?.propbasic_details[0]?.description) &&
                                    <View style={styles.sections}>
                                        <Text style={styles.text_14}>Description</Text>
                                        <Text
                                            style={[styles.description, { maxHeight: expanded ? undefined : 68, }]}
                                            numberOfLines={expanded ? 0 : 4}
                                            ellipsizeMode="tail"
                                        >
                                            {propData && propData[0]?.propbasic_details[0]?.description}
                                        </Text>
                                        <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.toggleButton}>
                                            <Text style={styles.toggleText}>
                                                {expanded ? 'See Less' : 'See More'}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                }

                                {/* Amenities */}
                                <View style={styles.sections}>
                                    <Text style={styles.text_14}>Amenities</Text>

                                    <FlatList
                                        data={isAmenties}
                                        numColumns={2}
                                        scrollEnabled={false}
                                        renderItem={({ item, index }) => {

                                            return (
                                                <View style={styles.itemContainer} key={index}>
                                                    <View style={styles.iconContainer}>
                                                        {/* <SvgUri
                                                            width={scale(32)}
                                                            height={scale(32)}
                                                            // source={{ uri: 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg' }}
                                                            svgXmlData={IMAGE_URL + item?.icon_images}
                                                        /> */}
                                                        <Amenities size={scale(20)} color={appColors.red} />
                                                    </View>
                                                    <View style={styles.textContainer}>
                                                        <Text style={styles.label} numberOfLines={2}>{item?.amenti_name}</Text>
                                                    </View>
                                                </View>
                                            );
                                        }}
                                        keyExtractor={(item, index) => index.toString()}
                                        contentContainerStyle={styles.keysContainer}
                                    />

                                </View>

                                <View style={styles.line__} />

                                {/* Video */}
                                {videoURL !== null && <View style={styles.sections}>
                                    <Text style={styles.text_14}>Video</Text>
                                    <View style={styles.videoContainer}>
                                        <YoutubeIframe
                                            height={scale(180)}
                                            width={'100%'}
                                            videoId={videoURL}
                                        />
                                    </View>
                                </View>}

                                {/* floors */}
                                {propData && (propData[0]?.floorplane_link) &&
                                    <View style={styles.sections}>
                                        <Text style={styles.text_14}>Floor Plans</Text>
                                        <View style={{ backgroundColor: appColors.borderColor, borderRadius: scale(10), gap: scale(10) }}>
                                            <Pressable style={[styles.row_between, { padding: scale(15) }]} onPress={() => setFloorExpand(!floorExpand)}>
                                                <Text style={styles.text_13}>Blue prints</Text>
                                                {floorExpand ? <ArrowUp size={scale(18)} /> : <ArrowDown size={scale(18)} />}
                                            </Pressable>
                                            {floorExpand && <>
                                                {/* <View style={[styles.line__, { backgroundColor: appColors.lightGrey, alignSelf: 'center', width: '90%' }]} /> */}
                                                <FlatList
                                                    data={propData && propData[0]?.floorplane_link}
                                                    scrollEnabled={false}
                                                    renderItem={({ item, index }) => {
                                                        return (
                                                            <>
                                                                <Image source={{ uri: IMAGE_URL + item?.image_vedio_file }} style={styles.bluemapImage} resizeMode='contain' />
                                                                <View style={styles.indexContainer}>
                                                                    <Text style={styles.indexText}>{`${index + 1}`}</Text>
                                                                </View>
                                                            </>
                                                        )
                                                    }}
                                                />
                                            </>
                                            }
                                        </View>
                                    </View>
                                }

                                <View style={styles.line__} />

                                {/* location */}
                                {region?.latitude &&
                                    <View style={styles.sections}>
                                        <Text style={styles.text_14}>Location</Text>
                                        <View style={[styles.container,]}>
                                            <MapView
                                                style={styles.mapStyle}
                                                region={region}
                                            // onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
                                            >
                                                <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                                            </MapView>
                                        </View>
                                    </View>
                                }

                                <View style={styles.sections}>
                                    <Text style={styles.text_14}>Inspections</Text>
                                    <Text style={styles.para_}>Get notified of any changes or cancellations by adding an inspection to your plan.</Text>

                                    <View style={[styles.row_between, { marginTop: scale(10) }]}>
                                        <View>
                                            <Text style={styles.text_13}>Saturday 8 June</Text>
                                            <Text style={styles.para_}>10:00am-10:30am</Text>
                                        </View>
                                        <TouchableOpacity style={styles.calculateButton}>
                                            <Text style={styles.text_13}>Add to plan</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={styles.toggleButton}>
                                        <Text style={styles.text_12}>Request another time</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={styles.text_11}>View my inspection plan</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.line__} />

                                <View style={styles.sections}>
                                    <Text style={styles.text_14}>Nearby schools</Text>

                                    <View style={[styles.row_between, { marginVertical: verticalScale(5) }]}>
                                        <View>
                                            <Text style={styles.text_12}>Cornell High School</Text>
                                            <Text style={styles.para_}>ndependent | Unknown</Text>
                                        </View>
                                        <View style={styles.row_}>
                                            <Text style={styles.text_12}>348 m</Text>
                                            <ArrowRightIcon size={scale(20)} />
                                        </View>
                                    </View>
                                    <View style={styles.line__} />
                                    <View style={[styles.row_between, { marginVertical: verticalScale(5) }]}>
                                        <View>
                                            <Text style={styles.text_12}>International Grammar School</Text>
                                            <Text style={styles.para_}>ndependent | Unknown</Text>
                                        </View>
                                        <View style={styles.row_}>
                                            <Text style={styles.text_12}>625 m</Text>
                                            <ArrowRightIcon size={scale(20)} />
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.sections}>
                                    <View style={[styles.row_between, { marginVertical: verticalScale(5) }]}>
                                        <View style={{ width: '90%', }}>
                                            <Text style={styles.text_14}>Notes</Text>
                                        </View>
                                        <View style={styles.row_}>
                                            <ArrowRightIcon size={scale(20)} />
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.line__} />

                                <View style={styles.sections}>
                                    <View style={[styles.row_between, { marginVertical: verticalScale(5) }]}>
                                        <View style={{ width: '90%', }}>
                                            <Text style={styles.text_14}>Sales Results</Text>
                                            <Text style={styles.para_}>View the latest sales and auction results</Text>
                                        </View>
                                        <View style={styles.row_}>
                                            <ArrowRightIcon size={scale(20)} />
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.line__} />

                                <View style={styles.sections}>
                                    <View style={[styles.row_between, { marginVertical: verticalScale(5) }]}>
                                        <View style={{ width: '90%', }}>
                                            <Text style={styles.text_14}>Chippendale suburb profile</Text>
                                            <Text style={styles.para_}>Elevate your property journey with the latest Chippendale market insights.</Text>
                                        </View>
                                        <View style={styles.row_}>
                                            <ArrowRightIcon size={scale(20)} />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.line__} />

                                <View style={styles.sections}>
                                    <View style={[styles.row_between, { marginVertical: verticalScale(5) }]}>
                                        <View style={{ width: '50%', }}>
                                            <Text style={styles.para_}>{propData && propData[0]?.agent_agency?.name}</Text>
                                            <Text style={styles.text_14}>Contact the agent</Text>
                                        </View>
                                        <View style={styles.row_}>
                                            <Pressable style={styles.contectButton} onPress={() => callAgent(propData && propData[0]?.agent_agency?.phone)}>
                                                <PhoneIcon size={scale(20)} />
                                            </Pressable>
                                            <Pressable style={styles.contectButton} onPress={() => sendMail(propData && propData[0]?.agent_agency?.email)}>
                                                <MailIcon size={scale(20)} />
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.line__} />

                                {/* <View style={styles.sections}>
                                    <Text style={styles.text_14}>Similar properties</Text>

                                    <FlatList data={simillerProp}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item, index }) => {

                                            return (
                                                <View style={{ borderWidth: 1, borderColor: appColors.offWhite, borderRadius: scale(10), marginRight: scale(10) }}>
                                                    <TouchableOpacity>
                                                        <ImageBackground
                                                            style={styles.propBgStyle}
                                                            resizeMode="stretch"
                                                            source={item?.cover_img ? { url: IMAGE_URL + item?.cover_img } : IMAGES.kooieBlackLogo}
                                                        >
                                                            <View style={{ position: 'absolute', right: scale(15), top: scale(15) }}>
                                                                <TransparentHeart />
                                                            </View>
                                                            <Text style={styles.residentialStyle}>RESIDENTIAL</Text>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <View style={{ padding: 14, gap: scale(5) }}>
                                                        <Text style={styles.text_13}>{item?.title}</Text>
                                                        <Text style={styles.text_12}>For Sale ${item?.from_price} - ${item?.to_price} </Text>
                                                        <Text style={styles.para_}>{item?.street_address}</Text>
                                                        <View style={{ marginVertical: 8, flexDirection: 'row', }}>
                                                            <View style={{ flexDirection: 'row', gap: scale(5) }}>
                                                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(5) }}>
                                                                    <View style={{ width: scale(20), height: scale(20), }}>
                                                                        <Calender />
                                                                    </View>
                                                                    <Text style={[styles.text_13,]}>{(item.created_at) && dateFormat((item?.created_at), "yyyy")}</Text>
                                                                </View>
                                                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(5) }}>
                                                                    <View style={{ width: scale(20), height: scale(20), }}>
                                                                        <Clock />
                                                                    </View>
                                                                    <Text style={[styles.text_13,]}>{calculateHoursFromDate(item?.created_at)}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View>
                                                            <Text style={styles.para_}>Inspection : Sat 8 Jun</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            )
                                        }}
                                    />
                                </View> */}


                                {/* end */}
                            </View>

                        </View>
                    </ScrollView >
                    <View style={styles.footer}>
                        <TouchableOpacity style={[styles.ftrBtn, { backgroundColor: appColors.black }]} onPress={() => navigation.navigate('Enquiry')}>
                            <Text style={styles.ftrBtnTxt}>Enquire</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.ftrBtn, { backgroundColor: appColors.red }]}>
                            <Text style={styles.ftrBtnTxt}>Call</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }

        </View >
    );
};

export default HouseBookingInnerPage;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    header_: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: scale(10),
        paddingHorizontal: scale(16)
    },
    text_11: {
        fontSize: scale(11),
        fontWeight: '500',
        color: appColors.black
    },
    text_12: {
        fontSize: scale(12),
        fontWeight: '500',
        color: appColors.black
    },
    text_13: {
        fontSize: scale(13),
        fontWeight: '600',
        color: appColors.black
    },
    text_14: {
        fontSize: scale(14),
        fontWeight: '600',
        color: appColors.black
    },
    text_15: {
        color: appColors.black,
        fontWeight: '600',
        fontSize: scale(15),
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageContainer: {
        width: Dimensions.get('window').width,
        height: scale(230),
        borderWidth: 1,
        borderColor: appColors.borderColor,
        borderBottomRightRadius: scale(20),
        borderBottomLeftRadius: scale(20),
        overflow: 'hidden',
    },
    companyLogo: {
        width: scale(120),
        height: scale(60),
        alignSelf: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    indexContainer: {
        position: 'absolute',
        bottom: scale(15),
        right: scale(25),
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: scale(10),
        borderRadius: scale(20 / 2),
        height: scale(20)
    },
    indexText: {
        color: appColors.white,
        fontSize: scale(11),
    },
    para_: {
        fontSize: scale(11),
        color: appColors.black,
        opacity: 0.5
    },
    line__: {
        height: 1,
        width: '100%',
        backgroundColor: appColors.borderColor
    },
    sections: {
        gap: scale(4),
        marginVertical: verticalScale(10)
    },

    keysContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '45%',
        paddingVertical: verticalScale(5),
        margin: scale(3),
        borderRadius: 8,
    },
    iconContainer: {
        width: scale(35),
        height: scale(35),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scale(8),
        borderRadius: 8,
        borderWidth: 1,
        borderColor: appColors.borderColor,
        paddingVertical: scale(5),
    },
    textContainer: {
        width: '65%',
        flexDirection: 'column',
    },
    label: {
        fontSize: scale(12),
        color: appColors.grey,
    },
    value: {
        fontSize: scale(11),
        color: appColors.black,
        fontWeight: 'bold',
    },
    row_between: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    row_: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(5)
    },
    calculateButton: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: verticalScale(5),
        borderRadius: scale(5),
        borderWidth: 1,
        borderColor: appColors.borderColor
    },
    description: {
        fontSize: scale(12),
        lineHeight: scale(16),
        color: appColors.grey
    },
    toggleButton: {
        borderWidth: 1,
        borderColor: appColors.borderColor,
        borderRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(30),
        marginVertical: verticalScale(5)
    },
    toggleText: {
        color: appColors.red,
        fontSize: scale(11),
        fontWeight: 'bold',
    },

    videoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(10),
        overflow: 'hidden',
        backgroundColor: 'red'
    },
    video: {
        width: '100%',
        height: scale(200),
        borderRadius: scale(10),
        overflow: 'hidden'
    },
    mapStyle: {
        width: '100%',
        height: scale(200),
        borderRadius: scale(10),
        overflow: 'hidden'
    },
    bluemapImage: {
        width: '100%',
        height: scale(200),
        marginBottom: scale(10)
    },
    contectButton: {
        backgroundColor: appColors.red,
        width: scale(35),
        height: scale(35),
        borderRadius: scale(35 / 2),
        justifyContent: 'center',
        alignItems: 'center'
    },
    residentialStyle: {
        fontSize: scale(10),
        fontWeight: '600',
        backgroundColor: appColors.white,
        color: appColors.black,
        paddingHorizontal: scale(10),
        paddingVertical: scale(5),
        borderRadius: scale(20),
        textAlign: 'center',
        borderWidth: 1,
        borderColor: appColors.grey,
        position: 'absolute',
        bottom: scale(10),
        left: scale(10),
    },
    propBgStyle: {
        width: '100%',
        height: scale(200),
        borderTopRightRadius: scale(10),
        borderTopLeftRadius: scale(10)
    },
    footer: {
        height: scale(60),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(16),
        paddingVertical: verticalScale(5)
    },
    ftrBtn: {
        height: scale(45),
        width: '45%',
        borderRadius: scale(45 / 2),
        justifyContent: 'center',
        alignItems: 'center'
    },
    ftrBtnTxt: {
        color: appColors.white,
        fontSize: scale(13),
        fontWeight: '600'
    }
});
