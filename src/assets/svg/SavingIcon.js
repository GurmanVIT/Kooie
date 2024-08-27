import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SavingIcon(props) {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7.333 6h1.333V4.667H7.333M8 13.333A5.34 5.34 0 012.666 8 5.34 5.34 0 018 2.667 5.34 5.34 0 0113.333 8 5.34 5.34 0 018 13.334zm0-12a6.667 6.667 0 100 13.334A6.667 6.667 0 008 1.334zm-.667 10h1.333v-4H7.333v4z"
                fill="#6E6E73"
            />
        </Svg>
    )
}

export default SavingIcon
