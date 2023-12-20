import { createSlice } from "@reduxjs/toolkit";
import { getTaskAssignment,editTaskAssignment } from "./InsStudTaskAssignmentDetailAction";

export const InsStudTaskAssignmentDetailSlice = createSlice({
  name: "InsStudTaskAssignmentDetailSlice",
  initialState:{
     taskAssignDetails:{},
     loading:false,
     error:null
  },
  extraReducers:builder=>{
     builder
     .addCase(getTaskAssignment.pending,state=>state.loading=true)
     .addCase(getTaskAssignment.rejected,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
     })
     .addCase(getTaskAssignment.fulfilled,(state,action)=>{
          state.loading=false;
          state.error=null;
          state.taskAssignDetails=action.payload;
     })
     builder
     .addCase(editTaskAssignment.pending,state=>state.loading=true)
     .addCase(editTaskAssignment.rejected,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
     })
     .addCase(editTaskAssignment.fulfilled,(state,action)=>{
          state.loading=false;
          state.error=null;
          state.taskAssignDetails=action.payload;
     })
  }
});

export default InsStudTaskAssignmentDetailSlice.reducer;