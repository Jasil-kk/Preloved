import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./Axiosmethod";

// category
export const categoryApi = createAsyncThunk("admin/categoryApi", async(input) => {
    const respond = await axiosApi.post("/category/new",input);
    console.log(respond);
    window.location.reload();
    return respond.data
})

// subCategory
export const subCategoryApi = createAsyncThunk("admin/subCategoryApi", async() => {
    const respond = await axiosApi.post("/subcategory/new");
    console.log(respond);
    return respond.data
})

const initialState = {
    category: {},
    subCategory: {},
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {},
    extraReducers: {
        // category
        [categoryApi.pending]:(state) => {
            console.log("category pending");
        },
        [categoryApi.fulfilled]:(state, action) => {
            state.category = action.payload
            console.log("category success");
        },
        [categoryApi.rejected]:(state) => {
            console.log("category rejected");
        },
          // subCategory
          [subCategoryApi.pending]:(state) => {
            console.log("subCategory pending");
        },
        [subCategoryApi.fulfilled]:(state, action) => {
            state.subCategory = action.payload
            console.log("subCategory success");
        },
        [subCategoryApi.rejected]:(state) => {
            console.log("subCategory rejected");
        },
    }
})

export default adminSlice.reducer;