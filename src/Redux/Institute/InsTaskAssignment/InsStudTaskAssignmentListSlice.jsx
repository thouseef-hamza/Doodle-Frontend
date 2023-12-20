import { createSlice } from "@reduxjs/toolkit";
import { TaskAssignmentList } from "./InsStudTaskAssignmentListAction";

export const InsStuTaskAssignmentListSlice = createSlice({
  name: "InsStuTaskAssignmentListSlice",
  initialState:{
     stulist:[],
     loading:false,
     error:null,
  },
  extraReducers: builder => {
     builder
     .addCase(TaskAssignmentList.pending,state=>{
          state.loading=true
     })
     .addCase(TaskAssignmentList.rejected,(state,action)=>{
          state.loading=false;
          state.error=action.payload
     })
     .addCase(TaskAssignmentList.fulfilled,(state,action)=>{
          state.loading=false;
          state.error=null;
          state.stulist=action.payload;
     })
  }
});

export default InsStuTaskAssignmentListSlice.reducer