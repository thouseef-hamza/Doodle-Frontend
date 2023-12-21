import { createAsyncThunk } from "@reduxjs/toolkit";
import { TASKS_BASE_URL } from "../../../utils/api/api";

export const getTaskAssignment = createAsyncThunk(
     "getTaskAssignment",
     async (args,{rejectWithValue})=>{
          const {api,task_id,id} = args
          try{
               const response = await api.get(TASKS_BASE_URL+`institute/task/${task_id}/assignment/${id}/`)
               console.log(response.data);
               return response.data
          }catch(error){
               return rejectWithValue(error)
          }
     }
);
export const editTaskAssignment = createAsyncThunk(
     "editTaskAssignment",
     async (args,{rejectWithValue})=>{
          const { api, task_id, id, values, setStudTaskOpen } = args;
          try{
               const response = await api.put(TASKS_BASE_URL+`institute/task/${task_id}/assignment/${id}/`,values)
               setStudTaskOpen(false)
               return response.data
          }catch(error){
               return rejectWithValue(error)
          }
     }
);