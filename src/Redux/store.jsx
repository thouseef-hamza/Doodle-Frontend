import { configureStore } from "@reduxjs/toolkit";
import InsStudentsListCreateSlice from "./Institute/InsStudents/InsStudentsListCreateSlice";
import InsStudentDetailSlice from "./Institute/InsStudents/InsStudentDetailSlice";
import  InsBatchesListCreateSlice  from "./Institute/InsBatches/InsBatchesListCreateSlice";
import InsBatchesDetailSlice from "./Institute/InsBatches/InsBatchesDetailSlice";
import InsProfileSlice from "./Institute/InsProfile/InsProfileSlice";

export const store = configureStore({
  reducer: {
    insStudentsListCreate: InsStudentsListCreateSlice,
    insStudentDetail: InsStudentDetailSlice,
    insBatchesListCreate: InsBatchesListCreateSlice,
    insBatchDetail:InsBatchesDetailSlice,
    insProfile:InsProfileSlice,
  },
});
