import { createAsyncThunk } from "@reduxjs/toolkit";
import { INS_BASE_URL } from "../../../utils/api/api";


// student Detail Edit
export const editStudentDetail = createAsyncThunk(     
     "editStudentDetail",     
     async (args,{rejectWithValue}) => {
          const {id,api,values,toast} = args;
          try {
               const response = await api.put(INS_BASE_URL+`student/${id}/`,values)
               if (response.status === 200){
                    toast.success("Student Updated Successfully")
               }
               return response.data;
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
    const { id, api ,navigate} = args;
    try {
      const response = await api.delete(INS_BASE_URL + `student/${id}/`);
      if (response.status === 204){
          navigate("/institute/students")
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);