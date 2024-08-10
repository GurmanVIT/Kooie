// export const _fetch = async (url, method, data, header) => {
//     const LoginToken = await SecureStore.getItemAsync("accessToken");

//     const defaultHeaders = {
//         'Accept': 'application/json',
//         'Authorization': LoginToken ? `Bearer ${LoginToken}` : ''
//     };

//     const config = {
//         method: method,
//         headers: defaultHeaders,
//     };

//     // Handle FormData if it is provided in the request
//     if (data instanceof FormData) {
//         // If FormData is used, don't set 'Content-Type' header
//         config.body = data;
//     } else {
//         // Handle non-FormData cases
//         if (method === 'get' || method === 'GET') {
//             config.headers['Content-Type'] = 'application/json';
//         } else if (method === 'patch' || method === 'PATCH' || method === 'delete' || method === 'DELETE') {
//             config.headers['Content-Type'] = 'application/json';
//             config.body = JSON.stringify(data);
//         } else if (method === 'Imgpatch' || method === 'IMGPATCH') {
//             // Assuming no Content-Type is required for Imgpatch
//             config.body = data;
//         } else if (method === 'ImagePost' || method === 'ImagePost') {
//             // Assuming no Content-Type is required for ImagePost
//             config.body = data;
//         } else {
//             config.headers['Content-Type'] = 'application/json';
//             config.body = JSON.stringify(data);
//         }
//     }

//     return fetch(url, config)
//         .then((response) => {
//             // Handling response based on Content-Type
//             const contentType = response.headers.get('Content-Type');
//             if (contentType && contentType.includes('application/json')) {
//                 return response.json();
//             } else if (contentType && contentType.includes('text')) {
//                 return response.text();
//             } else {
//                 return response.blob();
//             }
//         })
//         .then((result) => result)
//         .catch((error) => ({
//             'status': 0,
//             'message': 'Something went wrong, ERROR: ' + error
//         }));
// };

// export default _fetch;


import { AsyncStorage } from '@react-native-async-storage/async-storage';

export const _fetch = async (url, method, data, header) => {
    try {
        const LoginToken = await AsyncStorage.getItem("accessToken");

        const defaultHeaders = {
            'Accept': 'application/json',
            // 'Authorization': LoginToken ? `Bearer ${LoginToken}` : ''
        };

        const config = {
            method: method,
            headers: defaultHeaders,
        };

        if (data instanceof FormData) {
            // If FormData is used, don't set 'Content-Type' header
            config.body = data;
        } else {
            // Handle JSON and other types of requests
            if (method === 'get' || method === 'GET') {
                config.headers['Content-Type'] = 'application/json';
            } else if (method === 'patch' || method === 'PATCH' || method === 'delete' || method === 'DELETE') {
                config.headers['Content-Type'] = 'application/json';
                config.body = JSON.stringify(data);
            } else if (method === 'Imgpatch' || method === 'IMGPATCH') {
                // Assuming no Content-Type is required for Imgpatch
                config.body = data;
            } else if (method === 'ImagePost' || method === 'ImagePost') {
                // Assuming no Content-Type is required for ImagePost
                config.body = data;
            } else {
                config.headers['Content-Type'] = 'application/json';
                config.body = JSON.stringify(data);
            }
        }

        const response = await fetch(url, config);
        const contentType = response.headers.get('Content-Type');

        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else if (contentType && contentType.includes('text')) {
            return await response.text();
        } else {
            return await response.blob();
        }
    } catch (error) {
        return {
            'status': 0,
            'message': 'Something went wrong, ERROR: ' + error.message
        };
    }
};

export default _fetch;