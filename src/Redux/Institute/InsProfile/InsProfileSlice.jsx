import { createSlice } from "@reduxjs/toolkit";
import { deleteInsProfile, editInsProfile, getInsProfile } from "./InsProfileAction";

export const InsProfileSlice = createSlice({
  name: "InsProfileSlice",
  initialState: {
    insDetails: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInsProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInsProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.insDetails = action.payload;
      })
      .addCase(getInsProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(editInsProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(editInsProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.insDetails = action.payload;
      })
      .addCase(editInsProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
     builder
     .addCase(deleteInsProfile.pending, state => {
          state.loading=true;
     })
     .addCase(deleteInsProfile.fulfilled, state=>{
          state.loading = false;
     })
     .addCase(deleteInsProfile.rejected, state=> {
          state.loading = false;
     })
  },
});

export default InsProfileSlice.reducer
