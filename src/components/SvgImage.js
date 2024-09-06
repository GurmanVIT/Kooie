// import React from 'react';
// import { Image } from 'react-native-remote-svg';
// import { scale } from 'react-native-size-matters';
// import { IMAGE_URL } from '../config/config';

// const SvgImage = (props) => {
//     console.log({ props });

//     return (
//         <Image
//             source={{ uri: `${IMAGE_URL + 'images/' + props?.url}` }}
//             style={{ width: scale(32), height: scale(32) }}
//         />
//     )
// }

// export default SvgImage;

import React from 'react';
import { SvgUri } from 'react-native-svg';
import { scale } from 'react-native-size-matters';
import { IMAGE_URL } from '../config/config';

const SvgImage = (props) => {
    console.log({ props });
    // Text>{props.url}</Text>
    return (
        <SvgUri
            width={scale(32)}
            height={scale(32)}
            uri={`${IMAGE_URL + 'images/' + props?.url}`}
        />
    );
};

export default SvgImage; 