import { createSlice } from "@reduxjs/toolkit";
import { StuTaskList } from "./StudTaskListAction";

export const StudTaskListSlice = createSlice({
  name: "StudTaskListSlice",
  initialState:{
     tasks:[],
     loading:false,
     error:null,
  },
  extraReducers: builder => {
     builder
       .addCase(StuTaskList.pending, (state) => {
         state.loading = true;
       })
       .addCase(StuTaskList.rejected, (state, action) => {
         state.loading = false;
         state.error = action.payload;
       })
       .addCase(StuTaskList.fulfilled, (state, action) => {
         state.loading = false;
         state.error = null;
         state.stulist = action.payload;
       });
  }
});

export default StudTaskListSlice.reducer;