import { configureStore } from "@reduxjs/toolkit";
import InsStudentsListCreateSlice from "./Institute/InsStudents/InsStudentsListCreateSlice";
import InsStudentDetailSlice from "./Institute/InsStudents/InsStudentDetailSlice";
import  InsBatchesListCreateSlice  from "./Institute/InsBatches/InsBatchesListCreateSlice";

export const store = configureStore({
  reducer: {
    insStudentsListCreate: InsStudentsListCreateSlice,
    insStudentDetail: InsStudentDetailSlice,
    insBatchesListCreate: InsBatchesListCreateSlice,
  },
});
