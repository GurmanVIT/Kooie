import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { appColors } from '../../../utils/appColors';
import HeartCollectionIcon from '../../../assets/svg/HeartCollectionIcon';
import SearchBottomIcon from '../../../assets/svg/SearchBottomIcon';
import ArrowRightIcon from '../../../assets/svg/ArrowRightIcon';
import MassageIcon from '../../../assets/svg/MassageIcon';
import HiddenIcon from '../../../assets/svg/HiddenIcon';
import TabCalendarIcon from '../../../assets/svg/TabCalendarIcon';

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

    const [active, setActive] = useState(0);

    return (
        <View style={styles.containerStyle}>
            <ScrollView style={{ flex: 1, marginBottom: 10 }} showsVerticalScrollIndicator={false}>

                <Text style={styles.collectionStyle}>Collections</Text>

                <View style={styles.tabStyle}>
                    <View style={{ width: '50%' }}>
                        <Text
                            onPress={() => setActive(0)}
                            style={{
                                textAlign: 'center',
                                color: active === 0 ? appColors.red : appColors.grey,
                                paddingBottom: active === 0 ? 12 : 12,
                                borderBottomWidth: active === 0 ? 1 : 1,
                                borderColor: active === 0 ? appColors.red : appColors.lightGrey,
                            }}
                        >Properties </Text>
                    </View>
                    <View style={{
                        width: '50%'

                    }}>
                        <Text onPress={() => setActive(1)}
                            style={{
                                textAlign: 'center',
                                color: active === 1 ? appColors.red : appColors.grey,
                                paddingBottom: active === 1 ? 12 : 12,
                                borderBottomWidth: active === 1 ? 1 : 1,
                                borderColor: active === 1 ? appColors.red : appColors.lightGrey,
                            }}
                        >Inspections</Text>
                    </View>
                </View>

                {active === 0 ?
                    <View>
                        <View style={{ alignItems: 'center', marginTop: 40 }}>
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
                        </View>
                    </View>
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
            </ScrollView>
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
        justifyContent: 'center',
        alignItems: 'center',
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
});
