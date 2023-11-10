import { createSlice } from "@reduxjs/toolkit";
import { deleteStudentDetail, editStudentDetail, getStudentDetail } from "./InsStudentDetailAction";

export const InsStudentDetailSlice = createSlice({
  name: "InsStudentDetailSlice",
  initialState: {
    studentDetail: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStudentDetail.fulfilled, (state, action) => {
        state.studentDetail = action.payload;
        state.loading = false;
      })
      .addCase(getStudentDetail.rejected, (state) => {
        state.loading = false;
      });
     builder
       .addCase(editStudentDetail.pending, (state) => {
         state.loading = true;
       })
       .addCase(editStudentDetail.fulfilled, (state) => {
         state.loading = false;
       })
       .addCase(editStudentDetail.rejected, (state) => {
         state.loading = false;
       });
     builder
       .addCase(deleteStudentDetail.pending, (state) => {
         state.loading = true;
       })
       .addCase(deleteStudentDetail.fulfilled, (state) => {
         state.loading = false;
       })
       .addCase(deleteStudentDetail.rejected, (state) => {
         state.loading = false;
       });
  },
});

export default InsStudentDetailSlice.reducer
