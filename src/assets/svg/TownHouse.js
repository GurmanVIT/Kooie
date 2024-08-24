import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'

export default function TownHouse({ color }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <G clip-path="url(#clip0_113_1487)">
                <Path d="M8.31372 8.15685V16.9412M12.0784 12.549H4.54901M16 10.0392L8.31372 3.7647L0.627441 10.0392V6.90195L8.31372 0.627441L16 6.90195M16 10.0392V6.90195M16 10.0392L23.6863 3.7647L31.3725 10.0392V6.90195L23.6863 0.627441L16 6.90195"
                    stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M31.3725 10.0393V31.3726H0.627441V10.0393M16 10.0393V31.3726"
                    stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M8.31378 19.4509V28.2352M8.31378 19.4509C6.23459 19.4509 4.54907 21.1364 4.54907 23.2156V28.2352H12.0785V23.2156C12.0785 21.1364 10.393 19.4509 8.31378 19.4509ZM12.1099 23.843H4.58044M23.6863 8.15674V16.9411M23.6863 8.15674C21.6071 8.15674 19.9216 9.84226 19.9216 11.9214V16.9411H27.451V11.9214C27.451 9.84226 25.7655 8.15674 23.6863 8.15674ZM27.451 12.5489H19.9216M23.6863 19.4509V28.2352M23.6863 19.4509C21.6071 19.4509 19.9216 21.1364 19.9216 23.2156V28.2352H27.451V23.2156C27.451 21.1364 25.7655 19.4509 23.6863 19.4509ZM27.451 23.843H19.9216M12.0785 16.9411H4.54907V11.9214C4.54907 9.84226 6.23459 8.15674 8.31378 8.15674C10.393 8.15674 12.0785 9.84226 12.0785 11.9214V16.9411Z"
                    stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_113_1487">
                    <Rect width="32" height="32" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}