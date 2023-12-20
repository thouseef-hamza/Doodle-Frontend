import { createAsyncThunk } from "@reduxjs/toolkit";
import { TASKS_BASE_URL } from "../../../utils/api/api";

// Task Detail Edit
export const editTaskDetails = createAsyncThunk(
     "editTaskDetails",
     async (args,{rejectWithValue}) => {
          const {values,id,api,toast} = args;
          try{
               const response = await api.put(
                 TASKS_BASE_URL + `institute/task/${id}/`,
                 values
               );
               if (response.status === 200) {
                 toast.success("Task Updated Successfully");
               }
               return response.data;
          } catch (error) {
               console.log(error);
               return rejectWithValue(error)
          }
     }
)

// Task Detail Fetch
export const getTaskDetails = createAsyncThunk(
  "getTaskDetails",
  async ({ id, api }, { rejectWithValue }) => {
    try {
      const response = await api.get(TASKS_BASE_URL + `institute/task/${id}/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Task Detail Delete
export const deleteTaskDetail = createAsyncThunk(
  "deleteTaskDetail",
  async (args, { rejectWithValue }) => {
    const { id, api, navigate } = args;
    try {
      const response = await api.delete(
        TASKS_BASE_URL + `institute/task/${id}/`
      );
      if (response.status === 204) {
        navigate("/institute/task");
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);