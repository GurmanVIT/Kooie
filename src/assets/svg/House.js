import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'

const House = ({ color }) => {

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none">
            <G clip-path="url(#clip0_113_1470)">
                <Path d="M1.87867 28.8376V14.3368M30.0587 28.8376V14.261M31.3738 15.0607L16.0313 5.72999L0.688843 15.0607V11.3034L16.0313 1.97266L31.3738 11.3034V15.0607ZM0.626221 28.8376H31.3112V31.3425H0.626221V28.8376Z"
                    stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M8.14089 6.77129V3.16236H3.75733V9.43712M2.50488 0.657471H9.39334V3.16236H2.50488V0.657471ZM5.636 16.313H13.7769V28.8375H5.636V16.313Z"
                    stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M15.9686 13.8081C17.1791 13.8081 18.1604 12.8268 18.1604 11.6163C18.1604 10.4059 17.1791 9.42456 15.9686 9.42456C14.7581 9.42456 13.7769 10.4059 13.7769 11.6163C13.7769 12.8268 14.7581 13.8081 15.9686 13.8081Z"
                    stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M26.3013 26.3326H17.5342V20.0703C17.5342 17.6494 19.4968 15.6868 21.9177 15.6868C24.3387 15.6868 26.3013 17.6494 26.3013 20.0703V26.3326Z"
                    stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M17.5342 22.5752H26.3013V26.3325H17.5342V22.5752Z"
                    stroke={color}
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_113_1470">
                    <Rect width="32" height="32" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default House

const styles = StyleSheet.create({})