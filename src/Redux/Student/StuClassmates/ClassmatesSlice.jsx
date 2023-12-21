import { createSlice } from "@reduxjs/toolkit";
import { listClassmates } from "./ClassmatesAction";

export const stuClassmatesListSlice = createSlice({
  name: "stuClassmatesListSlice",
  initialState: {
    classmates: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(listClassmates.pending, (state) => {
        state.loading = true;
      })
      .addCase(listClassmates.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.classmates = action.payload;
      })
      .addCase(listClassmates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default stuClassmatesListSlice.reducer;
