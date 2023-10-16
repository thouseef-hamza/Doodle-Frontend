import { Grid,Card, CardMedia, CardContent, Typography, useMediaQuery,useTheme} from '@mui/material'
import { useState } from 'react'

const ThirdPage = () => {
     const [elevation, setElevation] = useState({
          Card1:0,
          Card2:0,
          Card3:0,
          Card4:0
     })
     const theme = useTheme();
     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
     console.log(isMobile);
  return (
    <>
    <Typography gutterBottom align='center' color={'#1F2D5A'} sx={{fontSize:isMobile ? "2rem" : "3.8rem"}}marginTop={5} >
          Our Features
     </Typography>
     <Grid container marginTop={5} marginBottom={15} paddingLeft={5} paddingRight={5}>
     <Grid container xs={12} md={6} spacing={2} sx={{margin:isMobile ? '0 0 0 0' : '0 0 0 0 ' }} >
          <Grid item xs={6}>
               <Card onMouseEnter={()=>setElevation(prevElevation=>({...prevElevation,Card1:5}))} onMouseLeave={()=>setElevation(prevElevation=>({...prevElevation,Card1:0}))} elevation={elevation.Card1}>
                    <CardMedia
                    sx={{height:isMobile? 150 : 300}}
                    image='src/assets/images/2672292.jpg'
                    />
                    <CardContent>
                         <Typography variant='h6'>You can find jobs and hire teachers easily </Typography>
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
                         <Typography variant='h6'>You can find jobs and hire teachers easily </Typography>
                    </CardContent>
               </Card>
          </Grid>
     </Grid>
     <Grid container xs={12} md={6} spacing={2} sx={{margin:isMobile ? '0 0 0 0' : '0 0 0 0 ' }}>
          <Grid item xs={6}>
               <Card onMouseEnter={()=>setElevation(prevElevation=>({...prevElevation,Card3:5}))} onMouseLeave={()=>setElevation(prevElevation=>({...prevElevation,Card3:0}))} elevation={elevation.Card3}>
                    <CardMedia
                    sx={{height:isMobile?150:300}}
                    image='src/assets/images/2672292.jpg'
                    />
                    <CardContent>
                         <Typography variant='h6'>You can find jobs and hire teachers easily </Typography>
                    </CardContent>
               </Card>
          </Grid>
          <Grid item xs={6}>
               <Card onMouseEnter={()=>setElevation(prevElevation=>({...prevElevation,Card4:5}))} onMouseLeave={()=>setElevation(prevElevation=>({...prevElevation,Card4:0}))} elevation={elevation.Card4}>
                    <CardMedia
                    sx={{height:isMobile?150:300}}
                    image='src/assets/images/2672292.jpg'
                    />
                    <CardContent>
                         <Typography variant='h6'>You can find jobs and hire teachers easily </Typography>
                    </CardContent>
               </Card>
          </Grid>
     </Grid>     
     </Grid>
    </>
  ) 
}  

export default ThirdPage