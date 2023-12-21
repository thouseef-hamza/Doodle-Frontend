import { Navigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const InstituteRoutes = ({children, ...rest}) => {
     const token = JSON.parse(localStorage.getItem("authTokens"));

      if (token) {
        const userToken = jwt_decode(token?.access)
        console.log(userToken);
        const is_active = userToken?.is_active;
        const is_blocked = userToken?.is_blocked;
        const is_institute = userToken?.is_institute;

      if (is_active && !is_blocked && is_institute){
        return <>{children}</> 
      }
      return <Navigate to="/login" />
     }
     return <Navigate to="/" />;

}
   

export default InstituteRoutes;