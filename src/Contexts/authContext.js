import React, { createContext, useState, useEffect } from 'react';
import * as Keychain from 'react-native-keychain';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [authToken, setAuthToken] = useState(null);
    const [userID, setuserID] = useState(null);

    console.log({ authToken, userID });


    useEffect(() => {
        // Check if a token is stored when the app loads


        checkToken();
    }, []);
    // console.log({ authToken });

    const checkToken = async () => {
        try {
            const accessTokenCredentials = await Keychain.getGenericPassword({ service: 'accessToken' });
            const userIdCredentials = await Keychain.getGenericPassword({ service: 'userID' });
            const accessToken = accessTokenCredentials.password;
            const UserID = userIdCredentials.password;

            if (accessToken && UserID) {
                setAuthToken(accessToken)
                setuserID(UserID)
                setIsAuthenticated(true);
            } else {
                setAuthToken(null)
                setuserID(null)
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error("Keychain couldn't be accessed!", error);
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    };
    const login = async (token) => {
        try {
            await Keychain.setGenericPassword('accessToken', token);
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Failed to save the token", error);
        }
    };

    const logout = async () => {
        try {

            const result = await Keychain.resetGenericPassword({ service: 'accessToken' });
            await Keychain.resetGenericPassword({ service: 'userID' });

            if (result) {
                setIsAuthenticated(false);
                checkToken()
                console.log('Access token removed successfully!');
            } else {
                console.log('No access token found to remove.');
            }

        } catch (error) {
            console.error("Failed to remove the token", error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading, checkToken, authToken, userID }}>
            {children}
        </AuthContext.Provider>
    );
};