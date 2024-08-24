import { View, Text } from 'react-native'
import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'

export default function Villa({ color }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <G clip-path="url(#clip0_113_1640)">
                <Path d="M18.196 8.36572V15.6862H4.39209V8.36572" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M20.7059 10.0392L11.2941 3.7647L1.88234 10.0392V6.90195L11.2941 0.627441L20.7059 6.90195V10.0392ZM6.90195 10.0392H10.0392V13.1765H6.90195V10.0392ZM12.549 10.0392H15.6863V13.1765H12.549V10.0392ZM0.627441 15.6863H31.3725V18.1961H0.627441V15.6863Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M16 3.76465H26.3529L30.1176 15.6862H18.1961M0.627441 18.196H31.3725V31.3725H0.627441V18.196Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M16 20.7058C13.401 20.7058 11.2941 22.8127 11.2941 25.4117V31.3725H20.7058V25.4117C20.7058 22.8127 18.5989 20.7058 16 20.7058ZM16 20.7058V31.3725M8.78427 28.8627H3.13721V23.5293C3.13721 21.9699 4.40133 20.7058 5.96074 20.7058C7.52014 20.7058 8.78427 21.9699 8.78427 23.5293V28.8627ZM28.8627 28.8627H23.2156V23.5293C23.2156 21.9699 24.4798 20.7058 26.0392 20.7058C27.5986 20.7058 28.8627 21.9699 28.8627 23.5293V28.8627Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_113_1640">
                    <Rect width="32" height="32" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}