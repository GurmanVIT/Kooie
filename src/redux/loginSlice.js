// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, loginApi, } from "../utils/Constants";

export const loginUser = createAsyncThunk("loginUser", async (payload) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        console.log("Url ===> ", ApiBaseUrl + loginApi)
        console.log("Payload ===> ", payload)
        const response = await axios.post(ApiBaseUrl + loginApi, payload, config);
        console.log("Response Login ===> ", response.data)
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const loginSlice = createSlice({
    name: "loginReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearLoginData: (state) => {
            // Reset the data property to an empty array
            state.data = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isError = false;
            });
    },
});

export const { clearLoginData } = loginSlice.actions;
export default loginSlice.reducer;
