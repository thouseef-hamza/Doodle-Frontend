import { createAsyncThunk } from "@reduxjs/toolkit";
import { INS_BASE_URL } from "../../../utils/api/api";


// student Detail Edit
export const editStudentDetail = createAsyncThunk(     
     "editStudentDetail",     
     async (args,{rejectWithValue}) => {
          const {id,api,values} = args;
          try {
               const response = await api.put(INS_BASE_URL+`student/${id}/`,values)
               const result = await response.data
               console.log("result",result);
               return result
          } catch (error) {
               return rejectWithValue(error)
          }
     }
)

// Student Detail Get
export const getStudentDetail = createAsyncThunk(
     "getStudentDetail",
     async ({id,api},{rejectWithValue}) => {
          try {
               const response = await api.get(INS_BASE_URL+`student/${id}/`)
               return response.data;
          } catch (error) {
               return rejectWithValue(error)
          }
     }
)

// Student Delete
export const deleteStudentDetail = createAsyncThunk(
  "deleteStudentDetail",
  async (args, { rejectWithValue }) => {
    const { id, api } = args;
    try {
      const response = await api.get(INS_BASE_URL + `student/${id}/`);
      const result = await response.data;
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);