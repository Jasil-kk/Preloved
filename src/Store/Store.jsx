import { configureStore } from "@reduxjs/toolkit";
import  adminReducer  from "./AdminSlice";
import AuthReducer from "./AuthSlice";
import getCategoryReducer from "./GetCategorySlice";
import PostReducer from "./PostSlice";

export const store = configureStore({
    reducer:{
        auth: AuthReducer,
        allCategory: getCategoryReducer,
        post: PostReducer,
        adminWork: adminReducer,
    }
})