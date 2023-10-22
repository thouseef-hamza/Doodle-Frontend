import { 
Typography,
AppBar,
Toolbar,
Button,
useMediaQuery,
useTheme,
Avatar,
} from '@mui/material';
import Colors from '../../assets/Colors/Colors';
import DrawerComp from './DrawerComp';
import { useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import AuthContext from '../../context/AuthContext';

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
              <Typography>
                <span style={{color:"#8338EC",fontSize:"35px",fontFamily:'Montserrat'}}>:D</span>
                <span style={{color:"#FFBE0B",fontSize:"35px",fontFamily:'Montserrat'}}>o</span>
                <span style={{color:"#FB5607",fontSize:"35px",fontFamily:'Montserrat'}}>o</span>
                <span style={{color:"#8338EC",fontSize:"35px",fontFamily:'Montserrat'}}>d</span>
                <span style={{color:"#FF006E",fontSize:"35px",fontFamily:'Montserrat'}}>l</span>
                <span style={{color:"#13C2C2",fontSize:"35px",fontFamily:'Montserrat'}}>e</span>
            </Typography>
            <DrawerComp/>
           </>
          ):(
            <>
            <Typography marginLeft={1}>
              <span style={{color:"#8338EC",fontSize:"35px",fontFamily:'Montserrat'}}>:D</span>
              <span style={{color:"#FFBE0B",fontSize:"35px",fontFamily:'Montserrat'}}>o</span>
              <span style={{color:"#FB5607",fontSize:"35px",fontFamily:'Montserrat'}}>o</span>
              <span style={{color:"#8338EC",fontSize:"35px",fontFamily:'Montserrat'}}>d</span>
              <span style={{color:"#FF006E",fontSize:"35px",fontFamily:'Montserrat'}}>l</span>
              <span style={{color:"#13C2C2",fontSize:"35px",fontFamily:'Montserrat'}}>e</span>
            </Typography>
              {/* <ButtonBase>
                <Button sx={{marginLeft:'auto'}} texttxo variant="text">Home</Button>
                <Button sx={{marginLeft:'auto'}} texttxo variant="text">Text</Button>
                <Button sx={{marginLeft:'auto'}} texttxo variant="text">Text</Button>
                <Button sx={{marginLeft:'auto'}} texttxo variant="text">Text</Button>
                <Button sx={{marginLeft:'auto'}} texttxo variant="text">Text</Button>
                </ButtonBase> */}
                {user ? (
                  <>
                  <Button  style={{color:Colors.primary_color,borderColor:Colors.primary_color,marginLeft:'auto',marginRight:"10px"}} onClick={logOutUser} variant="elevated">Logout</Button>
                  <Avatar
                    alt="Remy Sharp"
                    // src="/src/assets/images/Login.png"
                    sx={{ width: 50, height: 50}}
                  />
                  </>
                ):(
                  <>
                    <Button  style={{color:Colors.primary_color,borderColor:Colors.primary_color,marginLeft:'auto',marginRight:"10px"}} onClick={()=>navigate("/login")} variant="elevated">Login</Button>
                    <Button style={{backgroundColor:Colors.primary_color}} onClick={()=>navigate("/register")} variant="elevated">Create an Account</Button>
                  </>
                )}
          </>
          )
          }
        </Toolbar>
     </AppBar>
    </>
  )
}

export default HeaderComp