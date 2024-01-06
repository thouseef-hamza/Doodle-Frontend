import { createSlice } from "@reduxjs/toolkit";
import { createUPI, listUPI } from "./UPIListAction";

export const UPIListSlice = createSlice({
  name: "UPIListSlice",
  initialState: {
    upis: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(listUPI.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(listUPI.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.upis = action.payload;
      })
      .addCase(listUPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(createUPI.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createUPI.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.upis.push(action.payload);
      })
      .addCase(createUPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default UPIListSlice.reducer;
