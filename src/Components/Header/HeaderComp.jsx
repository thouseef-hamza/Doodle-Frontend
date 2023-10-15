import { 
Typography,
AppBar,
Toolbar,
Button,
useMediaQuery,
useTheme,
} from '@mui/material';
import './HeaderComp.css'
import Colors from '../../assets/Colors/Colors';
import DrawerComp from './DrawerComp';
import { useEffect, useState } from 'react';

const HeaderComp = () => {
  // const [first, setfirst] = useState(second) 
  const theme=useTheme()
  const isMatch=useMediaQuery(theme.breakpoints.down('sm'))
  const [elevation, setElevation] = useState(0);

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
              <Typography style={{userSelect:'none'}}>
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
            <Typography>
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
              {/* <ButtonGroup  style={{gap:15}} sx={{marginLeft:'auto'}}  aria-label="outlined button group"> */}
                <Button  style={{color:Colors.primary_color,borderColor:Colors.primary_color,marginLeft:'auto',marginRight:"10px"}} variant="elevated">Login</Button>
                <Button style={{backgroundColor:Colors.primary_color}} variant="elevated">Create an Account</Button>
              {/* </ButtonGroup> */}
          </>
          )
          }
        </Toolbar>
     </AppBar>
    </>
  )
}

export default HeaderComp