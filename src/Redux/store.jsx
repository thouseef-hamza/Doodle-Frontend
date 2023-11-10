import { configureStore } from "@reduxjs/toolkit";
import InsStudentsListCreateSlice from "./Institute/InsStudents/InsStudentsListCreateSlice";
import InsStudentDetailSlice from "./Institute/InsStudents/InsStudentDetailSlice";

export const store = configureStore({
  reducer: {
    insStudentsListCreate: InsStudentsListCreateSlice,
    insStudentDetail: InsStudentDetailSlice,
  },
});
