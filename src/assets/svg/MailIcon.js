import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

export default function MailIcon(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg"
            width={props.size ? props.size : "24"}
            height={props.size ? props.size : "24"}
            viewBox="0 0 24 25" fill="none">
            <Path d="M17 21.0293H7C4 21.0293 2 19.5293 2 16.0293V9.0293C2 5.5293 4 4.0293 7 4.0293H17C20 4.0293 22 5.5293 22 9.0293V16.0293C22 19.5293 20 21.0293 17 21.0293Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M17 9.5293L13.87 12.0293C12.84 12.8493 11.15 12.8493 10.12 12.0293L7 9.5293" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}