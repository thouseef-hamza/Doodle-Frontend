import { createAsyncThunk } from "@reduxjs/toolkit";
import { INS_BASE_URL } from "../../../utils/api/api";

export const getInsProfile = createAsyncThunk(
     "getInsProfile",
     async (args,{rejectwithValue}) => {
          const { api } = args;
          try {
               const response = await api.get(INS_BASE_URL+"profile/")
               return response.data
          } catch (error) {
               rejectwithValue(error)
          }
     }
)

export const editInsProfile = createAsyncThunk(
     "editInsProfile",
     async (args,{rejectwithValue})=> {
          const { api,toast,values } = args;
          try {
               const response = await api.put(
                 INS_BASE_URL + "profile/",
                 values
               );
               if (response.status === 200){
                    toast.success("Student Updated Successfully")
               }
               return response.data
          } catch (error) {
               rejectwithValue(error)
          }
     }
)

export const deleteInsProfile = createAsyncThunk(
     "deleteInsProfile",
     async (args,{rejectwithValue})=> {
          const { api } = args;
          try {
               const response = await api.delete(INS_BASE_URL+"profile/")
               return response.data
          } catch (error) {
               rejectwithValue(error)
          }
     }
)