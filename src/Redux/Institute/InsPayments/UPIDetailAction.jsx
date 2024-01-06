import { createAsyncThunk } from "@reduxjs/toolkit";
import { INS_BASE_URL } from "../../../utils/api/api";

export const getUPIDetail = createAsyncThunk(
  "getUPIDetail",
  async (args, { rejectWithValue }) => {
    const { api, id } = args;
    try {
      const response = await api.get(
        INS_BASE_URL + `payments/detail/${id}/`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editUPIDetail = createAsyncThunk(
  "editUPIDetail",
  async (args, { rejectWithValue }) => {
    const { api, id, values, toast } = args;
    try {
      const response = await api.put(INS_BASE_URL + `payments/detail/${id}/`, values);
      if (response.status === 200) {
        toast.success("UPI Updated Successfully");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteUPIDetail = createAsyncThunk(
  "deleteUPIDetail",
  async (args, { rejectWithValue }) => {
    const { api, id, toast, navigate } = args;
    try {
      const response = await api.delete(
        INS_BASE_URL + `payments/detail/${id}/`
      );
      if (response.status === 204) {
        navigate("/institute/batches");
        toast.success("UPI Deleted Successfully");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
