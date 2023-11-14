import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


import { AUTH_BASE_URL } from "../utils/api/api";

const AuthContext = createContext();
import jwtDecode from "jwt-decode";
export default AuthContext;

import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const navigate = useNavigate();
  let [loading, setLoading] = useState(false);
  

  let loginUser = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        AUTH_BASE_URL + "user/login/",
        {
          unique_code: e.target.unique_code.value,
          password: e.target.password.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.data;
      console.log(data,"login Data");
      if (response.status === 200) {
        setAuthTokens(data.jwt_token);
        setUser(jwtDecode(data.jwt_token.access));
        localStorage.setItem("authTokens", JSON.stringify(data.jwt_token));
        navigate("/institute/dashboard");
      } else {
        alert("Something Went Wrong");
      }
    } catch (error) {
      toast.error(error.response.data.detail)
    }
  };

  let logOutUser = () => {
    const confirm = window.confirm("Are You Sure Want to Logout ?")
    if (confirm){
      setAuthTokens(null);
      setUser(null);
      localStorage.clear();
      navigate("/");
    } else {
      null
    }
  };

  useEffect(()=>{
    if(authTokens){
      setUser(jwtDecode(authTokens.access))
    }
    setLoading(false)
  },[authTokens,loading])



  let contextData = {
    user: user,
    authTokens: authTokens,
    setAuthTokens:setAuthTokens,
    setUser:setUser,
    loginUser: loginUser,
    logOutUser: logOutUser,
  };
return (
  <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
