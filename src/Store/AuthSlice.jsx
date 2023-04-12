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
    localStorage.setItem("role", respond?.data?.tokenRole?.role);
    if (respond?.data?.tokenRole?.role === "admin") {
      input.navigate("/dashboard");
    } else {
      if (input.login) {
        input.navigate("/");
      } else if (input.sell) {
        input.navigate("/post");
      }
    }
  }
  return respond.data;
});

// logout

export const signOutApi = createAsyncThunk(
  "auth/signOutApi",
  async (navigate) => {
    const token = localStorage.getItem("token");
    const respond = await axiosApi.post("/auth/user-logout", token);
    console.log(respond);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
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
  async ({ pageId, input }) => {
    const respond = await axiosApi.post(`/user/resetpassword/${pageId}`, input);
    console.log(respond);
    return respond.data;
  }
);

// profile

export const userProfileApi = createAsyncThunk(
  "auth/userProfileApi",
  async (token) => {
    const respond = await axiosApi.get("/user/get", token);
    console.log(respond);
    return respond.data;
  }
);

// profile Image

export const profileImageApi = createAsyncThunk(
  "auth/profileImageApi",
  async ({ userId, formData }) => {
    const respond = await axiosApi.post(
      `/productImage/admin/new?userId=${userId}`,
      formData
    );
    console.log(respond);
    return respond.data;
  }
);

// profile update

export const profileUpdateApi = createAsyncThunk(
  "auth/profileUpdateApi",
  async ({ inputValue, navigate }) => {
    const respond = await axiosApi.post("/user/update", inputValue);
    console.log(respond);
    navigate("/");
    return respond.data;
  }
);

// profile delete
export const profileDeleteApi = createAsyncThunk(
  "auth/profileDeleteApi",
  async ({ token, navigate }) => {
    const respond = await axiosApi.post("/user/delete", token);
    console.log(respond);
    navigate("/");
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
  profile: {},
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
    // user profile
    [userProfileApi.pending]: (state) => {
      console.log("user profile pending");
    },
    [userProfileApi.fulfilled]: (state, action) => {
      state.profile = action.payload;
      console.log("user profile success");
    },
    [userProfileApi.rejected]: (state) => {
      console.log("user profile rejected");
    },
    // profile image
    [profileImageApi.pending]: (state) => {
      console.log("profile image pending");
    },
    [profileImageApi.fulfilled]: (state, action) => {
      state.profile = action.payload;
      console.log("profile image success");
    },
    [profileImageApi.rejected]: (state) => {
      console.log("profile image rejected");
    },
    //profile update
    [profileUpdateApi.pending]: (state) => {
      console.log("profile update pending");
    },
    [profileUpdateApi.fulfilled]: (state, action) => {
      state.profile = action.payload;
      console.log("profile update success");
    },
    [profileUpdateApi.rejected]: (state) => {
      console.log("profile update rejected");
    },
    //profile delete
    [profileDeleteApi.pending]: (state) => {
      console.log("profile delete pending");
    },
    [profileDeleteApi.fulfilled]: (state, action) => {
      state.profile = action.payload;
      console.log("profile delete success");
    },
    [profileDeleteApi.rejected]: (state) => {
      console.log("profile delete rejected");
    },
  },
});

export default authSlice.reducer;
