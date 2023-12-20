import { createAsyncThunk } from "@reduxjs/toolkit";
import { TASKS_BASE_URL } from "../../../utils/api/api";

export const TaskAssignmentList = createAsyncThunk(
     "TaskAssignmentList",
     async (args,{rejectWithValue})=>{
          console.log("works")
          const {api,task_id} = args
          console.log(args);
          try{
               const response = await api.get(TASKS_BASE_URL+`institute/task/${task_id}/assignment/`);
               console.log(response);
               return response.data
          }catch(error){
               console.log(error);
               return rejectWithValue(error)
          }
     }
); 