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
import StudTaskDetailSlice from "./Student/StuTaskAssignment/StudTaskDetailSlice";
import StudTaskListSlice from "./Student/StuTaskAssignment/StudTaskListSlice";
import UPIListSlice from "./Institute/InsPayments/UPIListSlice";
import UPIDetailSlice from "./Institute/InsPayments/UPIDetailSlice";
import PaymentListSlice from "./Institute/InsPayments/PaymentListSlice";
import PaymentDetailSlice from "./Institute/InsPayments/PaymentDetailSlice";


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
    insStudPayments:PaymentListSlice,
    insStudPaymentsDetail:PaymentDetailSlice,
    insUPI:UPIListSlice,
    insUPIDetail:UPIDetailSlice,
    stuProfile: StuProfileSlice,
    stuClassmates: stuClassmatesListSlice,
    stuTasksList: StudTaskListSlice,
    stuTasksDetail: StudTaskDetailSlice,
  },
});
