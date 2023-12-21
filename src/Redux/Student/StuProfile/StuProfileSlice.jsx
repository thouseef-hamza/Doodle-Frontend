import { createSlice } from "@reduxjs/toolkit";
import { editStuProfile, getStuProfile } from "./StuProfileAction";

export const StuProfileSlice = createSlice({
  name: "StuProfileSlice",
  initialState: {
    stuDetails: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStuProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStuProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.stuDetails = action.payload;
      })
      .addCase(getStuProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(editStuProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(editStuProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.stuDetails = action.payload;
      })
      .addCase(editStuProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default StuProfileSlice.reducer
