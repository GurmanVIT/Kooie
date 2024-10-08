import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileHeader } from '../../components'
import { appColors } from '../../utils/appColors'
import Images from '../theme/Images'
import { Image } from 'react-native'
import { AuthContext } from '../../Contexts/authContext'
import { BASE_URL, IMAGE_URL } from '../../config/config'
import dateFormat from 'dateformat';



const Guides = ({ navigation }) => {
    const { userID, authToken } = useContext(AuthContext);
    const [active, setActive] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isGuideInspireation, setGuideInspireation] = useState([]);

    useEffect(() => { GuideInspireation() }, [])
    const DATA = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 1' },
        { id: '5', title: 'Item 2' },
        { id: '6', title: 'Item 3' },
    ];
    // console.log({ isGuideInspireation });


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
        <SafeAreaView style={styles.root_}>
            <ProfileHeader navigation={navigation} title={'Guides'} />
            {/* <View style={styles.content_} >
                <View style={styles.top_section}>
                    <Text style={[styles.tabButton, {
                        color: active == 0 ? '#000' : '#75808A',
                        borderColor: active == 0 ? '#000' : '#E9EBEE',
                    }]} onPress={() => setActive(0)}>
                        Buying
                    </Text>
                    <Text style={[styles.tabButton, {
                        color: active == 1 ? '#000' : '#75808A',
                        borderColor: active == 1 ? '#000' : '#E9EBEE',
                    }]} onPress={() => setActive(1)}>
                        Selling
                    </Text>
                    <Text style={[styles.tabButton, {
                        color: active == 2 ? '#000' : '#75808A',
                        borderColor: active == 2 ? '#000' : '#E9EBEE',
                    }]} onPress={() => setActive(2)}>
                        Renting
                    </Text>
                    <Text style={[styles.tabButton, {
                        color: active == 3 ? '#000' : '#75808A',
                        borderColor: active == 3 ? '#000' : '#E9EBEE',
                    }]} onPress={() => setActive(3)}>
                        Owning
                    </Text>
                </View>
            </View> */}

            <View style={styles.content_} showsVerticalScrollIndicator={false}>
                <Text style={{ marginVertical: 8, fontSize: 16, fontWeight: '600', color: appColors.black }}>First home buyers guide</Text>
                <FlatList
                    data={isGuideInspireation}
                    showsVerticalScrollIndicator={false}
                    // horizontal
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ width: '100%', height: 300, borderRadius: 8, borderColor: appColors.lightGrey, borderWidth: 1, marginBottom: 10 }}>
                                <View style={{ height: 200 }}>
                                    <Image source={{ uri: IMAGE_URL + "images/" + item?.featured_img }} resizeMode='cover' style={{ width: '100%', height: '100%', borderTopRightRadius: 8, borderTopLeftRadius: 8, }} />
                                </View>
                                <View style={{ paddingHorizontal: 10, height: 100, paddingVertical: 6 }}>
                                    <Text style={{ marginTop: 8, }}>{dateFormat(item?.created_at, "mmm dd, yyyy")}</Text>
                                    <Text style={{ fontWeight: '600', color: appColors.black, marginTop: 4 }}>{(item?.image_title) && item?.image_title}</Text>
                                </View>
                            </View>

                        )
                    }}
                />

                {/* <Text style={{ marginTop: 16, fontSize: 16, fontWeight: '600', color: appColors.black }}>Buying an apartment guide</Text>
                <FlatList
                    data={DATA}
                    horizontal
                    style={{ marginTop: 12 }}
                    renderItem={() => (
                        <View style={{ width: 240, marginRight: 14, borderRadius: 8, borderColor: appColors.lightGrey, borderWidth: 1 }}>
                            <View style={{ height: 150 }}>
                                <Image source={Images.Boats} resizeMode='cover' style={{ width: '100%', height: '100%', borderTopRightRadius: 8, borderTopLeftRadius: 8, }} />
                            </View>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 6 }}>
                                <Text style={{ marginTop: 8, }}>Part one</Text>
                                <Text style={{ fontWeight: '600', color: appColors.black, marginTop: 4 }}>Everyting you need to know about buying an apartment</Text>
                            </View>
                        </View>

                    )}
                    keyExtractor={item => item.id}
                /> */}

                {/* <Text style={{ marginTop: 16, fontSize: 16, fontWeight: '600', color: appColors.black }}>Building guide</Text>
                <FlatList
                    data={DATA}
                    horizontal
                    style={{ marginTop: 12 }}
                    renderItem={() => (
                        <View style={{ width: 240, marginRight: 14, borderRadius: 8, borderColor: appColors.lightGrey, borderWidth: 1 }}>
                            <View style={{ height: 150 }}>
                                <Image source={Images.Boats} resizeMode='cover' style={{ width: '100%', height: '100%', borderTopRightRadius: 8, borderTopLeftRadius: 8, }} />
                            </View>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 6 }}>
                                <Text style={{ marginTop: 8, }}>Part one</Text>
                                <Text style={{ fontWeight: '600', color: appColors.black, marginTop: 4 }}>Everyting you need to know about buying an apartment</Text>
                            </View>
                        </View>

                    )}
                    keyExtractor={item => item.id}
                /> */}
            </View>
        </SafeAreaView >
    )
}

export default Guides

const styles = StyleSheet.create({
    root_: {
        flex: 1,
        backgroundColor: appColors.white
    },
    content_: {
        paddingHorizontal: 16,
        paddingBottom: 100
    },
    top_section: {
        marginBottom: 14,
        gap: 8,
        flexDirection: 'row',
    },
    text_20: {
        color: appColors.black,
        fontSize: 20,
        fontWeight: 'bold'
    },
    tabButton: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderRadius: 30,
    },
})