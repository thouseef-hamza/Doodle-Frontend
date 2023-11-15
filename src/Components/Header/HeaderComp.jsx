import { 
Typography,
AppBar,
Toolbar,
Button,
useMediaQuery,
useTheme,
Avatar,
} from '@mui/material';
import DrawerComp from './DrawerComp';
import { useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import AuthContext from '../../context/AuthContext';
import HomeLogoComponent from '../HomeLogoComponent';

const HeaderComp = () => {
  const theme=useTheme()
  const isMatch=useMediaQuery(theme.breakpoints.down('sm'))
  const [elevation, setElevation] = useState(0);
  const navigate = useNavigate()

  let {user,logOutUser} = useContext(AuthContext)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) { 
        setElevation(5);
      } else {
        setElevation(0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
     <AppBar position='sticky' style={{background:"white"}} elevation={elevation} >
        <Toolbar>
          {isMatch ? (
            <>
            <HomeLogoComponent/>
            <DrawerComp/>
           </>
          ):(
            <>
            <HomeLogoComponent/>
            <Button  style={{color:theme.palette.primary.main,marginLeft:'auto',marginRight:"10px"}} onClick={()=>navigate("/login")} variant="elevated">Login</Button>
            <Button style={{backgroundColor:theme.palette.primary.main}} onClick={()=>navigate("/register")} variant="elevated">Create an Account</Button>
          </>
          )
          }
        </Toolbar>
     </AppBar>
    </>
  )
}

export default HeaderComp