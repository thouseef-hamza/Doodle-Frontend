import { createAsyncThunk } from "@reduxjs/toolkit";
import { STUDENT_BASE_URL } from "../../../utils/api/api";

export const listClassmates = createAsyncThunk(
  "listClassmates",
  async (args, { rejectWithValue }) => {
    const { api, searchQuery, page } = args;
    let endpoint="classmates/";
    const queryParams = [];
    if (searchQuery) {
      queryParams.push(`search=${searchQuery}`);
    }
    if (page) {
      queryParams.push(`page=${page}`);
    }
    if (queryParams.length > 0) {
      endpoint += "?" + queryParams.join("&");
    }
    try {
      const response = await api.get(STUDENT_BASE_URL + endpoint);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
