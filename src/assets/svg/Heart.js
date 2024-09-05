import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Heart = (props) => {
    return (
        <Svg
            id="fi_2589175"
            height={(props.size) ? (props.size) : "512"}
            width={(props.size) ? (props.size) : "512"}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1">
            <Path
                d="m449.28 121.43a115.2 115.2 0 0 0 -137.89-35.75c-21.18 9.14-40.07 24.55-55.39 45-15.32-20.5-34.21-35.91-55.39-45a115.2 115.2 0 0 0 -137.89 35.75c-16.5 21.62-25.22 48.64-25.22 78.13 0 42.44 25.31 89 75.22 138.44 40.67 40.27 88.73 73.25 113.75 89.32a54.78 54.78 0 0 0 59.06 0c25-16.07 73.08-49.05 113.75-89.32 49.91-49.42 75.22-96 75.22-138.44 0-29.49-8.72-56.51-25.22-78.13z"
                fill="#f9595f">
            </Path>
        </Svg>
    )
}

export default Heart