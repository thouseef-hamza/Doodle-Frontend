import { createSlice } from "@reduxjs/toolkit";
import { createStudent, listStudents } from "./InsStudentListCreateAction";

export const InsStudentsListCreateSlice = createSlice({
  name: "InsStudentsListCreateSlice",
  initialState: {
    students: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
        state.error=null;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students.students.push(action.payload);
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(listStudents.pending, (state) => {
        state.loading = true;
        state.error=null;
      })
      .addCase(listStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(listStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default InsStudentsListCreateSlice.reducer;
