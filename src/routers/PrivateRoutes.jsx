import { Navigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const PrivateRoutes = ({children, ...rest}) => {
     console.log("Private Route Works");
     const token = JSON.parse(localStorage.getItem("authTokens"));
     console.log(token);

      if (token) {
        const userToken = jwt_decode(token?.access)
        const is_active = userToken?.is_active;
        const is_blocked = userToken?.is_blocked

      if (is_active && !is_blocked){
        return <>{children}</> 
      }
      return <Navigate to="/login" />
     }
     return <Navigate to="/login" />;
}
   

export default PrivateRoutes