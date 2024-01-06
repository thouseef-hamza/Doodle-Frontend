import { createAsyncThunk } from "@reduxjs/toolkit";
import { INS_BASE_URL } from "../../../utils/api/api";

export const listPayments = createAsyncThunk(
  "listPayments",
  async (args, { rejectWithValue }) => {
    const { api, searchQuery, sortQuery, page } = args;
    console.log(api);
    let endpoint = "students/payments/";
    const queryParams = [];
    if (searchQuery) {
      queryParams.push(`search=${searchQuery}`);
    }
    if (sortQuery) {
      queryParams.push(`sort=${sortQuery}`);
    }
    if (page) {
      queryParams.push(`page=${page}`);
    }
    if (queryParams.length > 0) {
      endpoint += "?" + queryParams.join("&");
    }
    try {
      const response = await api.get(INS_BASE_URL + endpoint);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error);
    }
  }
);

export const createPayments = createAsyncThunk(
  "createPayments",
  async (args, { rejectWithValue }) => {
    const { api, values, setOpen, toast, open } = args;
    try {
      const response = await api.post(
        INS_BASE_URL + "students/payments/",
        values
      );
      if (response.status === 201) {
        setOpen(!open);
        toast.success("Batch Created Successfully");
      } else {
        setOpen(!open);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);