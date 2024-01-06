import { createAsyncThunk } from "@reduxjs/toolkit";
import { INS_BASE_URL } from "../../../utils/api/api";

export const listUPI = createAsyncThunk(
  "listUPI",
  async (args, { rejectWithValue }) => {
    const { api } = args;
    try {
      const response = await api.get(INS_BASE_URL + "payments/detail/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createUPI = createAsyncThunk(
  "createUPI",
  async (args, { rejectWithValue }) => {
    const { api,toast,values } = args;
    try {
      const response = await api.post(INS_BASE_URL + "payments/detail/",values);
      if (response.status === 201) {
        toast.success("UPI Created Successfully");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
