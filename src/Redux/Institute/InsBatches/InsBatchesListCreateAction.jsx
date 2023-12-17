import { createAsyncThunk } from "@reduxjs/toolkit";
import { INS_BASE_URL } from "../../../utils/api/api";


export const listBatches = createAsyncThunk(
     "listBatches",
     async (args,{rejectWithValue}) => {
          const { api,searchQuery,sortQuery,notification,page } = args;
          let endpoint = "batches/"
          const queryParams = [];
          if (notification) {
            queryParams.push(`scheduled=${true}`);
          }
          if (searchQuery) {
            queryParams.push(`search=${searchQuery}`);
          }
          if (sortQuery) {
            queryParams.push(`sort=${sortQuery}`);
          }
          if(page){
               queryParams.push(`page=${page}`)
          }
          if (queryParams.length > 0) {
            endpoint += "?" + queryParams.join("&");
          }
          try {
               const response = await api.get(INS_BASE_URL + endpoint)
               return response.data
          } catch (error) {
               console.log("error",error);
               return rejectWithValue(error);
          }
     }
)

export const createBatches = createAsyncThunk(
     "createBatches",
     async (args,{rejectWithValue}) => {
          const {api,values,setOpen,toast,open} = args;
          try {
               const response = await api.post(
                 INS_BASE_URL + "batches/",
                 values
               );
               if (response.status === 201){
                   setOpen(!open)
                   toast.success("Batch Created Successfully")
                 } else {
                   setOpen(!open)
                 }
               return response.data
          } catch (error) {
               return rejectWithValue(error.response.data)
          }
     }
)