import { Routes, Route,Navigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const PrivateRoutes = ({children, path, ...rest}) => {
     console.log("Private Route Works");
     const token = localStorage.getItem("access_token");

     if (token) {
      const userToken = jwt_decode(token)
      const is_active = userToken?.is_active;
      const is_blocked = userToken?.is_blocked

      if (is_active && !is_blocked){
        return <>{children}</> 
      }
      return <Navigate to="/" />
     }
}
   

export default PrivateRoutes