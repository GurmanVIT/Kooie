import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";

const store = configureStore({
    reducer: {
        loginReducer: loginReducer,
    },
});

export default store;
