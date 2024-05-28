import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  changePasswordStatus: null,
  changePasswordError: null,
  childs: [], // Add initial state for childs
  childsLoading: false,
  childsError: null,
};

export const fetchDetailsById = createAsyncThunk(
  "details/fetchDetailsById",
  async (id) => {
    const response = await axios.get(`http://10.0.2.2:8000/parent/${id}`);
    return response.data;
  }
);

export const fetchAllChildsById = createAsyncThunk(
  "details/fetchAllChildsById",
  async (id) => {
    const response = await axios.get(`http://10.0.2.2:8000/parent/get-childs/${id}`);

    return response.data;
  }
);

export const changePassword = createAsyncThunk(
  "details/changePassword",
  async ({ id, oldPassword, newPassword }) => {
  
    try {
      const response = await axios.put(`http://10.0.2.2:8000/parent/${id}/change-password`, {
        oldPassword: oldPassword,
        newPassword: newPassword
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
);

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {}, // No additional reducers needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailsById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDetailsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDetailsById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAllChildsById.pending, (state) => {
        state.childsLoading = true;
        state.childsError = null;
      })
      .addCase(fetchAllChildsById.fulfilled, (state, action) => {
        state.childsLoading = false;
        state.childs = action.payload.children || [];
      })
      .addCase(fetchAllChildsById.rejected, (state, action) => {
        state.childsLoading = false;
        state.childsError = action.error.message;
      })
      .addCase(changePassword.pending, (state) => {
        state.changePasswordStatus = 'loading';
        state.changePasswordError = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.changePasswordStatus = 'succeeded';
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.changePasswordStatus = 'failed';
        state.changePasswordError = action.error.message;
      });
  },
});

export const selectDetails = (state) => state.details;
export const selectChilds = (state) => state.details.childs;
export const selectChildsLoading = (state) => state.details.childsLoading;
export const selectChildsError = (state) => state.details.childsError;
export default detailsSlice.reducer;
