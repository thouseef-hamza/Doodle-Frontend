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
import InsBatches from "./Pages/Institute/InsBatches";
import InsStudents from "./Pages/Institute/InsStudents";
import InsInbox from "./Pages/Institute/InsInbox";
import InsProfile from "./Pages/Institute/InsProfile";
import InsAccount from "./Pages/Institute/InsAccount";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" exact />
      <Route element={<RegisterInterface />} path="/register" />
      <Route element={<InstituteRegister />} path="/institute/register" />
      <Route element={<InstituteLogin />} path="/institute/login" />
      <Route element={<LoginInterface />} path="/login" />
      <Route
        element={<OTPAuthentication />}
        path="/verifyotp/:user_id/:phone_number"
      />
      <Route element={<InsHomePage />} path="/institute/home" />
      <Route element={<InsDashboard />} path="/institute/dashboard" />
      <Route element={<InsBatches />} path="/institute/batches" />
      <Route element={<InsStudents />} path="/institute/students" />
      <Route element={<InsInbox />} path="/institute/inbox" />
      <Route element={<InsProfile />} path="/institute/profile" />
      <Route element={<InsAccount />} path="/institute/account" />
    </Routes>
  );
}

export default App;
