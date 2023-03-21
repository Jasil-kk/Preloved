import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "./Axiosmethod";

// registration

export const registerApi = createAsyncThunk(
  "auth/registerApi",
  async (input) => {
    const respond = await axiosApi.post("/user/signup", input.data);
    console.log(respond);
    input.navigate("/");
    return respond.data;
  }
);

// login

export const signInApi = createAsyncThunk("auth/signInApi", async (input) => {
  const respond = await axiosApi.post("/auth/user-signin", input.data);
  console.log(respond);
  if (respond?.data?.tokenRole?.token) {
    console.log(respond?.data?.tokenRole?.token);
    localStorage.setItem("token", respond?.data?.tokenRole?.token);
    localStorage.setItem("name", respond?.data?.userD?.name);
    input.navigate("/post");
  }
  return respond.data;
});

// logout

export const signOutApi = createAsyncThunk(
  "auth/signOutApi",
  async ({ navigate }) => {
    const token = localStorage.getItem("token");
    const respond = await axiosApi.post("/auth/user-logout", token);
    console.log(respond);
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.reload();
    navigate("/");

    return respond.data;
  }
);

// forgot password
export const forgetPasswordApi = createAsyncThunk(
  "auth/forgetPasswordApi",
  async (input) => {
    const respond = await axiosApi.post("/user/forgotpassword", input);
    console.log(respond.data.Token);
    return respond.data;
  }
);

// change password
export const changePasswordApi = createAsyncThunk(
  "auth/changePasswordApi",
  async ({pageId,input}) => {
    const respond = await axiosApi.post(`/user/resetpassword/${pageId}`, input);
    console.log(respond);
    return respond.data;
  }
);

const initialState = {
  user: {},
  email: "",
  changePassword: "",
  token: "",
  loading: false,
  error: "",
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // register
    [registerApi.pending]: (state) => {
      console.log("register pending");
    },
    [registerApi.fulfilled]: (state, action) => {
      state.user = action.payload;
      console.log("register success");
    },
    [registerApi.pending]: (state) => {
      console.log("register pending");
    },
    // signIn
    [signInApi.pending]: (state) => {
      console.log("login pending");
    },
    [signInApi.fulfilled]: (state, action) => {
      console.log("login success");
      state.user = action.payload.tokenRole;
      state.token = action.payload.tokenRole.token;
    },
    [signInApi.rejected]: (state) => {
      console.log("login rejected");
    },
    // signOut
    [signOutApi.pending]: (state) => {
      console.log("logout pending");
    },
    [signOutApi.fulfilled]: (state, action) => {
      state.message = action.payload.message;
      console.log("logout success");
    },
    [signOutApi.rejected]: (state) => {
      console.log("logout rejected");
    },
    // forgotPassword
    [forgetPasswordApi.pending]: (state) => {
      console.log("forgot pending");
    },
    [forgetPasswordApi.fulfilled]: (state, action) => {
      state.email = action.payload.message;
      console.log("forgot success");
    },
    [forgetPasswordApi.rejected]: (state) => {
      console.log("forgot rejected");
    },
    // changePassword
    [changePasswordApi.pending]: (state) => {
      console.log("change password pending");
    },
    [changePasswordApi.fulfilled]: (state, action) => {
      state.changePassword = action.payload.message;
      console.log("change password success");
    },
    [changePasswordApi.rejected]: (state) => {
      console.log("change password rejected");
    },
  },
});

export default authSlice.reducer;
