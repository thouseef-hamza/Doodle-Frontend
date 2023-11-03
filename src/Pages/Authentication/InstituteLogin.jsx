import { Button, TextField, Typography } from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {useNavigate} from 'react-router-dom'
import useResponsive from '../../Hooks/useResponsive';
import BoxWrapper from '../../Components/Authentication/BoxWrapper';
import LogoComponent from '../../Components/Authentication/LogoComponent';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { ToastContainer } from "react-toastify";


const InstituteLogin = () => {
     const isMobile = useResponsive('sm')
     const navigate = useNavigate()
     let { loginUser } = useContext(AuthContext)
     
  return (
    <>
     <Button sx={{margin:'10px'}} onClick={()=> navigate('/login')}  size='large' color='secondary' ><ArrowBackOutlinedIcon fontSize='large' sx={{color:'#8338EC'}} /></Button>
     <ToastContainer />
     <form onSubmit={loginUser}>
          <BoxWrapper>
            <LogoComponent/>
            <Typography gutterBottom sx={{fontSize:isMobile? "15px":"20px"}}>Hey Happy to see you here !</Typography>
               <TextField  
               id="outlined-basic" 
               label='Your Code' 
               variant="outlined" 
               name='unique_code'
               sx={{width:isMobile?"70vw" :"40vw"}}  
               margin='normal'
               />
               <TextField  
               id="outlined-basic" 
               label="Password" 
               variant="outlined"
               name='password' 
               sx={{width:isMobile?"70vw":"40vw"}}
               margin='normal'
               />
               <Button type='submit' sx={{backgroundColor:"#8338EC",":hover":{backgroundColor:"#8338EC"}}} margin={'10px 0px 0px 0px'} variant='contained'>Login</Button>
          </BoxWrapper>
     </form>
    </>
  )
}

export default InstituteLogin