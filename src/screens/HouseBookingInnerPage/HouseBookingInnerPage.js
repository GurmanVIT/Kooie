import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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

const HouseBookingInnerPage = ({ navigation }) => {

    const [active, setActive] = useState(0);
    const [expanded, setExpanded] = useState(false);


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

                    <View style={{ paddingHorizontal: 16, marginBottom: scale(10) }}>

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
                                        <Text>estimated repayment</Text>
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

                        <View style={styles.line__} />

                        <View style={styles.sections}>
                            <Text style={styles.text_14}>Amenities</Text>
                        </View>

                        <View style={styles.line__} />






                        {/* end */}
                    </View>

                </View>
            </ScrollView >
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
        bottom: scale(10),
        right: scale(20),
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
        color: '#333',
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
});
