import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

export default function LandSize(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={props?.size && props?.size} height={props?.size && props?.size} viewBox="0 0 24 24" fill="none">
            <Path d="M21 9V3H15"
                stroke={props?.color ? props?.color : "#6E6E73"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
            <Path d="M3 15V21H9"
                stroke={props?.color ? props?.color : "#6E6E73"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
            <Path d="M21 3L13.5 10.5"
                stroke={props?.color ? props?.color : "#6E6E73"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
            <Path d="M10.5 13.5L3 21"
                stroke={props?.color ? props?.color : "#6E6E73"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
        </Svg>
    )
}