import {
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { appColors } from '../../utils/appColors';
import Images from '../theme/Images';
import SearchIcon from '../../assets/svg/SearchIcon';
import HeartIcon from '../../assets/svg/HeartIcon';
import PropertyIcon from '../../assets/svg/PropertyIcon';
import AgentImage from '../../assets/svg/AgentImage';
import RedSearchIcon from '../../assets/svg/RedSearchIcon';

const Home = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(true);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const DATA = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
    ];

    const [search, setSearch] = React.useState('');

    return (
        <View style={styles.containerStyle}>

            <ScrollView style={{ flex: 1, marginBottom: 10 }} showsVerticalScrollIndicator={false}>
                <ImageBackground
                    style={{ height: 200, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}
                    source={Images.country_img}
                >
                    <View style={styles.searchContainer}>
                        <RedSearchIcon />
                        <TextInput
                            style={styles.input}
                            placeholder="Start searching"
                            placeholderTextColor="#aaa"
                            onChangeText={setSearch}
                            value={search}
                        />
                    </View>
                </ImageBackground>

                <View style={{ padding: 16 }}>
                    <View style={styles.switchContainer}>
                        <Text style={styles.label}>Recent searches</Text>
                        <Switch
                            trackColor={{ false: '#edf3f6', true: '#FF474C' }}
                            thumbColor={isEnabled ? '#fff' : '#fff'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <TouchableOpacity style={styles.iconTextStyle} onPress={() => navigation.navigate('ResentSearch')}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <View style={{ width: 44, height: 44 }}>
                                <SearchIcon />
                            </View>
                            <View>
                                <Text style={{ color: appColors.black }}>Sydney, NSW 2000</Text>
                                <Text style={{ color: appColors.grey, fontSize: 12 }}>Townhouse · $100k-$500k</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{ width: 24, height: 24 }}>
                                <HeartIcon />
                            </View>
                            <Text style={{ fontSize: 12 }}>Save</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={{ marginTop: 20, color: appColors.black, fontSize: 18, fontWeight: '600' }}>Suggestions for you</Text>

                    <FlatList
                        data={DATA}
                        style={{ marginTop: 12 }}
                        renderItem={() => (
                            <View style={styles.propertyIconText}>
                                <View style={{ width: 120, height: 80 }}>
                                    <PropertyIcon />
                                </View>
                                <View style={{ marginLeft: 16, flex: 1 }}>
                                    <Text style={{ fontSize: 16, fontWeight: '600', color: appColors.black }}>Get an estimate</Text>
                                    <Text>See how much a property is worth</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />

                    <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '600', color: appColors.black }}>Latest News</Text>
                    <FlatList
                        data={DATA}
                        horizontal
                        style={{ marginTop: 12 }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={() => (
                            <View style={{ width: 240, marginRight: 14 }}>
                                <View style={{ width: 240, height: 160 }}>
                                    <AgentImage />
                                </View>
                                <View>
                                    <Text style={{ fontWeight: '600', color: appColors.black, fontSize: 15, marginTop: 8 }}>How to Find a Good Real Estate Agent</Text>
                                    <Text style={{ marginTop: 4, fontSize: 12 }}>Oct  24, 2023</Text>
                                </View>
                            </View>

                        )}
                        keyExtractor={item => item.id}
                    />

                    <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '600', color: appColors.black }}>Property Insights</Text>
                    <FlatList
                        data={DATA}
                        horizontal
                        style={{ marginTop: 12 }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={() => (
                            <View style={{ width: 240, marginRight: 14 }}>
                                <View style={{ width: 240, height: 160 }}>
                                    <AgentImage />
                                </View>
                                <View>
                                    <Text style={{ fontWeight: '600', color: appColors.black, fontSize: 15, marginTop: 8 }}>How to Find a Good Real Estate Agent</Text>
                                    <Text style={{ marginTop: 4, fontSize: 12 }}>Oct  24, 2023</Text>
                                </View>
                            </View>

                        )}
                        keyExtractor={item => item.id}
                    />

                    <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '600', color: appColors.black }}>Guides & Inspiration</Text>
                    <FlatList
                        data={DATA}
                        horizontal
                        style={{ marginTop: 12 }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={() => (
                            <View style={{ width: 240, marginRight: 14 }}>
                                <View style={{ width: 240, height: 160 }}>
                                    <AgentImage />
                                </View>
                                <View>
                                    <Text style={{ fontWeight: '600', color: appColors.black, fontSize: 15, marginTop: 8 }}>How to Find a Good Real Estate Agent</Text>
                                    <Text style={{ marginTop: 4, fontSize: 12 }}>Oct  24, 2023</Text>
                                </View>
                            </View>

                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView >
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 22
    },
    label: {
        fontSize: 16,
        color: appColors.black,
        fontWeight: '600',
        marginBottom: 20,
    },
    iconTextStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 14,
        borderBottomWidth: 2,
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
    },
});
