import { createAsyncThunk } from "@reduxjs/toolkit";
import { TASKS_BASE_URL } from "../../../utils/api/api";

export const TaskAssignmentList = createAsyncThunk(
     "TaskAssignmentList",
     async (args,{rejectWithValue})=>{
          console.log("works")
          const {api,task_id,searchQuery,sortQuery,page} = args
          console.log(api, task_id, searchQuery, sortQuery, page);
           let endpoint =`institute/task/${task_id}/assignment/`;
           const queryParams = [];
           if (searchQuery) {
             queryParams.push(`search=${searchQuery}`);
           }
           if (sortQuery) {
             queryParams.push(`sort=${sortQuery}`);
           }
           if (page) {
             queryParams.push(`page=${page}`);
           }
            if (queryParams.length > 0) {
              endpoint += "?" + queryParams.join("&");
            }
          try{
               const response = await api.get(TASKS_BASE_URL+endpoint);
               console.log(response);
               return response.data
          }catch(error){
               console.log(error);
               return rejectWithValue(error)
          }
     }
); 