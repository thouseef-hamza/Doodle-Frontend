import { createSlice } from "@reduxjs/toolkit";
import { deleteUPIDetail, editUPIDetail, getUPIDetail } from "./UPIDetailAction";

export const UPIDetailSlice = createSlice({
  name: "UPIDetailSlice",
  initialState: {
    upiDetails: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUPIDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUPIDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.batchDetails = action.payload;
        state.error = null;
      })
      .addCase(getUPIDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(editUPIDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editUPIDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.batchDetails = action.payload;
        state.error = null;
      })
      .addCase(editUPIDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(deleteUPIDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUPIDetail.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteUPIDetail.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default UPIDetailSlice.reducer;
