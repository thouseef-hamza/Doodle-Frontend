import {  Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {useNavigate} from 'react-router-dom'
import useResponsive from '../../Hooks/useResponsive';
import LogoComponent from '../../Components/Authentication/LogoComponent';
import BoxWrapper from '../../Components/Authentication/BoxWrapper';
import { useFormik } from 'formik'
import { basicSchema } from '../../schemas/AuthSchema';
import axios from 'axios';
import { AUTH_BASE_URL } from '../../utils/api/api';
import { useState } from 'react';



const InstituteRegister = () => {
  const isMobile = useResponsive('sm')
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const fullScreen = useResponsive('sm')
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { values, errors, handleBlur, handleChange } = useFormik({
    initialValues:{ 
      institute_name:"",
      email:"",
      phone_number:"" 
    },
    validationSchema:basicSchema,
  });

    const handleSubmit = async (e) => {
      console.log("thosui")
      console.log(values);
      e.preventDefault()
      let response = await axios.post(AUTH_BASE_URL + "institute/register/",{
        institute_name:values.institute_name,
        email:values.email,
        phone_number:values.phone_number
      },{
        headers:{
          'Content-Type':'application/json'
        }
      })
      let data = response.data.data
      if (response.status === 201) {
          navigate(`/verifyotp/${data.id}/${values.phone_number}`)
      }else {
        alert("Something went wrong");
      }
    }
  return (
    <>
     <Button sx={{margin:'10px'}} onClick={()=> navigate("/register")}  size='large'color='secondary' ><ArrowBackOutlinedIcon fontSize='large' sx={{color:'#8338EC'}} /></Button>
     <form onSubmit={handleSubmit} >
          <BoxWrapper>
            <LogoComponent/>
            <Typography gutterBottom sx={{fontSize:isMobile? "15px":"20px"}}>Create Your Free Account</Typography>
               <TextField  
               autoFocus
               error={errors.institute_name? true : false}
               helperText={errors.institute_name}
               id="outlined-basic" 
               label='Institute name' 
               type='text'
               variant="outlined" 
               value={values.institute_name}
               onChange={handleChange}
               onBlur={handleBlur}
               name='institute_name'
               sx={{width:isMobile?"70vw" :"40vw"}}  
               margin='normal'
               />
               <TextField  
               id="outlined-basic" 
               error={errors.email? true : false}
               label="Institute Email" 
               variant="outlined" 
               value={values.email}
               onChange={handleChange}
               onBlur={handleBlur}
               sx={{width:isMobile?"70vw":"40vw"}}
               margin='normal'
               type='email'
               name='email'
               helperText={errors.email ? errors.email :"Avoid personal email"}/>
               <TextField  
               id="outlined-basic" 
               label="Institute PhoneNumber" 
               variant="outlined"
               error={errors.phone_number? true : false}
               helperText={errors.phone_number ? errors.phone_number :"Avoid personal phone number"}
               type='text'
               value={values.phone_number}
               onChange={handleChange}
               onBlur={handleBlur}
               margin='normal'
               name='phone_number'
               sx={{width:isMobile ? "70vw" : "40vw"}}
               fullWidth
               />
               <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                >
                 <DialogTitle id="responsive-dialog-title">
                    {"Are You Sure?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                    <Alert sx={{marginBottom:4}} severity="info">If you didn&apos;t correct your phone number and your email you wont recieve your Login Credentials</Alert>
                      Phone Number : {values.phone_number} <br/>
                      Email  : {values.email}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                      Edit
                    </Button>
                    <Button onClick={handleSubmit} type='submit' autoFocus>
                      Create
                    </Button>
                  </DialogActions>
                </Dialog>
               <Button onClick={handleClickOpen} sx={{backgroundColor:"#8338EC",":hover":{backgroundColor:"#8338EC"}}} margin={'10px 0px 0px 0px'} variant='contained' disabled={errors.institute_name || errors.email || errors.phone_number ? true : false}>Create Account</Button>
               <Typography margin={'normal'} paddingRight={5} marginTop={2} fontSize={"0.6rem"}>By clicking the &quot;Create Account&quot; button, you agree to our <span style={{color:"blue",textDecoration:"underline",cursor:"pointer"}}>Terms of Use</span> and <span style={{color:"blue",textDecoration:"underline",cursor:"pointer"}}>Privacy and Policy</span></Typography>
            </BoxWrapper>
     </form>
    </>
  )
}

export default InstituteRegister