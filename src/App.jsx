import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import InstituteRegister from "./Pages/Authentication/InstituteRegister";
import RegisterInterface from "./Pages/Authentication/RegisterInterface";
import LoginInterface from "./Pages/Authentication/LoginInterface";
import InstituteLogin from "./Pages/Authentication/InstituteLogin";
import OTPAuthentication from "./Pages/Authentication/OTPAuthentication";
import InsHomePage from "./Pages/Institute/InsHomePage";
// import PrivateRoutes from "./routers/PrivateRoutes";
import InsDashboard from "./Pages/Institute/InsDashboard";
import InsInbox from "./Pages/Institute/InsInbox";
import InsProfile from "./Pages/Institute/InsProfile";
import InsAccount from "./Pages/Institute/InsAccount";
import InsStudentsListCreate from "./Pages/Institute/InsStudentsListCreate";
import InsBatchesListCreate from "./Pages/Institute/InsBatchesListCreate";
import InsBatchesDetail from "./Pages/Institute/InsBatchesDetail";
import InsStudentDetailView from "./Pages/Institute/InsStudentDetailView";
import PrivateRoutes from "./routers/PrivateRoutes";
import InsTaskManagement from "./Pages/Institute/TaskManagement/InsTaskManagement";
import InsTaskDetailView from "./Pages/Institute/TaskManagement/InsTaskDetailView";
import InsClassroomManagement from "./Pages/Institute/ClassroomManagement/InsClassroomManagement";
import InsClassroomDetailView from "./Pages/Institute/ClassroomManagement/InsClassroomDetailView";
import InsChatroom from "./Pages/Institute/ChatManagement/InsChatroom";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" exact />

      {/* Register Interface View Only */}
      <Route element={<RegisterInterface />} path="/register" />
      <Route element={<LoginInterface />} path="/login" />

      {/* Institute Register and Ins,Student Login */}
      <Route element={<InstituteRegister />} path="/institute/register" />
      <Route element={<InstituteLogin />} path="/institute/login" />

      {/* OTP Authentication */}
      <Route
        element={<OTPAuthentication />}
        path="/verifyotp/:user_id/:phone_number"
      />

      {/* Institute Actions */}
      <Route element={<InsHomePage />} path="/institute/home" />
      <Route
        element={
          <PrivateRoutes>
            <InsDashboard />
          </PrivateRoutes>
        }
        path="/institute/dashboard"
      />

      <Route element={<InsInbox />} path="/institute/inbox" />
      <Route element={<InsProfile />} path="/institute/profile" />

      {/* InsBatches Actions */}
      <Route element={<InsBatchesListCreate />} path="/institute/batches" />
      <Route element={<InsBatchesDetail />} path="/institute/batch/:id" />

      {/* InsStudent Actions */}
      <Route element={<InsStudentsListCreate />} path="/institute/students" />
      <Route element={<InsStudentDetailView />} path="/institute/student/:id" />

      {/* InsAccount Actions */}
      <Route element={<InsAccount />} path="/institute/account" />
      <Route element={<InsTaskManagement/>} path="/institute/task"/>
      <Route element={<InsTaskDetailView/>} path="/institute/task/detail"/>
      <Route element={<InsClassroomManagement/>} path="/institute/classroom"/>
      <Route element={<InsClassroomDetailView/>} path="/institute/classroom/detail"/>
      <Route element={<InsChatroom/>} path="/institute/chatroom" />
    </Routes>
  );
}

export default App;
