import { createSlice } from "@reduxjs/toolkit";
import { createBatches, listBatches } from "./InsBatchesListCreateAction";

export const InsBatchesListCreateSlice = createSlice({
     name:"InsBatchesListCreate",
     initialState:{
          batches:[],
          loading:false,
          error:null,
     },
     extraReducers: (builder) => {
          builder
               .addCase(listBatches.pending, (state)=> {
                    state.loading=true;
               })
               .addCase(listBatches.fulfilled, (state,action) => {
                    state.loading = false;
                    state.error = null;
                    state.batches=action.payload
               })
               .addCase(listBatches.rejected, (state,action) => {
                    state.loading=false;
                    state.error = action.payload;
               })
          builder
               .addCase(createBatches.pending, state => {
                    state.loading = true;
               })
               .addCase(createBatches.fulfilled, (state,action) => {
                    state.loading = false;
                    state.error=null;
                    state.batches.push(action.payload)
               })
               .addCase(createBatches.rejected, (state,action)=>{
                    state.loading = false;
                    state.error = action.payload;
               })
     }
})

export default InsBatchesListCreateSlice.reducer;
