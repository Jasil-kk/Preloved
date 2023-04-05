import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./Axiosmethod";


export const getCategoryApi = createAsyncThunk("get/getCategoryApi", async({page,pageLimit}) => {
    const respond = await axiosApi.get(`/category/all?page=${page}&limit=${pageLimit}`);
    console.log(respond);
    return respond.data
})

export const getSubCategoryApi = createAsyncThunk("get/getSubCategoryApi", async(categoryId) => {
    const respond = await axiosApi.get(`subcategory/all?categoryId=${categoryId}`);
    console.log(respond);
    return respond.data
})

const initialState = {
    allCategory: [],
    allSubCategory: [],
}

const getCategorySlice = createSlice({
    name:"get",
    initialState,
    reducers:{},
    extraReducers: {
        // get category
        [getCategoryApi.pending]:(state) => {
            console.log("category getting pending");
        },
        [getCategoryApi.fulfilled]:(state, action) => {
            console.log("category getting success");
            state.allCategory = action.payload
        },
        [getCategoryApi.rejected]:(state) => {
            console.log("category getting rejected");
        },
        // get subcategory
        [getSubCategoryApi.pending]:(state) => {
            console.log("subCategory getting pending");
        },
        [getSubCategoryApi.fulfilled]:(state, action) => {
            console.log("subCategory getting success");
            state.allSubCategory = action.payload
        },
        [getSubCategoryApi.rejected]:(state) => {
            console.log("subCategory getting rejected");
        },
    }
})

export default getCategorySlice.reducer;