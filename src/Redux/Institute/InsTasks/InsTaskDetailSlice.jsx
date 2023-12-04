import { createSlice } from "@reduxjs/toolkit";
import { editTaskDetails,getTaskDetails,deleteTaskDetail } from "./InsTaskDetailAction";


export const InsTaskDetailSlice = createSlice({
  name: "InsTaskDetailSlice",
  initialState:{
     taskDetails:"",
     loading:false,
     error:null
  },
  extraReducers:(builder)=>{
     builder
     .addCase(getTaskDetails.pending, state =>{
          state.loading=true
     })
     .addCase(getTaskDetails.rejected,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
     })
     .addCase(getTaskDetails.fulfilled, (state,action)=> {
          state.loading = false;
          state.taskDetails = action.payload;
          state.error=null;
     })
     builder
       .addCase(editTaskDetails.pending, (state) => {
         state.loading = true;
       })
       .addCase(editTaskDetails.rejected, (state, action) => {
         state.loading = false;
         state.error = action.payload;
       })
       .addCase(editTaskDetails.fulfilled, (state, action) => {
         state.loading = false;
         state.taskDetails = action.payload;
         state.error = null;
       });
       builder
         .addCase(deleteTaskDetail.pending, (state) => {
           state.loading = true;
         })
         .addCase(deleteTaskDetail.rejected, (state) => {
           state.loading = false;
         })
         .addCase(deleteTaskDetail.fulfilled, (state) => {
           state.loading = false;
           state.error = null;
         });
  }
});

export default InsTaskDetailSlice.reducer;
