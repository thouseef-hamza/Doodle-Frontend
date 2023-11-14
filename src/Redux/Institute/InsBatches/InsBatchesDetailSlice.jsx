import { createSlice } from "@reduxjs/toolkit";
import { deleteBatchDetail, editBatchDetail, getBatchDetail } from "./InsBatchesDetailAction";

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
          state.error = null;
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
          state.batchDetails = action.payload;
          state.error = null;
     })
     .addCase(editBatchDetail.rejected,(state,action)=>{
          state.loading = false;
          state.error = action.payload;
     })
     builder
     .addCase(deleteBatchDetail.pending,state => {
          state.loading=true;
     })
     .addCase(deleteBatchDetail.fulfilled,state=>{
          state.loading=false;
          state.error=null;
     })
     .addCase(deleteBatchDetail.rejected, state => {
          state.loading = false;
     })
  }
});

export default InsBatchesDetailSlice.reducer;


