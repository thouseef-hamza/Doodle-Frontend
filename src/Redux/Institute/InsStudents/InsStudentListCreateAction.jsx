import { createAsyncThunk } from "@reduxjs/toolkit";
import { INS_BASE_URL } from "../../../utils/api/api";

// student create action
export const createStudent = createAsyncThunk(
  "createStudent",
  async (args, { rejectWithValue }) => {
    const { values, api, setOpen, toast } = args;
    try {
      const response = await api.post(INS_BASE_URL + "students/", values);
      const result = response.data;
      console.log(response.data);
      setOpen(false);
      toast.success("Student Created Successfully");
      return result;
    } catch (error) {
     console.log(error);
      setOpen(false);
      return rejectWithValue(error);
    }
  }
);

// students List Action
export const listStudents = createAsyncThunk(
  "showStudents",
  async (args, { rejectWithValue }) => {
    const { api } = args;
    try {
      const response = await api.get(INS_BASE_URL + "students/");
      const result = await response.data;
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
