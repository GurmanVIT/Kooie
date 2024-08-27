import { View, Text } from 'react-native'
import React from 'react'
import { ClipPath, Defs, G, Mask, Path, Rect, Svg } from 'react-native-svg'

export default function Deck(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={props.size ? props.size : "24"} height={props.size ? props.size : "24"} viewBox="0 0 24 24" fill="none">
            <G clip-path="url(#clip0_141_1210)">
                <Mask id="mask0_141_1210" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <Path d="M0 7.05719e-05H23.9999V24H0V7.05719e-05Z" fill="white" />
                </Mask>
                <G mask="url(#mask0_141_1210)">
                    <Path d="M23.2968 3.51568L12 0.703193V23.2969H23.2968V3.51568Z" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </G>
                <Path d="M20.4375 19.0781H14.8125V10.6406H20.4375V19.0781Z" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M17.625 19.0781V10.6406" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M20.4375 14.8594H14.8125" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Mask id="mask1_141_1210" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <Path d="M0 7.05719e-05H23.9999V24H0V7.05719e-05Z" fill="white" />
                </Mask>
                <G mask="url(#mask1_141_1210)">
                    <Path d="M12 12.0469H2.10938V9.23438H12" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M0.703125 23.2969H12" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M3.5625 23.2969V12.0469" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </G>
                <Path d="M3.5625 19.0781H12" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Mask id="mask2_141_1210" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <Path d="M0 7.05719e-05H23.9999V24H0V7.05719e-05Z" fill="white" />
                </Mask>
                <G mask="url(#mask2_141_1210)">
                    <Path d="M6.375 19.0781V23.2969" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M9.1875 23.2969V19.0781" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_141_1210">
                    <Rect width="24" height="24" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}