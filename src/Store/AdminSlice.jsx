import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./Axiosmethod";

// category create
export const categoryApi = createAsyncThunk(
  "admin/categoryApi",
  async (input) => {
    const respond = await axiosApi.post("/category/new", input);
    console.log(respond);
    window.location.reload();
    return respond.data;
  }
);

// category update
export const updateCategoryApi = createAsyncThunk(
  "admin/updateCategoryApi",
  async ({ categoryID, input }) => {
    const respond = await axiosApi.put(`/category/update/${categoryID}`, input);
    console.log(respond);
    window.location.reload();
    return respond.data;
  }
);

// category delete
export const deleteCategoryApi = createAsyncThunk(
  "admin/deleteCategoryApi",
  async (categoryID) => {
    const respond = await axiosApi.delete(`/category/delete/${categoryID}`);
    console.log(respond);
    window.location.reload();
    return respond.data;
  }
);

// subCategory
export const subCategoryApi = createAsyncThunk(
  "admin/subCategoryApi",
  async () => {
    const respond = await axiosApi.post("/subcategory/new");
    console.log(respond);
    return respond.data;
  }
);

const initialState = {
  category: {},
  subCategory: {},
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
    // subCategory
    [subCategoryApi.pending]: (state) => {
      console.log("subCategory pending");
    },
    [subCategoryApi.fulfilled]: (state, action) => {
      state.subCategory = action.payload;
      console.log("subCategory success");
    },
    [subCategoryApi.rejected]: (state) => {
      console.log("subCategory rejected");
    },
  },
});

export default adminSlice.reducer;
