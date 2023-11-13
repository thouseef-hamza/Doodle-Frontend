import { createAsyncThunk } from "@reduxjs/toolkit";
import { INS_BASE_URL } from "../../../utils/api/api";

export const getBatchDetail = createAsyncThunk(
     "getBatchDetail",
     async (args,{rejectWithValue}) => {
          const { api, id} = args;
          try {
               const response = await api.get(INS_BASE_URL+`batch/${id}/`)
               console.log(response.data);
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
               const response = await api.put(INS_BASE_URL+`batch/${id}/`,values)
               if (response.status === 200 ){
                    toast.success("Batch Updated Successfully")
               }
               return response.data
          } catch (error) {
               return rejectWithValue(error)
          }
     }
)
export const deleteBatchDetail = createAsyncThunk(
     "deleteBatchDetail",
     async (args,{rejectWithValue}) => {
          const { api, id ,toast,navigate} = args;
          try {
               const response = await api.delete(INS_BASE_URL+`batch/${id}/`)
               if (response.status === 204 ){
                    navigate("/institute/batches")
                    toast.success("Batch Deleted Successfully")
               }
               return response.data
          } catch (error) {
               return rejectWithValue(error)
          }
     }
)