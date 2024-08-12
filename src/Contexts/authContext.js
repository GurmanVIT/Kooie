import React, { createContext, useState, useEffect } from 'react';
import * as Keychain from 'react-native-keychain';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [authToken, setAuthToken] = useState(null);

    console.log({ authToken });


    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async () => {
        try {
            const accessTokenCredentials = await Keychain.getGenericPassword({ service: 'accessToken' });
            const accessToken = accessTokenCredentials.password;

            if (accessToken) {
                setAuthToken(accessToken)
                setIsAuthenticated(true);
            } else {
                setAuthToken(null)
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
        <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading, checkToken, authToken, }}>
            {children}
        </AuthContext.Provider>
    );
};