import { createSlice } from "@reduxjs/toolkit";
import { editBatchDetail, getBatchDetail } from "./InsBatchesDetailAction";
import { deleteStudentDetail, editStudentDetail } from "../InsStudents/InsStudentDetailAction";

export const InsBatchesDetailSlice = createSlice({
  name: "InsBatchesDetailSlice",
  initialState:{
     batchDetails:[],
     loading:false,
     error:null
  },
  extraReducers: (builder)=>{
     builder
     .addCase(getBatchDetail.pending,(state)=> {
          state.loading = true;
     })
     .addCase(getBatchDetail.fulfilled,(state,action)=>{
          state.loading = false;
          state.batchDetails = action.payload
     })
     .addCase(getBatchDetail.rejected, (state,action)=>{
          state.loading = false;
          state.error = action.payload;
     })
     builder
     .addCase(editBatchDetail.pending, state => {
          state.loading = true;
     })
     .addCase(editBatchDetail.fulfilled, (state,action)=> {
          state.loading = false;
          state.batchDetail = action.payload
     })
     .addCase(editStudentDetail.rejected,(state,action)=>{
          state.loading = false;
          state.error = action.payload
     })
     builder
     .addCase(deleteStudentDetail.pending,state => {
          state.loading=true;
     })
     .addCase(deleteStudentDetail.fulfilled,state=>{
          state.loading=false;
     })
     .addCase(deleteStudentDetail.rejected, state => {
          state.loading = false;
     })
  }
});

export default InsBatchesDetailSlice.reducer;


