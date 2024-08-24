import { View, Text } from 'react-native'
import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'

export default function Apartment({ color }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <G clip-path="url(#clip0_113_1514)">
                <Path d="M3.92163 26.9803V31.3725M7.21575 3.13721H24.7844V31.3725H7.21575V3.13721Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M17.2549 5.64697V8.15678H14.7451V5.64697H17.2549Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M12.2354 5.64697V8.15678H9.72555V5.64697H12.2354Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M17.2549 10.6667V13.1766H14.7451V10.6667H17.2549Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M12.2354 10.6667V13.1766H9.72555V10.6667H12.2354Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M17.2549 15.6863V18.1961H14.7451V15.6863H17.2549Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M22.2744 5.64697V8.15678H19.7646V5.64697H22.2744Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M22.2744 10.6667V13.1766H19.7646V10.6667H22.2744Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M22.2744 15.6863V18.1961H19.7646V15.6863H22.2744Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M12.2354 15.6863V18.1961H9.72555V15.6863H12.2354Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M28.0784 26.9804V31.3725M28.0784 26.9804C26.2591 26.9804 24.7843 25.5056 24.7843 23.6863V18.9804C24.7843 17.1611 26.2591 15.6863 28.0784 15.6863C29.8977 15.6863 31.3725 17.1611 31.3725 18.9804V23.6863C31.3725 25.5056 29.8977 26.9804 28.0784 26.9804ZM0.627441 31.3725H31.3725M12.2353 20.7059H19.7647V31.3725H12.2353V20.7059ZM8.7843 0.627441H23.2157V3.13725H8.7843V0.627441ZM3.92156 26.9804C2.10226 26.9804 0.627441 25.5056 0.627441 23.6863V18.9804C0.627441 17.1611 2.10226 15.6863 3.92156 15.6863C5.74085 15.6863 7.21568 17.1611 7.21568 18.9804V23.6863C7.21568 25.5056 5.74085 26.9804 3.92156 26.9804Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_113_1514">
                    <Rect width="32" height="32" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}