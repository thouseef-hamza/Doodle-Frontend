import { createAsyncThunk } from "@reduxjs/toolkit";
import { INS_BASE_URL } from "../../../utils/api/api";

export const getBatchDetail = createAsyncThunk(
     "getBatchDetail",
     async (args,{rejectWithValue}) => {
          const { api, id} = args;
          try {
               const response = await api.get(INS_BASE_URL+`batch/${id}/`)
               return response.data
          } catch (error) {
               return rejectWithValue(error)
          }
     }
);

export const editBatchDetail = createAsyncThunk(
     "editBatchDetail",
     async (args,{rejectWithValue}) => {
          const { api, id , values,toast} = args;
          try {
               const response = await api.post(INS_BASE_URL+`batch/${id}/`,values)
               if (response.status === 200 ){
                    toast.success("Batch Updated Successfully")
               }
               return response.data
          } catch (error) {
               return rejectWithValue(error)
          }
     }
)