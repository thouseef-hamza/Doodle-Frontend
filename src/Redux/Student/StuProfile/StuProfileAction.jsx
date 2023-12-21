import { createAsyncThunk } from "@reduxjs/toolkit";
import { STUDENT_BASE_URL } from "../../../utils/api/api";

export const getStuProfile = createAsyncThunk(
     "getStuProfile",
     async (args,{rejectwithValue}) => {
          const { api } = args;
          try {
               const response = await api.get(STUDENT_BASE_URL+"profile/")
               console.log(response);
               return response.data
          } catch (error) {
               rejectwithValue(error)
          }
     }
)

export const editStuProfile = createAsyncThunk(
     "editStuProfile",
     async (args,{rejectwithValue})=> {
          const { api,toast,values } = args;
          try {
               const response = await api.put(
                 STUDENT_BASE_URL + "profile/",
                 values
               );
               if (response.status === 200){
                    toast.success("Profile Updated Successfully")
               }
               return response.data
          } catch (error) {
               rejectwithValue(error)
          }
     }
)

