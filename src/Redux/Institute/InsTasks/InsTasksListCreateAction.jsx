import { createAsyncThunk } from "@reduxjs/toolkit";
import { TASKS_BASE_URL } from "../../../utils/api/api";

export const createTask = createAsyncThunk(
     "createTask",
     async (args,{rejectWithValue})=>{
          const {values,api,toast,setOpen} = args;
          try{
               const response = await api.post(TASKS_BASE_URL + "institute/",values);
               setOpen(false)
               toast.success("Task Created Successfully")
               return response.data
          } catch (error) {
               setOpen(false)
               return rejectWithValue(error);
          }
     }
)

export const listTasks = createAsyncThunk(
     "listTasks",
     async (args,{rejectWithValue})=>{
          const {api} = args;
          try {
               const response = await api.get(TASKS_BASE_URL + "institute/");
               console.log(response);
               return response.data
          } catch (error) {
               console.log(error);
               return rejectWithValue(error)
          }
     }
)