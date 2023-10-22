import { Alert, Button, ButtonBase, Dialog, DialogActions, DialogTitle, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import useResponsive from '../../Hooks/useResponsive'
import LogoComponent from '../../Components/Authentication/LogoComponent'
import BoxWrapper from '../../Components/Authentication/BoxWrapper'
import {useNavigate,useParams} from 'react-router-dom'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useState } from 'react'
import axios from 'axios'
import { AUTH_BASE_URL } from '../../utils/api/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OTPAuthentication = () => {
     const isMobile=useResponsive('sm')
     const navigate = useNavigate()
     const [otp, setOtp] = useState('')
     const { phone_number,user_id } = useParams()
     const [open,setOpen] = useState(false)
     const theme = useTheme();
     const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

     

    //  OTP State manage
      const handleChange = (newValue) => {
        setOtp(newValue)
      }    

      // after Successfull completion for to redirect login
      const handleClose = () => {
        setOpen(false);
      };

      // For Regenerating OTP
      const RegenerateOtp = async (e) => {
        e.preventDefault()
        try {
          let response = await axios.patch(AUTH_BASE_URL + `user/verify-otp/${user_id}/`,{
            phone_number:phone_number
          },{
            headers:{
              'Content-Type':'application/json'
            }
          })
          console.log(response);
          if (response.status === 200) {
            toast.success('OTP Regenerated Successfully', {
              position: toast.POSITION.TOP_RIGHT, 
              autoClose: 4000,
            });
          }else {
            toast.error('Something went wrong', {
              position: toast.POSITION.TOP_RIGHT, 
              autoClose: 4000,
            });
          }
        } catch (error) {
          console.log(error);
        }  
      }

      // For Submitting OTP to Django
      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          let response = await axios.post(AUTH_BASE_URL + `user/verify-otp/${user_id}/`,{
            otp:otp,
            phone_number:phone_number
          },{
            headers:{
              'Content-Type':'application/json'
            }
          })
          console.log(response);
          if (response.status === 200) {
            setOpen(true)
          }else {
            alert("Something went wrong");
          }
        } catch (error) {
          console.log(error);
          if (error.response.status === 401){
            toast.error(error.response.data.detail, {
              position: toast.POSITION.TOP_RIGHT, 
              autoClose: 4000,
            });
          } else {
            toast.error("Something Went Wrong", {
              position: toast.POSITION.TOP_RIGHT, 
              autoClose: 4000,
            });
          }
        }
      }

  return (
    <>
     <Button disabled sx={{margin:'10px'}} onClick={()=> navigate("/institute/register")}  size='large'color='secondary' ><ArrowBackOutlinedIcon fontSize='large' sx={{color:'#8338EC'}} /></Button>
     {open ? (
      <>
      <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      >
       <DialogTitle id="responsive-dialog-title">
          <Alert severity="success">🎉 Congratulations !! Your Account created successfully.<br/> we sent your login credentials via email </Alert>
        </DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          <Button  onClick={()=> navigate("/institute/login ")} autoFocus>
            Go to Login
          </Button>
        </DialogActions>
      </Dialog>
      </>
     ):(
      <form>
          <BoxWrapper>
          <ToastContainer />
            <LogoComponent/>
            <Typography gutterBottom sx={{fontSize:isMobile? "15px":"20px"}}>Verify Your OTP Here!</Typography>
            <TextField  
            id="outlined-basic" 
            label="Phone Number" 
            disabled
            value={phone_number}
            variant="outlined" 
            sx={{width:isMobile?"70vw" :"30vw"}}  
            margin='normal'
            error={false}
            />
               <MuiOtpInput length={6} value={otp} sx={{width:isMobile?"70vw" :"30vw"}}   onChange={handleChange} />
               <ButtonBase sx={{gap:2,margin:4}} >
                    <Button sx={{backgroundColor:"#8338EC", ":hover":{backgroundColor:"#8338EC"}}}  onClick={RegenerateOtp} variant='contained'>Regenerate</Button>
                    <Button sx={{backgroundColor:"#8338EC", ":hover":{backgroundColor:"#8338EC"}}} onClick={handleSubmit} variant='contained'>Submit</Button>
               </ButtonBase>
            </BoxWrapper>
     </form>
     )}
     
     
     
    </>
  )
}

export default OTPAuthentication