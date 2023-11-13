import { createSlice } from "@reduxjs/toolkit";
import { getBatchDetail } from "./InsBatchesDetailAction";

export const InsBatchesDetailSlice = createSlice({
  name: "InsBatchesDetailSlice",
  initialState:{
     batches:[],
     loading:false,
     error:null
  },
  extraReducers: (builder)=>{
     builder
     .addCase(getBatchDetail.pending,(state)=> {
          state.loading = true;
     })
     .addCase(getBatchDetail.fulfilled,(state)=>{
          state.loading = false;
     })
     .addCase(getBatchDetail.rejected, (state,action)=>{
          state.loading = false;
          state.error = action.payload;
     })
  }
});