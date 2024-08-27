import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

export default function ArrowDown(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size ? props.size : "16"}
            height={props.size ? props.size : "16"}
            viewBox="0 0 16 17"
            fill="none">
            <Path
                d="M12.8536 6.17574C12.6583 5.98048 12.3417 5.98048 12.1464 6.17574L8 10.3222L3.85355 6.17574C3.65829 5.98048 3.34171 5.98048 3.14645 6.17574C2.95118 6.37101 2.95118 6.68759 3.14645 6.88285L7.64645 11.3828C7.84171 11.5781 8.15829 11.5781 8.35355 11.3828L12.8536 6.88285C13.0488 6.68759 13.0488 6.37101 12.8536 6.17574Z"
                fill="#6E6E73"
            />
        </Svg>
    )
}