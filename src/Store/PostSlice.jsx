import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./Axiosmethod";


export const postApi = createAsyncThunk("post/postApi", async(inputSelector) => {
    console.log(inputSelector);
    const respond = await axiosApi.post("/product/new",inputSelector);
    console.log(respond);
    navigate("/")
    return respond.data
})

const initialState = {
    data: [],
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: {
        [postApi.pending]:(state) => {
            console.log("posting pending");
        },
        [postApi.fulfilled]:(state, action) => {
            state.data = action.payload
            console.log("posting success");
        },
        [postApi.rejected]:(state) => {
            console.log("posting rejected");
        }
    }
})

export default postSlice.reducer;
