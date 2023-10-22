import { Route,Routes } from "react-router-dom"
import HomePage from "./Pages/Home/HomePage"
import InstituteRegister from "./Pages/Authentication/InstituteRegister"
import RegisterInterface from "./Pages/Authentication/RegisterInterface"
import LoginInterface from "./Pages/Authentication/LoginInterface"
import InstituteLogin from "./Pages/Authentication/InstituteLogin"
import OTPAuthentication from "./Pages/Authentication/OTPAuthentication"
import InsHomePage from "./Pages/Institute/InsHomePage"
import PrivateRoutes from "./routers/PrivateRoutes"

function App() {

  return (
    <Routes>
      <Route element={<HomePage />} path="/" exact />
      <Route element={<RegisterInterface />} path="/register" />
      <Route element={<InstituteRegister />} path="/institute/register" />
      <Route element={<InstituteLogin />} path="/institute/login" />
      <Route element={<LoginInterface />} path="/login" />
      <Route
        element={
          <PrivateRoutes>
            <OTPAuthentication />
          </PrivateRoutes>
        }
        path="/verifyotp/:user_id/:phone_number"
      />
      <Route element={<InsHomePage />} path="institute/home/" />
    </Routes>
  );
}

export default App
