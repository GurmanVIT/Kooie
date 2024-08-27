import { View, Text } from 'react-native'
import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'

export default function Courtyard(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={props.size ? props.size : "24"} height={props.size ? props.size : "24"} viewBox="0 0 24 24" fill="none">
            <G clip-path="url(#clip0_141_1261)">
                <Path d="M4.46873 14.7188L2.58595 12.8438L0.703125 14.7188V23.2969H4.46873M4.46873 14.7188V23.2969M4.46873 14.7188L6.35156 12.8438L8.23439 14.7188M4.46873 23.2969H8.23439M8.23439 14.7188V23.2969M8.23439 14.7188L10.1172 12.8438L12 14.7188M8.23439 23.2969H12M12 14.7188V23.2969M12 14.7188L13.8828 12.8438L15.7656 14.7188V23.2969H12" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M19.5313 14.7188L17.6485 12.8438L15.7656 14.7188V23.2969H19.5313M19.5313 14.7188V23.2969M19.5313 14.7188L21.4141 12.8438L23.2969 14.7188V23.2969H19.5313" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M6.37508 9.52555C8.66773 9.52555 10.5263 7.66699 10.5263 5.37435C10.5263 3.0817 8.66773 1.22314 6.37508 1.22314C4.08243 1.22314 2.22388 3.0817 2.22388 5.37435C2.22388 7.66699 4.08243 9.52555 6.37508 9.52555Z" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M6.375 12.8672V5.37469M17.6719 12.8672V5.71875M20.3527 4.03402C20.3948 3.84132 20.4161 3.64466 20.4162 3.44742C20.4162 1.93181 19.1875 0.703125 17.6719 0.703125C16.1562 0.703125 14.9276 1.93181 14.9276 3.44742C14.9276 3.64884 14.9499 3.84492 14.991 4.03402C13.9778 4.43756 13.2614 5.42672 13.2614 6.58378C13.2614 8.09944 14.49 9.32808 16.0057 9.32808C16.6325 9.32808 17.2098 9.11752 17.6718 8.76384C18.1339 9.11752 18.7112 9.32808 19.338 9.32808C20.8537 9.32808 22.0823 8.09939 22.0823 6.58378C22.0824 5.42672 21.3659 4.43761 20.3527 4.03402Z" stroke="#1D1D1F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_141_1261">
                    <Rect width="24" height="24" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}