import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


const InstituteRegister = () => {
     const theme = useTheme();
     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
     
  return (
    <>
     <Button sx={{margin:'10px'}}  size='large'color='secondary' ><ArrowBackOutlinedIcon fontSize='large' sx={{borderBlockColor:"black"}} /></Button>
     <form>
          <Box 
          display={'flex'} 
          flexDirection={'column'} 
          justifyContent={'center'} 
          width={'60vw'}
          height={'80vh'}
          alignItems={'center'}
          margin={'auto'}
          padding={0}
          >
            <Typography sx={{fontSize:isMobile ?  "50px" : "55px"}} margin={0}>
              <span style={{color:"#8338EC",fontFamily:'Montserrat'}}>:D</span>
              <span style={{color:"#FFBE0B",fontFamily:'Montserrat'}}>o</span>
              <span style={{color:"#FB5607",fontFamily:'Montserrat'}}>o</span>
              <span style={{color:"#8338EC",fontFamily:'Montserrat'}}>d</span>
              <span style={{color:"#FF006E",fontFamily:'Montserrat'}}>l</span>
              <span style={{color:"#13C2C2",fontFamily:'Montserrat'}}>e</span>
            </Typography>
            <Typography gutterBottom sx={{fontSize:isMobile? "15px":"20px"}}>Create Your Free Account</Typography>
               <TextField  
               id="outlined-basic" 
               label='Institute name' 
               variant="outlined" 
               sx={{width:isMobile?"70vw" :"40vw"}}  
               margin='normal'
               focused
               />
               <TextField  
               id="outlined-basic" 
               label="Institute Email" 
               variant="outlined" 
               sx={{width:isMobile?"70vw":"40vw"}}
               margin='normal'
               helperText="Avoid Personal email"/>
               <TextField  
               id="outlined-basic" 
               label="Institute PhoneNumber" 
               variant="outlined"
               margin='normal'
               sx={{width:isMobile ? "70vw" : "40vw"}}
               fullWidth
               helperText="Avoid personal phoneNumber"
               />
               <Button color='secondary' margin={'10px 0px 0px 0px'} variant='contained'>Create Account</Button>
               <Typography margin={'normal'} paddingRight={5} marginTop={2} fontSize={"0.6rem"}>By clicking the &quot;Create Account&quot; button, you agree to our <span style={{color:"blue",textDecoration:"underline",cursor:"pointer"}}>Terms of Use</span> and <span style={{color:"blue",textDecoration:"underline",cursor:"pointer"}}>Privacy and Policy</span></Typography>
          </Box>
     </form>
    </>
  )
}

export default InstituteRegister