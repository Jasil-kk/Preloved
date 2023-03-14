import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "./Axiosmethod";



// registration

export const registerApi = createAsyncThunk("auth/registerApi", async(input) => {
    const respond = await axiosApi.post("/user/signup", input.data);
    console.log(respond);
    input.navigate("/")
})

// login

export const signInApi = createAsyncThunk("auth/signInApi", async(input) => {
    const respond = await axiosApi.post("/auth/user-signin", input.data);
    console.log(respond);
    if (respond?.data?.tokenRole?.token) {
        console.log(respond?.data?.tokenRole?.token);
        localStorage.setItem("token",respond?.data?.tokenRole?.token);
        input.navigate("/post")
    }
    return respond.data
})

// logout

export const signOutApi = createAsyncThunk("auth/signOutApi", async({navigate}) => {
    const token = localStorage.getItem("token");
    const respond = await axiosApi.post("/auth/user-logout",token);
    console.log(respond);
    localStorage.removeItem("token");
    navigate("/");

    return respond.data
})



const initialState = {
    user: {},
    token: "",
    loading: false,
    error: "",
    message:"",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers:{
        // register
        [registerApi.pending]:(state) => {
            console.log("register pending");
        },
        [registerApi.fulfilled]:(state, action) => {
            console.log("register success");
        },
        [registerApi.pending]:(state) => {
            console.log("register pending");
        },
        // signIn
        [signInApi.pending]:(state) => {
            console.log("login pending");
        },
        [signInApi.fulfilled]:(state, action) => {
            console.log("login success");
            state.token = action.payload.tokenRole.token;
        },
        [signInApi.rejected]:(state) => {
            console.log("login rejected");
        },
        // signOut 
        [signOutApi.pending]:(state) => {
            console.log("logout pending");
        },
        [signOutApi.fulfilled]:(state, action) => {
            state.message = action.payload.message;
            console.log("logout success");
           
        },
        [signOutApi.rejected]:(state) => {
            console.log("logout rejected");
        },
    }
})

export default authSlice.reducer;