import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

export default function ArrowUp(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={props.size ? props.size : "16"} height={props.size ? props.size : "16"} viewBox="0 0 16 16" fill="none">
            <Path d="M3.14645 10.3536C3.34171 10.5488 3.65829 10.5488 3.85355 10.3536L8 6.20711L12.1464 10.3536C12.3417 10.5488 12.6583 10.5488 12.8536 10.3536C13.0488 10.1583 13.0488 9.84171 12.8536 9.64645L8.35355 5.14645C8.15829 4.95118 7.84171 4.95118 7.64645 5.14645L3.14645 9.64645C2.95118 9.84171 2.95118 10.1583 3.14645 10.3536Z" fill="#6E6E73" />
        </Svg>
    )
}