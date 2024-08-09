import React, { createContext, useState, useEffect } from 'react';
import * as Keychain from 'react-native-keychain';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if a token is stored when the app loads


        checkToken();
    }, []);

    const checkToken = async () => {
        try {
            const credentials = await Keychain.getGenericPassword();
            if (credentials) {
                setIsAuthenticated(true);
            } else {
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
            await Keychain.resetGenericPassword();
            setIsAuthenticated(false);
            checkToken()
            console.log('here in logout fucntion');

        } catch (error) {
            console.error("Failed to remove the token", error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading, checkToken }}>
            {children}
        </AuthContext.Provider>
    );
};