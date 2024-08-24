import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddCurrentAddress(props) {
    return (
        <Svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9.75 11h5.5M12.5 13.75v-5.5"
                stroke="#292D32"
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <Path
                d="M4.12 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 01-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05z"
                stroke="#292D32"
                strokeWidth={1.5}
            />
        </Svg>
    )
}

export default AddCurrentAddress;
