import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import BackIcon from '../../assets/svg/BackIcon'
import SearchBottomIcon from '../../assets/svg/SearchBottomIcon'
import { appColors } from '../../utils/appColors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import House from '../../assets/svg/House'
import TownHouse from '../../assets/svg/TownHouse'
import Apartment from '../../assets/svg/Apartment'
import Villa from '../../assets/svg/Villa'
import HouseStore from '../../assets/svg/HouseStore'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CheckBox from '@react-native-community/checkbox';
import RNPickerSelect from 'react-native-picker-select';


const Filters = ({ navigation }) => {
    const [propertyTpe, setPropertyTpe] = useState('All');
    const [BedroomsCount, setBedroomsCount] = useState('Any');
    const [BathroomsCount, setBathroomsCount] = useState('Any');
    const [CarSpaceCount, setCarSpaceCount] = useState('Any');
    const [constructionStatus, setconstructionStatus] = useState('All');
    const [saleMethod, setsaleMethod] = useState('All');

    const [isPriceChecked, setIsPriceChecked] = useState(false);
    const [priceRange, setPriceRange] = useState([1000, 5000]);

    const onValuesChange = (values) => {
        setPriceRange(values);
    };

    const [minSize, setMinSize] = useState(null);
    const [maxSize, setMaxSize] = useState(null);

    const landSizeOptions = [
        { label: '100 sq ft', value: '100' },
        { label: '200 sq ft', value: '200' },
        { label: '500 sq ft', value: '500' },
        { label: '1000 sq ft', value: '1000' },
    ];

    const resetFilter = async () => {
        setPropertyTpe('All')
        setBedroomsCount('Any')
        setBathroomsCount('Any')
        setCarSpaceCount('Any')
        setconstructionStatus('All')
        setsaleMethod('All')
        setIsPriceChecked(false)
        setPriceRange([200, 2000])
        setMinSize(null)
        setMaxSize(null)
    };
    const dataFilter = async () => {
        let filterData = {
            propertyTpe,
            BedroomsCount,
            BathroomsCount,
            CarSpaceCount,
            constructionStatus,
            saleMethod,
            isPriceChecked,
            priceRange,
            minSize,
            maxSize
        }

        navigation.navigate('HouseBooking', filterData)
    };


    return (
        <View style={styles.containerStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, paddingHorizontal: 16, paddingBottom: scale(10) }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon width={35} height={35} />
                </TouchableOpacity>
                <View style={[styles.inputStyle, { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, height: 40 }]}>
                    <SearchBottomIcon stroke={appColors.grey} width={20} height={20} />
                    <TextInput
                        placeholder="sarching..."
                        placeholderTextColor={appColors.placeholderColor}
                        style={[styles.inputStyle, { paddingLeft: 4, width: "85%", }]}
                    />
                </View>
            </View>
            <ScrollView style={{ flex: 1, paddingHorizontal: 16, }} showsVerticalScrollIndicator={false}>

                {/* property type */}
                <View style={styles.container}>
                    <Text style={styles.title_}>Property Type</Text>

                    <View style={[styles.row_100, { justifyContent: 'space-between' }]}>

                        <View style={{ gap: scale(4) }}>
                            <TouchableOpacity style={[propertyTpe === 'All' ? styles.activeBox : styles.inActiveBox]} onPress={() => setPropertyTpe('All')}>
                                <Text style={propertyTpe === 'All' ? styles.activeBoxText : styles.inActiveBoxText}>All</Text>
                            </TouchableOpacity>
                            <Text style={styles.para_}>All Types</Text>
                        </View>

                        <View style={{ gap: scale(4) }}>
                            <TouchableOpacity style={[propertyTpe === 'Homes' ? styles.activeBox : styles.inActiveBox]} onPress={() => setPropertyTpe('Homes')}>
                                <House color={propertyTpe === 'Homes' ? appColors.white : appColors.black} />
                            </TouchableOpacity>
                            <Text style={styles.para_}>Homes</Text>
                        </View>
                        <View style={{ gap: scale(4) }}>
                            <TouchableOpacity style={[propertyTpe === 'Town' ? styles.activeBox : styles.inActiveBox]} onPress={() => setPropertyTpe('Town')}>
                                <TownHouse color={propertyTpe === 'Town' ? appColors.white : appColors.black} />
                            </TouchableOpacity>
                            <Text style={styles.para_}>Town House</Text>
                        </View>
                        <View style={{ gap: scale(4) }}>
                            <TouchableOpacity style={[propertyTpe === 'Apartment' ? styles.activeBox : styles.inActiveBox]} onPress={() => setPropertyTpe('Apartment')}>
                                <Apartment color={propertyTpe === 'Apartment' ? appColors.white : appColors.black} />
                            </TouchableOpacity>
                            <Text style={styles.para_}>Apartment</Text>
                        </View>
                    </View>

                    <View style={[styles.row_100, { gap: scale(20) }]}>
                        <View style={{ gap: scale(4) }}>
                            <TouchableOpacity style={[propertyTpe === 'Villa' ? styles.activeBox : styles.inActiveBox]} onPress={() => setPropertyTpe('Villa')}>
                                <Villa color={propertyTpe === 'Villa' ? appColors.white : appColors.black} />
                            </TouchableOpacity>
                            <Text style={styles.para_}>Villa</Text>
                        </View>
                        <View style={{ gap: scale(4) }}>
                            <TouchableOpacity style={[propertyTpe === 'Store' ? styles.activeBox : styles.inActiveBox]} onPress={() => setPropertyTpe('Store')}>
                                <HouseStore color={propertyTpe === 'Store' ? appColors.white : appColors.black} />
                            </TouchableOpacity>
                            <Text style={styles.para_}>Something else</Text>
                        </View>

                    </View>
                </View>

                <View style={styles.line_} />

                {/* price range */}
                <View style={styles.container}>
                    <Text style={styles.title_}>Price range</Text>
                    <View style={{ flex: 1, }}>
                        <Text style={styles.priceRangeText}>
                            ${priceRange[0]}k to ${priceRange[1] / 1000}M
                        </Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MultiSlider
                                values={priceRange}
                                sliderLength={280}
                                onValuesChange={onValuesChange}
                                min={0}
                                max={3000}
                                step={1}
                                selectedStyle={{ backgroundColor: appColors.red }}
                                unselectedStyle={{ backgroundColor: '#e3e3e3' }}
                                trackStyle={{ height: 3 }}
                                customMarker={() => (
                                    <View style={styles.markerStyle} />
                                )}
                            />
                        </View>
                        {/* <View style={styles.checkboxContainer}>
                            <Text style={styles.checkboxLabel}>Only show properties with a price</Text>
                            <CheckBox
                                value={isPriceChecked}
                                onValueChange={setIsPriceChecked}
                                tintColors={{ true: appColors.red, false: '#e3e3e3' }}
                            />
                        </View> */}
                    </View>
                </View>

                <View style={styles.line_} />

                {/* bedrooms */}
                <View style={styles.container}>
                    <Text style={styles.title_}>Bedrooms</Text>
                    <View style={{ flex: 1, gap: scale(10) }}>
                        <View style={styles.row_100}>
                            <TouchableOpacity style={[styles.barBox, { borderTopLeftRadius: 5, borderBottomLeftRadius: 5, borderLeftWidth: 1 }, BedroomsCount === 'Any' && { backgroundColor: appColors.black }]} onPress={() => setBedroomsCount('Any')}>
                                <Text style={[styles.barBoxText, BedroomsCount === 'Any' && { color: appColors.white }]}>Any</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, BedroomsCount === 'Studio' && { backgroundColor: appColors.black }]} onPress={() => setBedroomsCount('Studio')}>
                                <Text style={[styles.barBoxText, BedroomsCount === 'Studio' && { color: appColors.white }]}>Studio</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, BedroomsCount === '1' && { backgroundColor: appColors.black }]} onPress={() => setBedroomsCount('1')}>
                                <Text style={[styles.barBoxText, BedroomsCount === '1' && { color: appColors.white }]}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, BedroomsCount === '2' && { backgroundColor: appColors.black }]} onPress={() => setBedroomsCount('2')}>
                                <Text style={[styles.barBoxText, BedroomsCount === '2' && { color: appColors.white }]}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, BedroomsCount === '3' && { backgroundColor: appColors.black }]} onPress={() => setBedroomsCount('3')}>
                                <Text style={[styles.barBoxText, BedroomsCount === '3' && { color: appColors.white }]}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, BedroomsCount === '4' && { backgroundColor: appColors.black }]} onPress={() => setBedroomsCount('4')}>
                                <Text style={[styles.barBoxText, BedroomsCount === '4' && { color: appColors.white }]}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, { borderLeftWidth: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5, }, BedroomsCount === '5' && { backgroundColor: appColors.black }]} onPress={() => setBedroomsCount('5')}>
                                <Text style={[styles.barBoxText, BedroomsCount === '5' && { color: appColors.white }]}>5+</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={styles.checkboxContainer}>
                            <Text style={styles.checkboxLabel}>Select bedroom range</Text>
                            <CheckBox
                                value={isPriceChecked}
                                onValueChange={setIsPriceChecked}
                                tintColors={{ true: appColors.red, false: '#e3e3e3' }}
                            />
                        </View> */}
                    </View>
                </View>

                <View style={styles.line_} />

                {/* bathrooms */}
                <View style={styles.container}>
                    <Text style={styles.title_}>Bathrooms</Text>
                    <View style={{ flex: 1, }}>
                        <View style={styles.row_100}>
                            <TouchableOpacity style={[styles.barBox, { borderTopLeftRadius: 5, borderBottomLeftRadius: 5, borderLeftWidth: 1 }, BathroomsCount === 'Any' && { backgroundColor: appColors.black }]} onPress={() => setBathroomsCount('Any')}>
                                <Text style={[styles.barBoxText, BathroomsCount === 'Any' && { color: appColors.white }]}>Any</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, BathroomsCount === '1' && { backgroundColor: appColors.black }]} onPress={() => setBathroomsCount('1')}>
                                <Text style={[styles.barBoxText, BathroomsCount === '1' && { color: appColors.white }]}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, BathroomsCount === '2' && { backgroundColor: appColors.black }]} onPress={() => setBathroomsCount('2')}>
                                <Text style={[styles.barBoxText, BathroomsCount === '2' && { color: appColors.white }]}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, BathroomsCount === '3' && { backgroundColor: appColors.black }]} onPress={() => setBathroomsCount('3')}>
                                <Text style={[styles.barBoxText, BathroomsCount === '3' && { color: appColors.white }]}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, BathroomsCount === '4' && { backgroundColor: appColors.black }]} onPress={() => setBathroomsCount('4')}>
                                <Text style={[styles.barBoxText, BathroomsCount === '4' && { color: appColors.white }]}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, { borderLeftWidth: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5, }, BathroomsCount === '5' && { backgroundColor: appColors.black }]} onPress={() => setBathroomsCount('5')}>
                                <Text style={[styles.barBoxText, BathroomsCount === '5' && { color: appColors.white }]}>5+</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={styles.line_} />

                {/* car spaces */}
                <View style={styles.container}>
                    <Text style={styles.title_}>Car spaces</Text>
                    <View style={{ flex: 1, }}>
                        <View style={styles.row_100}>
                            <TouchableOpacity style={[styles.barBox, { borderLeftWidth: 1, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, }, CarSpaceCount === 'Any' && { backgroundColor: appColors.black }]} onPress={() => setCarSpaceCount('Any')}>
                                <Text style={[styles.barBoxText, CarSpaceCount === 'Any' && { color: appColors.white }]}>Any</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.barBox, CarSpaceCount === '1' && { backgroundColor: appColors.black }]} onPress={() => setCarSpaceCount('1')}>
                                <Text style={[styles.barBoxText, CarSpaceCount === '1' && { color: appColors.white }]}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, CarSpaceCount === '2' && { backgroundColor: appColors.black }]} onPress={() => setCarSpaceCount('2')}>
                                <Text style={[styles.barBoxText, CarSpaceCount === '2' && { color: appColors.white }]}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, CarSpaceCount === '3' && { backgroundColor: appColors.black }]} onPress={() => setCarSpaceCount('3')}>
                                <Text style={[styles.barBoxText, CarSpaceCount === '3' && { color: appColors.white }]}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, CarSpaceCount === '4' && { backgroundColor: appColors.black }]} onPress={() => setCarSpaceCount('4')}>
                                <Text style={[styles.barBoxText, CarSpaceCount === '4' && { color: appColors.white }]}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.barBox, { borderLeftWidth: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5, }, CarSpaceCount === '5' && { backgroundColor: appColors.black }]} onPress={() => setCarSpaceCount('5')}>
                                <Text style={[styles.barBoxText, CarSpaceCount === '5' && { color: appColors.white }]}>5+</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={styles.line_} />

                {/* land size */}
                <View style={styles.container}>
                    <Text style={styles.title_}>Land size</Text>
                    <View style={{ flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center' }}>

                        <View style={{ width: '50%', paddingRight: 10 }}>
                            <Text style={styles.checkboxLabel}>Min</Text>
                            <View style={styles.selectBoxStyle}>
                                <RNPickerSelect
                                    onValueChange={(value) => setMinSize(value)}
                                    items={landSizeOptions}
                                    value={minSize}
                                    placeholder={{ label: "Select Min Size", value: null }}
                                    style={pickerSelectStyles}
                                />
                            </View>
                        </View>
                        <View style={{ width: '50%', paddingLeft: 10 }}>
                            <Text style={styles.checkboxLabel}>Max</Text>
                            <View style={styles.selectBoxStyle}>
                                <RNPickerSelect
                                    onValueChange={(value) => setMaxSize(value)}
                                    items={landSizeOptions}
                                    value={maxSize}
                                    placeholder={{ label: "Select Max Size", value: null }}
                                    style={pickerSelectStyles}
                                />
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.line_} />
                {/* Construction */}
                <View style={styles.container}>
                    <Text style={styles.title_}>Construction status</Text>
                    <View style={{ flex: 1, }}>
                        <View style={styles.constructionContainer}>
                            <TouchableOpacity style={[styles.tabBar, {}, constructionStatus === 'All' && { backgroundColor: appColors.black }]} onPress={() => setconstructionStatus('All')}>
                                <Text style={[styles.barBoxText, constructionStatus === 'All' && { color: appColors.white }]}>All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.tabBar, { borderLeftWidth: 1, borderRightWidth: 1, borderColor: appColors.grey }, constructionStatus === 'New' && { backgroundColor: appColors.black }]} onPress={() => setconstructionStatus('New')}>
                                <Text style={[styles.barBoxText, constructionStatus === 'New' && { color: appColors.white }]}>New</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.tabBar, {}, constructionStatus === 'Established' && { backgroundColor: appColors.black }]} onPress={() => setconstructionStatus('Established')}>
                                <Text style={[styles.barBoxText, constructionStatus === 'Established' && { color: appColors.white }]}>Established</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={styles.line_} />

                {/* Sale method */}
                <View style={styles.container}>
                    <Text style={styles.title_}>Sale method</Text>
                    <View style={{ flex: 1, }}>
                        <View style={styles.constructionContainer}>
                            <TouchableOpacity style={[styles.tabBar, {}, saleMethod === 'All' && { backgroundColor: appColors.black }]} onPress={() => setsaleMethod('All')}>
                                <Text style={[styles.barBoxText, saleMethod === 'All' && { color: appColors.white }]}>All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.tabBar, { borderLeftWidth: 1, borderRightWidth: 1, borderColor: appColors.grey }, saleMethod === 'PrivateSale' && { backgroundColor: appColors.black }]} onPress={() => setsaleMethod('PrivateSale')}>
                                <Text style={[styles.barBoxText, saleMethod === 'PrivateSale' && { color: appColors.white }]}>Private Sale</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.tabBar, {}, saleMethod === 'Auction' && { backgroundColor: appColors.black }]} onPress={() => setsaleMethod('Auction')}>
                                <Text style={[styles.barBoxText, saleMethod === 'Auction' && { color: appColors.white }]}>Auction</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={styles.line_} />

                {/* contract / offer */}
                {/* <View style={styles.container}>
                    <View style={[styles.checkboxContainer,]}>
                        <Text style={styles.checkboxLabel}>Exclude properties under contract/offer</Text>
                        <CheckBox
                            value={isPriceChecked}
                            onValueChange={setIsPriceChecked}
                            tintColors={{ true: appColors.red, false: '#e3e3e3' }}
                        />
                    </View>
                </View> */}
                <View style={styles.line_} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <TouchableOpacity style={styles.footerButton} onPress={resetFilter}>
                        <Text style={styles.title_}>Reset Filters</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.footerButton, { backgroundColor: appColors.red, }]} onPress={dataFilter}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: appColors.white }}>Search</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Filters;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    inputStyle: {
        borderRadius: 8,
        backgroundColor: appColors.lightGrey,
        paddingLeft: 14,
        color: appColors.black,
        width: '80%',
    },
    title_: {
        fontSize: scale(14),
        color: appColors.black,
        fontWeight: '700'
    },
    container: {
        padding: scale(10),
        marginVertical: verticalScale(10),
        gap: scale(20)
    },
    row_100: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeBox: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(6),
        backgroundColor: appColors.black,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inActiveBox: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(6),
        borderWidth: 1,
        borderColor: appColors.grey,
        // backgroundColor: appColors.black,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeBoxText: {
        color: appColors.white,
        fontSize: scale(13)
    },
    inActiveBoxText: {
        color: appColors.black,
        fontSize: scale(13)
    },
    para_: {
        fontSize: scale(10),
        textAlign: 'center',
        color: appColors.black,
        opacity: 0.8
    },
    line_: {
        width: '100%',
        height: 1,
        backgroundColor: appColors.lightGrey
    },
    markerStyle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: appColors.red,
        borderWidth: 2,
        borderColor: appColors.white,
    },
    priceRangeText: {
        fontSize: scale(12),
        textAlign: 'center',
        marginVertical: scale(5),
        fontWeight: '700',
        color: appColors.black
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkboxLabel: {
        fontSize: scale(11),
        fontWeight: '600',
        // marginLeft: scale(8),
        color: appColors.black
    },
    barBox: {
        paddingVertical: verticalScale(5),
        paddingHorizontal: moderateScale(15),
        borderWidth: 1,
        borderColor: appColors.grey,
        borderLeftWidth: 0
    },
    barBoxText: {
        color: appColors.black,
        fontSize: scale(11),
        fontWeight: '600'
    },
    selectBoxStyle: {
        borderWidth: 1,
        borderColor: appColors.grey,
        borderRadius: 8,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBar: {
        height: 35,
        width: '33.3%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    constructionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: appColors.grey,
        overflow: 'hidden'
    },
    footerButton: {
        width: '45%',
        height: scale(40),
        borderRadius: scale(40 / 2),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: verticalScale(10)
    }
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 14,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 14,
        paddingHorizontal: 10,
        // paddingVertical: 8,
        borderColor: appColors.black,
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
        // backgroundColor: appColors.red,
        borderWidth: 1,

    },
});