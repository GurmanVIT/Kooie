import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg';


export default function Calculater(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={props?.size && props?.size} height={props?.size && props?.size} viewBox="0 0 25 24" fill="none">
            <Path d="M10.5 22H14.5C19.5 22 21.5 20 21.5 15V9C21.5 4 19.5 2 14.5 2H10.5C5.5 2 3.5 4 3.5 9V15C3.5 20 5.5 22 10.5 22Z"
                stroke={props?.color ? props?.color : "#6E6E73"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M17 7.58008V8.58008C17 9.40008 16.33 10.0801 15.5 10.0801H9.5C8.68 10.0801 8 9.41008 8 8.58008V7.58008C8 6.76008 8.67 6.08008 9.5 6.08008H15.5C16.33 6.08008 17 6.75008 17 7.58008Z"
                stroke={props?.color ? props?.color : "#6E6E73"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M8.63612 14H8.64767"
                stroke={props?.color ? props?.color : "#6E6E73"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M12.4952 14H12.5068"
                stroke={props?.color ? props?.color : "#6E6E73"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M16.3544 14H16.3659"
                stroke={props?.color ? props?.color : "#6E6E73"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M8.63612 17.5H8.64767"
                stroke={props?.color ? props?.color : "#6E6E73"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M12.4952 17.5H12.5068"
                stroke={props?.color ? props?.color : "#6E6E73"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M16.3544 17.5H16.3659"
                stroke={props?.color ? props?.color : "#6E6E73"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
};