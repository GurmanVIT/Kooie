
import React from 'react'
import { ClipPath, Defs, G, Mask, Path, Rect, Svg } from 'react-native-svg'

export default function HouseStore({ color }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <G clip-path="url(#clip0_113_1646)">
                <Mask id="mask0_113_1646" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                    <Path d="M31.2499 31.25V0.750095H0.75V31.25H31.2499Z" fill="white" stroke="white" stroke-width="1.5" />
                </Mask>
                <G mask="url(#mask0_113_1646)">
                    <Path d="M0.625 31.375H31.3749" stroke={color} stroke-width="1.5" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M0.625 11.1083L16 0.625188L31.3749 11.1083V14.3376L16 3.85455L0.625 14.3376V11.1083Z" stroke={color} stroke-width="1.5" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M1.875 13.5748V31.2856" stroke={color} stroke-width="1.5" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M30.1248 13.5748V31.2856" stroke={color} stroke-width="1.5" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                </G>
                <Path d="M7.5249 9.85901V16.0288" stroke={color} stroke-width="1.5" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M24.4749 9.85901V16.0288" stroke={color} stroke-width="1.5" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M13.1748 6.00955V16.158" stroke={color} stroke-width="1.5" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M18.825 6.00955V16.158" stroke={color} stroke-width="1.5" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                <Mask id="mask1_113_1646" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                    <Path d="M31.2499 31.25V0.750095H0.75V31.25H31.2499Z" fill="white" stroke="white" stroke-width="1.5" />
                </Mask>
                <G mask="url(#mask1_113_1646)">
                    <Path d="M6 31.0625V16.375H25.9999V31.0625" stroke={color} stroke-width="1.5" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M8.5 31.0625V18.875H23.4999V31.0625" stroke={color} stroke-width="1.5" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M8.6604 19.3146L23.3394 30.9355" stroke={color} stroke-width="1.5" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M23.3394 19.3146L8.6604 30.9355" stroke={color} stroke-width="1.5" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M16 19.1875V31.0625" stroke={color} stroke-width="1.5" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_113_1646">
                    <Rect width="32" height="32" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}