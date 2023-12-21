import { configureStore } from "@reduxjs/toolkit";
import InsStudentsListCreateSlice from "./Institute/InsStudents/InsStudentsListCreateSlice";
import InsStudentDetailSlice from "./Institute/InsStudents/InsStudentDetailSlice";
import  InsBatchesListCreateSlice  from "./Institute/InsBatches/InsBatchesListCreateSlice";
import InsBatchesDetailSlice from "./Institute/InsBatches/InsBatchesDetailSlice";
import InsProfileSlice from "./Institute/InsProfile/InsProfileSlice";
import InsTasksListCreateSlice from "./Institute/InsTasks/InsTasksListCreateSlice";
import InsTaskDetailSlice from "./Institute/InsTasks/InsTaskDetailSlice";
import InsStudTaskAssignmentDetailSlice from "./Institute/InsTaskAssignment/InsStudTaskAssignmentDetailSlice";
import InsStudTaskAssignmentListSlice from "./Institute/InsTaskAssignment/InsStudTaskAssignmentListSlice";
import StuProfileSlice from "./Student/StuProfile/StuProfileSlice";
import stuClassmatesListSlice  from "./Student/StuClassmates/ClassmatesSlice";


export const store = configureStore({
  reducer: {
    insStudentsListCreate: InsStudentsListCreateSlice,
    insStudentDetail: InsStudentDetailSlice,
    insBatchesListCreate: InsBatchesListCreateSlice,
    insBatchDetail: InsBatchesDetailSlice,
    insProfile: InsProfileSlice,
    insTasksListCreate: InsTasksListCreateSlice,
    insTasksDetail: InsTaskDetailSlice,
    insStudTaskAssignmentList: InsStudTaskAssignmentListSlice,
    insStudTaskAssignmentDetail: InsStudTaskAssignmentDetailSlice,
    stuProfile: StuProfileSlice,
    stuClassmates: stuClassmatesListSlice,
  },
});
