import { Card, CardContent, CardMedia, Grid, Typography,useTheme,useMediaQuery, Button, Box } from '@mui/material'
import { useState } from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
const RegisterInterface = () => {
     const [elevation, setElevation] = useState({
          Card1:0,
          Card2:0,
     })
     const theme = useTheme();
     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
    <Button sx={{margin:'10px'}}  size='large'color='secondary' ><ArrowBackOutlinedIcon fontSize='large' sx={{borderBlockColor:"black"}} /></Button>
    <Box style={{display:'flex',justifyContent:'center',alignItems:'center'}} paddingRight={3}>
    <Grid container xs={12} md={6} spacing={5} sx={{margin:isMobile ? '0 0 0 0' : '0 0 0 0 ' }}>
          <Grid item xs={6}>
               <Card   onMouseEnter={()=>setElevation(prevElevation=>({...prevElevation,Card1:5}))} onMouseLeave={()=>setElevation(prevElevation=>({...prevElevation,Card1:0}))} elevation={elevation.Card1}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center',height:isMobile ?  150 : 300}}>
                         {/* <ApartmentOutlinedIcon sx={{backgroundColor:"black",color:"white",fontSize:'3.8rem',borderRadius:"90px"}}/> */}
                    </Box>
                    <CardContent>
                         <Typography padding={1} color={'#1F2D5A'} variant='h6'>Are You a teacher Looking For Job</Typography>
                    </CardContent>
               </Card>
          </Grid>
          <Grid item xs={6}>
               <Card onMouseEnter={()=>setElevation(prevElevation=>({...prevElevation,Card2:5}))} onMouseLeave={()=>setElevation(prevElevation=>({...prevElevation,Card2:0}))} elevation={elevation.Card2}>
                    <CardMedia
                    sx={{height:isMobile? 150 : 300}}
                    image='src/assets/images/2672292.jpg'
                    />
                    <CardContent>
                         <Typography padding={1} color={'#1F2D5A'} variant='h6'>Do You Need To Manage Your Student</Typography>
                    </CardContent>
               </Card>
          </Grid>
     </Grid>
     </Box>
    </>
  )
}

export default RegisterInterface