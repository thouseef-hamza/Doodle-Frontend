import { Card, CardContent, CardMedia, Grid, Typography, Button, Box } from '@mui/material'
import { useState } from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {useNavigate} from 'react-router-dom'
import useResponsive from '../../Hooks/useResponsive';

export const AuthInterfaceComponent = ({teacher_title, institute_title, institute_path, teacher_path,institute_image,teacher_image}) => {
     const [elevation, setElevation] = useState({
          Card1:0,
          Card2:0
     })
     const isMobile = useResponsive('sm')
     const navigate = useNavigate()

  return (
    <>
    <Button sx={{margin:'10px'}} onClick={()=>navigate("/")} size='large' color='secondary' ><ArrowBackOutlinedIcon fontSize='large' sx={{color:'#8338EC'}} /></Button>
    <Box style={{display:'flex',justifyContent:'center',alignItems:'center'}} paddingRight={3}>
    <Grid container xs={12} md={6} spacing={5} sx={{margin:isMobile ? '0 0 0 0' : '0 0 0 0 ' }}>
          <Grid item xs={6}>
               <Card  onMouseEnter={()=>setElevation(prevElevation=>({...prevElevation,Card1:5}))} onMouseLeave={()=>setElevation(prevElevation=>({...prevElevation,Card1:0}))} elevation={elevation.Card1}>
                    <CardMedia
                    sx={{height:isMobile? 150 : 300}}
                    image={teacher_image}
                    />
                    <CardContent>
                         <Typography padding={1} color={'#1F2D5A'} variant='h6'>{teacher_title}</Typography>
                    </CardContent>
               </Card>
          </Grid>
          <Grid item xs={6}>
               <Card onClick={()=>navigate(`${institute_path}`)} onMouseEnter={()=>setElevation(prevElevation=>({...prevElevation,Card2:5}))} onMouseLeave={()=>setElevation(prevElevation=>({...prevElevation,Card2:0}))} elevation={elevation.Card2}>
                    <CardMedia
                    sx={{height:isMobile? 150 : 300}}
                    image={institute_image}
                    />
                    <CardContent>
                         <Typography padding={1} color={'#1F2D5A'} variant='h6'>{institute_title}</Typography>
                    </CardContent>
               </Card>
          </Grid>
     </Grid>
     </Box>
    </>
  )
}

