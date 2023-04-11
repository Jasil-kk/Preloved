import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./Axiosmethod";

// category create
export const categoryApi = createAsyncThunk(
  "admin/categoryApi",
  async (input) => {
    const respond = await axiosApi.post("/category/new", input);
    console.log(respond);
    return respond.data;
  }
);

// category update
export const updateCategoryApi = createAsyncThunk(
  "admin/updateCategoryApi",
  async ({ categoryID, input }) => {
    const respond = await axiosApi.put(`/category/update/${categoryID}`, input);
    console.log(respond);
    return respond.data;
  }
);

// category delete
export const deleteCategoryApi = createAsyncThunk(
  "admin/deleteCategoryApi",
  async (categoryID) => {
    const respond = await axiosApi.delete(`/category/delete/${categoryID}`);
    console.log(respond);
    return respond.data;
  }
);

// subCategory create
export const subCategoryApi = createAsyncThunk(
  "admin/subCategoryApi",
  async (input) => {
    const respond = await axiosApi.post("/subcategory/new",input);
    console.log(respond);
    return respond.data;
  }
);

// subCategory update
export const updateSubCategoryApi = createAsyncThunk(
  "admin/updateSubCategoryApi",
  async ({selectcategoryID,input}) => {
    const respond = await axiosApi.put(`/subcategory/update/${selectcategoryID}`,input);
    console.log(respond);
    return respond.data;
  }
);

// sub category delete

export const deleteSubCategoryApi = createAsyncThunk(
  "admin/deleteSubCategoryApi",
  async (categoryID) => {
    const respond = await axiosApi.delete(`/subcategory/delete/${categoryID}`);
    console.log(respond);
    return respond.data;
  }
);

// get Post

export const getPostApi = createAsyncThunk("admin/getPostApi", async ({page,pageLimit}) => {
  const respond = await axiosApi.get(`/product/admin/all?page=${page}&limit=${pageLimit}`);
  console.log(respond);
  return respond.data;
})

// get PostAll 

export const getPostAllApi = createAsyncThunk("admin/getPostApi", async () => {
  const respond = await axiosApi.get(`/product/admin/all`);
  console.log(respond);
  return respond.data;
})

// delete Post

export const deletePostApi = createAsyncThunk("admin/deletePostApi", async (productId) => {
  const respond = await axiosApi.delete(`/product/admin/delete/${productId}`);
  console.log(respond);
  return respond.data;
})

// post SingleView

export const singlePostApi = createAsyncThunk("admin/singlePostApi", async (productID) => {
  const respond = await axiosApi.get(`/product/seller/all/${productID}`);
  console.log(respond);
  return respond.data;
})

// user
export const usersGetApi = createAsyncThunk("admin/usersGetApi", async ({page,pageLimit}) => {
  const respond = await axiosApi.get(`/user/user-all?page=${page}&limit=${pageLimit}`)
  console.log(respond);
  return respond.data;
})

// user delete

export const usersDeleteApi = createAsyncThunk("admin/usersDeleteApi", async (userID) => {
  const respond = await axiosApi.delete(`/user/user-delete/${userID}`)
  console.log(respond);
  return respond.data;
})

// get count

export const getCountApi = createAsyncThunk("admin/getCountApi",async () => {
  const respond = await axiosApi.get("/count/all")
  console.log(respond);
  return respond.data;
})

const initialState = {
  category: {},
  subCategory: {},
  getPost: {},
  singleProduct: {},
  users: {},
  count: {},
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: {
    // category create
    [categoryApi.pending]: (state) => {
      console.log("category pending");
    },
    [categoryApi.fulfilled]: (state, action) => {
      state.category = action.payload;
      console.log("category success");
    },
    [categoryApi.rejected]: (state) => {
      console.log("category rejected");
    },
    // category Update
    [updateCategoryApi.pending]: (state) => {
      console.log("category updation pending");
    },
    [updateCategoryApi.fulfilled]: (state, action) => {
      state.category = action.payload;
      console.log("category updation success");
    },
    [updateCategoryApi.rejected]: (state) => {
      console.log("category updation rejected");
    },
    // category delete
    [deleteCategoryApi.pending]: (state) => {
      console.log("category deletion pending");
    },
    [deleteCategoryApi.fulfilled]: (state, action) => {
      state.category = action.payload;
      console.log("category deletion success");
    },
    [deleteCategoryApi.rejected]: (state) => {
      console.log("category deletion rejected");
    },
    // subCategory create
    [subCategoryApi.pending]: (state) => {
      console.log("subCategory create pending");
    },
    [subCategoryApi.fulfilled]: (state, action) => {
      state.subCategory = action.payload;
      console.log("subCategory create success");
    },
    [subCategoryApi.rejected]: (state) => {
      console.log("subCategory create rejected");
    },
    // subCategory update
    [updateSubCategoryApi.pending]: (state) => {
      console.log("subCategory update pending");
    },
    [updateSubCategoryApi.fulfilled]: (state, action) => {
      state.subCategory = action.payload;
      console.log("subCategory update success");
    },
    [updateSubCategoryApi.rejected]: (state) => {
      console.log("subCategory update rejected");
    },
    // subCategory delete
    [deleteSubCategoryApi.pending]: (state) => {
      console.log("subCategory delete pending");
    },
    [deleteSubCategoryApi.fulfilled]: (state, action) => {
      state.subCategory = action.payload;
      console.log("subCategory delete success");
    },
    [deleteSubCategoryApi.rejected]: (state) => {
      console.log("subCategory delete rejected");
    },
     // getPost
     [getPostApi.pending]: (state) => {
      console.log("getPost pending");
    },
    [getPostApi.fulfilled]: (state, action) => {
      state.getPost = action.payload;
      console.log("getPost success");
    },
    [getPostApi.rejected]: (state) => {
      console.log("getPost rejected");
    },
     // deletePost
     [deletePostApi.pending]: (state) => {
      console.log("getPost pending");
    },
    [deletePostApi.fulfilled]: (state, action) => {
      state.getPost = action.payload;
      console.log("getPost success");
    },
    [deletePostApi.rejected]: (state) => {
      console.log("getPost rejected");
    },
    // single product
    [singlePostApi.pending]: (state) => {
      console.log("single product pending");
    },
    [singlePostApi.fulfilled]: (state, action) => {
      state.singleProduct = action.payload;
      console.log("single product success");
    },
    [singlePostApi.rejected]: (state) => {
      console.log("single product rejected");
    },
       // users
       [usersGetApi.pending]: (state) => {
        console.log("users getting pending");
      },
      [usersGetApi.fulfilled]: (state, action) => {
        state.users = action.payload;
        console.log("users getting success");
      },
      [usersGetApi.rejected]: (state) => {
        console.log("users getting rejected");
      },
          // user delete
          [usersDeleteApi.pending]: (state) => {
            console.log("user delete pending");
          },
          [usersDeleteApi.fulfilled]: (state, action) => {
            state.users = action.payload;
            console.log("user delete success");
          },
          [usersDeleteApi.rejected]: (state) => {
            console.log("user delete rejected");
          },
          // get count
          [getCountApi.pending]: (state) => {
            console.log("count getting pending");
          },
          [getCountApi.fulfilled]: (state, action) => {
            state.count = action.payload;
            console.log("count getting success");
          },
          [getCountApi.rejected]: (state) => {
            console.log("count getting rejected");
          },
  },
});

export default adminSlice.reducer;
