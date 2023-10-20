import { createContext,useState,useEffect } from 'react'
import axios from 'axios'

import { AUTH_BASE_URL } from '../utils/api/api';

const AuthContext = createContext()
import jwtDecode from 'jwt-decode'
export default AuthContext;

import { useNavigate } from 'react-router-dom'




export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
     const [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
     const navigate = useNavigate();
     let [loading,setLoading] = useState(false);

     let loginUser = async (e)=> {
          e.preventDefault()
          let  response =  await axios.post(AUTH_BASE_URL + "user/login/",{
               unique_code: e.target.unique_code.value,
               password: e.target.password.value
               }, {
               headers: {
                 'Content-Type': 'application/json',
               }
          });
          let data = await response.data 

          if (response.status === 200){
               setAuthTokens(data.jwt_token.access);
               setUser(jwtDecode(data.jwt_token.access));
               localStorage.setItem('authTokens',JSON.stringify(data.jwt_token));
               navigate("/")
          }else{
               alert("Something Went Wrong")
          }

     }     

     
     let logOutUser = () => {
          setAuthTokens(null);
          setUser(null);
          localStorage.removeItem('authTokens');
          navigate("/login")
     }

     let contextData = {
          user:user,
          authTokens:authTokens,
          loginUser:loginUser,
          logOutUser:logOutUser
     }

     


     let updateToken = async () =>{
          let  response =  await axios.post(AUTH_BASE_URL + "token/refresh/",{
               refresh:localStorage.getItem(authTokens?.refresh)
               }, {
               headers: {
                 'Content-Type': 'application/json',
               }
          });
          let data = await response.data 

          if (response.status == 200){
               setAuthTokens(data.jwt_token.access);
               setUser(jwtDecode(data.jwt_token.access));
               localStorage.setItem('authTokens',JSON.stringify(data.jwt_token));
          } else {
               logOutUser()
          }

          if (loading){
               setLoading(false)
          }
     }

     useEffect(()=>{
          if(loading){
               updateToken()
          }
          let fourMinutes = 1000*60*4
          let interval=setInterval(()=>{
               if(authTokens){
                    updateToken()
               }
          },fourMinutes)
          return ()=> clearInterval(interval)

     },[authTokens])


     return (
          <AuthContext.Provider value={contextData}>
               {loading ? null : children }
          </AuthContext.Provider>
     )
}