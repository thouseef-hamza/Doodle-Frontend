import { createSlice } from "@reduxjs/toolkit";
import { createTask, listTasks } from "./InsTasksListCreateAction";

export const InsTasksListCreateSlice = createSlice({
  name: "InsTasksListCreateSlice",
  initialState:{
     tasks:[],
     loading:false,
     error:null
  },
  extraReducers: builder =>{
     builder
     .addCase(createTask.pending, state => {
          state.loading=true
     })
     .addCase(createTask.rejected, (state,action)=> {
          state.error = action.payload
          state.loading = false
     })
     .addCase(createTask.fulfilled,(state,action)=>{
          state.loading = false;
          state.error=null
          state.tasks.push(action.payload)

     })
     builder
     .addCase(listTasks.pending, state => {
          state.loading = true
     })
     .addCase(listTasks.rejected,(state,action)=>{
          state.loading = false
          state.error = action
     })
     .addCase(listTasks.fulfilled, (state,action)=> {
          state.loading=false
          state.error = null
          state.tasks = action.payload
     })
  }
});


export default InsTasksListCreateSlice.reducer;