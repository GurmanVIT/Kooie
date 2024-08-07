import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CarIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Path
            stroke="#6E6E73"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m2.5 12 2 1M21.5 12.5l-2 .5M8 17.5l.246-.614c.365-.913.548-1.37.929-1.628.38-.258.872-.258 1.856-.258h1.938c.984 0 1.476 0 1.856.258.381.258.564.715.93 1.628L16 17.5M2 17v2.882c0 .379.24.725.622.894.247.11.483.224.769.224h1.718c.286 0 .522-.114.77-.224.38-.169.621-.515.621-.894V18M17.5 18v1.882c0 .379.24.725.622.894.247.11.483.224.769.224h1.718c.286 0 .522-.114.77-.224.38-.169.621-.515.621-.894V17M20 8.5l1-.5M4 8.5 3 8"
        />
        <Path
            stroke="#6E6E73"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m4.5 9 1.088-3.265c.44-1.32.66-1.98 1.184-2.357C7.296 3 7.992 3 9.383 3h5.234c1.391 0 2.087 0 2.61.378.525.377.745 1.037 1.185 2.357L19.5 9M4.5 9h15c.957 1.014 2.5 2.425 2.5 4v3.47c0 .57-.38 1.05-.883 1.117L18 18H6l-3.117-.413C2.38 17.521 2 17.041 2 16.47V13c0-1.575 1.543-2.986 2.5-4Z"
        />
    </Svg>
)
export default CarIcon
