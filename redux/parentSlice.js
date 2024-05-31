import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  changePasswordStatus: null,
  changePasswordError: null,
  childs: [],
  childsLoading: false,
  childsError: null,
  editChildStatus: null,
  editChildError: null,
  addChildStatus: null,  // Fixed typo
  addChildError: null,
  deleteChildStatus:null,
  deleteChildError:null
};

// Fetch parent details by ID
export const fetchDetailsById = createAsyncThunk(
  "details/fetchDetailsById",
  async (id) => {
    const response = await axios.get(`http://10.0.2.2:8000/parent/${id}`);
    return response.data;
  }
);

// Change password
export const changePassword = createAsyncThunk(
  "details/changePassword",
  async ({ id, oldPassword, newPassword }) => {
    try {
      const response = await axios.put(`http://10.0.2.2:8000/parent/${id}/change-password`, {
        oldPassword,
        newPassword
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
);

// Fetch all children by parent ID
export const fetchAllChildsById = createAsyncThunk(
  "details/fetchAllChildsById",
  async (id) => {
    const response = await axios.get(`http://10.0.2.2:8000/parent/get-childs/${id}`);
    return response.data;
  }
);

// Edit child by ID
export const editChildById = createAsyncThunk(
  "details/editChildById",
  async ({ _id, name, dob, gender }) => {
    try {
      const response = await axios.put(`http://10.0.2.2:8000/update_child`, {
        name,
        gender,
        dob,
        id: _id
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
);

// Add child by parent ID
export const fetchAddChildByParentId = createAsyncThunk(
  "details/fetchAddChildByParentId",
  async ({ id, name, gender, dob }) => {
    try {
      const response = await axios.post(`http://10.0.2.2:8000/add_child`, {  // Changed PUT to POST
        name,
        gender,
        dob,
        parent_id: id
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
);

//delete
export const deleteByChildId = createAsyncThunk(
  "details/deleteByChildId",
  async (id) => {
    console.log(id)
    const response = await axios.get(`http://10.0.2.2:8000/child/delete_child/${id}`);
    return response.data;
  }
);

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {}, // Placeholder for future reducers if needed
  extraReducers: (builder) => {
    builder
      // Fetch parent details
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
      // Fetch children
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
      // Change password
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
      })
      // Edit child
      .addCase(editChildById.pending, (state) => {
        state.editChildStatus = 'loading';
        state.editChildError = null;
      })
      .addCase(editChildById.fulfilled, (state) => {
        state.editChildStatus = 'succeeded';
      })
      .addCase(editChildById.rejected, (state, action) => {
        state.editChildStatus = 'failed';
        state.editChildError = action.error.message;
      })
      // Add child
      .addCase(fetchAddChildByParentId.pending, (state) => {
        state.addChildStatus = "loading";
        state.addChildError = null;
      })
      .addCase(fetchAddChildByParentId.fulfilled, (state) => {
        state.addChildStatus = "succeeded";
      })
      .addCase(fetchAddChildByParentId.rejected, (state, action) => {
        state.addChildStatus = "failed";
        state.addChildError = action.error.message;  // Fixed error extraction
      })
      //delete
      .addCase(deleteByChildId.pending,(state)=>{
        state.deleteChildStatus="loading";
        state.deleteChildError=null
      })
      .addCase(deleteByChildId.fulfilled,(state)=>{
        state.deleteChildStatus="success";
       
      })
      .addCase(deleteByChildId.rejected, (state, action) => {
        state.deleteByChildId = "failed";
        state.deleteChildError = action.error.message;  // Fixed error extraction
      })
      ;
  },
});

export const selectDetails = (state) => state.details;
export const selectChilds = (state) => state.details.childs;
export const selectChildsLoading = (state) => state.details.childsLoading;
export const selectChildsError = (state) => state.details.childsError;

export default detailsSlice.reducer;
