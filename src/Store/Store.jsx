import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice"

export const store = configureStore({
    reducer:{
        signin: AuthReducer,
    }
})