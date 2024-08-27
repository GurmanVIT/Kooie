import { Dimensions, FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
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




const HouseBookingInnerPage = ({ navigation }) => {

    const [active, setActive] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [floorExpand, setFloorExpand] = useState(false);


    const [currentIndex, setCurrentIndex] = useState(0); // To keep track of the current index
    const flatListRef = useRef(null); // Reference to the FlatList

    // Sample images
    const images = [
        'https://via.placeholder.com/600x400.png',
        'https://via.placeholder.com/600x400.png',
        'https://via.placeholder.com/600x400.png',
        'https://via.placeholder.com/600x400.png',
    ];
    const descriptionText =
        "Nestled within a superb pocket of Springwood, comes this stunning property with the perfect blend of comfort, functionality & beauty. Four generously sized bedrooms, two with WIR's & ensuite's & the other two with BIR's. The spacious kitchen is complete with quality appliances such as a dishwasher, electric cooktop, oven & range hood plus ample bench & storage space & separate dining room. Other features include: ducted a/c, ceiling fans, slow combustion fireplace, study, two separate living spaces, double lock up garage with internal access & an abundance of under house storage. Laundry with additional toilet, solar, blend of solid timber floors & carpeted rooms. Private rear undercover alfresco space will see you entertaining large groups with ease & overlooks the established gardens & serene setting on this approximate 826m2 block. Direct access to the prestigious Springwood Golf Course for golf enthusiasts with rear gate access from the backyard.";



    // Function to handle index change
    const onViewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    };

    // Viewability configuration for FlatList
    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    const propertyLocation = {
        latitude: 30.7113397,
        longitude: 76.6901766,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    };


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



            <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 30, gap: scale(10) }}>
                    {/* companyLogo */}
                    <Image source={IMAGES.companyLogo} style={styles.companyLogo} resizeMode='contain' />

                    {/* property images */}
                    <View style={styles.container}>
                        <FlatList
                            ref={flatListRef}
                            data={images}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.imageContainer}>
                                    <Image source={{ uri: item }} style={styles.image} resizeMode='cover' />
                                </View>
                            )}
                            onViewableItemsChanged={onViewableItemsChanged}
                            viewabilityConfig={viewabilityConfig}
                        />
                        <View style={styles.indexContainer}>
                            <Text style={styles.indexText}>{`${currentIndex + 1} of ${images.length}`}</Text>
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 16, marginBottom: scale(20) }}>

                        <View style={styles.sections}>
                            <Text style={styles.text_14}>For Sale $900,000 - $990,000</Text>
                            <Text style={styles.para_}>21 Gladswood Gardens, Double Bay NSW 2028</Text>
                        </View>

                        <View style={styles.line__} />

                        <View style={styles.sections}>
                            <Text style={styles.text_14}>Key insights</Text>

                            <View style={styles.keysContainer}>
                                <View style={styles.itemContainer}>
                                    <View style={styles.iconContainer}>
                                        <House size={scale(20)} color={appColors.red} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.label}>{'Type:'}</Text>
                                        <Text style={styles.value}>{'Homes / Houses'}</Text>
                                    </View>
                                </View>

                                <View style={styles.itemContainer}>
                                    <View style={styles.iconContainer}>
                                        <BedIcon size={scale(20)} color={appColors.red} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.label}>{'Bathrooms:'}</Text>
                                        <Text style={styles.value}>{'2 Rooms'}</Text>
                                    </View>
                                </View>

                                <View style={styles.itemContainer}>
                                    <View style={styles.iconContainer}>
                                        <ShawarIcon size={scale(20)} color={appColors.red} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.label}>{'Bathrooms:'}</Text>
                                        <Text style={styles.value}>{'2 bathrooms'}</Text>
                                    </View>
                                </View>

                                <View style={styles.itemContainer}>
                                    <View style={styles.iconContainer}>
                                        <CarIcon size={scale(20)} color={appColors.red} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.label}>{'Garages:'}</Text>
                                        <Text style={styles.value}>{'1 Garage'}</Text>
                                    </View>
                                </View>
                                <View style={styles.itemContainer}>
                                    <View style={styles.iconContainer}>
                                        <MeterIcon size={scale(20)} color={appColors.red} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.label}>{'Size:'}</Text>
                                        <Text style={styles.value}>{'600 m²'}</Text>
                                    </View>
                                </View>
                                <View style={styles.itemContainer}>
                                    <View style={styles.iconContainer}>
                                        <LandSize size={scale(20)} color={appColors.red} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.label}>{'Land Size:'}</Text>
                                        <Text style={styles.value}>{'600 m²'}</Text>
                                    </View>
                                </View>


                            </View>
                        </View>
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

                        <View style={styles.sections}>
                            <Text style={styles.text_14}>Description</Text>

                            <Text
                                style={[styles.description, { maxHeight: expanded ? undefined : 68, }]}
                                numberOfLines={expanded ? 0 : 4} // Show only 4 lines when collapsed
                                ellipsizeMode="tail"
                            >
                                {descriptionText}
                            </Text>
                            <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.toggleButton}>
                                <Text style={styles.toggleText}>
                                    {expanded ? 'See Less' : 'See More'}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.sections}>
                            <Text style={styles.text_14}>Amenities</Text>
                            <View style={styles.keysContainer}>
                                <View style={styles.itemContainer}>
                                    <View style={styles.iconContainer}>
                                        <Deck size={scale(20)} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.label}>{'Deck'}</Text>
                                    </View>
                                </View>

                                <View style={styles.itemContainer}>
                                    <View style={styles.iconContainer}>
                                        <Courtyard size={scale(20)} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.label}>{'Court yard'}</Text>
                                    </View>
                                </View>

                                <View style={styles.itemContainer}>
                                    <View style={styles.iconContainer}>
                                        <SpaIcon size={scale(20)} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.label}>{'Inside Spa'}</Text>
                                    </View>
                                </View>

                                <View style={styles.itemContainer}>
                                    <View style={styles.iconContainer}>
                                        <SpaIcon size={scale(20)} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.label}>{'Outside Spa'}</Text>
                                    </View>
                                </View>



                            </View>



                        </View>

                        <View style={styles.line__} />

                        <View style={styles.sections}>
                            <Text style={styles.text_14}>Video</Text>
                            <View style={styles.videoContainer}>
                                <Video
                                    source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} // Can be a URL or a local file.
                                    style={styles.video}
                                    controls={true}
                                    resizeMode="contain"
                                    paused={false}
                                />
                            </View>
                        </View>

                        <View style={styles.sections}>
                            <Text style={styles.text_14}>Floor Plans</Text>
                            <View style={{ backgroundColor: appColors.borderColor, borderRadius: scale(10), gap: scale(10) }}>
                                <Pressable style={[styles.row_between, { padding: scale(15) }]} onPress={() => setFloorExpand(!floorExpand)}>
                                    <Text style={styles.text_13}>Blue prints</Text>
                                    {
                                        floorExpand ?
                                            <ArrowUp size={scale(18)} />
                                            : <ArrowDown size={scale(18)} />
                                    }
                                </Pressable>
                                <View style={[styles.line__, { backgroundColor: appColors.lightGrey, alignSelf: 'center', width: '90%' }]} />
                                {floorExpand &&
                                    <FlatList
                                        data={[{}, {}]}
                                        scrollEnabled={false}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <>
                                                    <Image source={IMAGES.blueMap} style={styles.bluemapImage} resizeMode='contain' />
                                                    <View style={styles.indexContainer}>
                                                        <Text style={styles.indexText}>{`${index + 1} Floor`}</Text>
                                                    </View>
                                                </>
                                            )
                                        }}
                                    />}
                            </View>
                        </View>

                        <View style={styles.line__} />

                        {/* location */}
                        <View style={styles.sections}>
                            <Text style={styles.text_14}>Location</Text>
                            <View style={[styles.container,]}>
                                <MapView
                                    style={styles.video}
                                    initialRegion={propertyLocation}
                                >
                                    <Marker coordinate={propertyLocation} />
                                </MapView>
                            </View>
                        </View>


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
                                    <Text style={styles.text_14}>Contact the agent</Text>
                                </View>
                                <View style={styles.row_}>
                                    <Pressable style={styles.contectButton}>
                                        <PhoneIcon size={scale(20)} />
                                    </Pressable>
                                    <Pressable style={styles.contectButton}>
                                        <MailIcon size={scale(20)} />
                                    </Pressable>
                                </View>
                            </View>
                        </View>

                        <View style={styles.line__} />

                        <View style={styles.sections}>
                            <Text style={styles.text_14}>Similar properties</Text>

                            <FlatList data={[{}, {}, {}, {}]}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={{ borderWidth: 1, borderColor: appColors.offWhite, borderRadius: scale(10), marginRight: scale(10) }}>
                                            <TouchableOpacity>
                                                <ImageBackground
                                                    style={styles.propBgStyle}
                                                    resizeMode="stretch"
                                                    source={Images.house}
                                                >
                                                    <View style={{ position: 'absolute', right: scale(15), top: scale(15) }}>
                                                        <TransparentHeart />
                                                    </View>
                                                    <Text style={styles.residentialStyle}>RESIDENTIAL</Text>
                                                </ImageBackground>
                                            </TouchableOpacity>
                                            <View style={{ padding: 14, gap: scale(5) }}>
                                                <Text style={styles.text_13}>2018 Vision SF50</Text>
                                                <Text style={styles.text_12}>For Sale $900,000 - $990,000 </Text>
                                                <Text style={styles.para_}>21 Gladswood Gardens, Double Bay NSW 2028</Text>
                                                <View style={{ marginVertical: 8, flexDirection: 'row', }}>
                                                    <View style={{ flexDirection: 'row', gap: scale(5) }}>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(5) }}>
                                                            <View style={{ width: scale(20), height: scale(20), }}>
                                                                <Calender />
                                                            </View>
                                                            <Text style={[styles.text_13,]}>2018</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(5) }}>
                                                            <View style={{ width: scale(20), height: scale(20), }}>
                                                                <Clock />
                                                            </View>
                                                            <Text style={[styles.text_13,]}>690 hrs</Text>
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
                        </View>


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
        marginTop: 16,
        paddingHorizontal: 16
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
        width: Dimensions.get('window').width, // Full width
        height: scale(230),
        borderWidth: 1,
        borderColor: appColors.borderColor,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        overflow: 'hidden',
    },
    companyLogo: {
        width: scale(120),
        height: scale(60),
        alignSelf: 'center'
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
        width: '100%'

    },
    itemContainer: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '45%',
        padding: 10,
        margin: 5,

    },
    iconContainer: {
        width: scale(35),
        height: scale(35),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: appColors.borderColor,
        padding: 5
    },
    icon: {
        width: scale(30),
        height: scale(30),
        tintColor: appColors.red
    },
    textContainer: {
        flexDirection: 'column',
    },
    label: {
        fontSize: scale(12),
        color: appColors.grey,
    },
    value: {
        fontSize: scale(11),
        color: '#000',
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
        fontSize: 14,
        lineHeight: 17,
    },
    toggleButton: {
        borderWidth: 1,
        borderColor: appColors.borderColor,
        borderRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(30),
        marginVertical: verticalScale(10)
    },
    toggleText: {
        color: appColors.red, // Customize the color
        fontSize: scale(11),
        fontWeight: 'bold',
    },

    videoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    video: {
        width: '100%',
        height: scale(200),
        borderRadius: 10,
        backgroundColor: 'black'

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
