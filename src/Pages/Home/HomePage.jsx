import { useState } from 'react';
import HeaderComp from '../../Components/Header/HeaderComp'
import { Grid, Typography,CardMedia, useMediaQuery,useTheme, CardContent, Card, Box, Link, Container } from '@mui/material'
import { Facebook, Instagram, Twitter } from '@mui/icons-material';


const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [elevation, setElevation] = useState({
    Card1:0,
    Card2:0,
    Card3:0,
    Card4:0
  })
  
  return (
    <>
     <HeaderComp />
     <br/>
     <Grid container spacing={2}>
          <Grid  item sm={12} md={6}>
            <Typography color={'#1F2D5A'}  lineHeight={isMobile ? 1.3 : 1.4} style={{fontSize:isMobile ? '2rem' : '3.8rem',margin:isMobile ? '0px 10px 10px 20px': '0px 0px 0px 35px'}} gutterBottom>
              Lets Educate and Empower, make the next Generation with teaching
            </Typography>
            <Typography color={'#1F2D5A'} style={{fontSize:isMobile ? '.7rem' : '.8rem',margin:isMobile?'0px 30px 0px 20px':'20px 0px 0px 35px'}}>
              This platform offer you the best student management for teaching center
              and job opportunities for teachers
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
               <CardMedia style={{marginTop:"8%"}} component="img" image='src/assets/images/web-development-concept_107173-16744.jpg' alt='dashboard image' />
          </Grid>
     </Grid>
     {/* Second Page */}
     <Grid container spacing={2} height={'95vh'} style={{backgroundColor:"#F5F6FB"}} marginTop={10}>
          <Grid item sm={12} md={6}>
               <CardMedia  component="img" image='src/assets/images/SecondImg.png' style={{margin:isMobile ? '50px 0px 0px 0px': '70px 0px 0px 35px'}} alt='dashboard image' />
          </Grid>
          <Grid  item sm={12} md={6}>
            <Typography color={'#1F2D5A'} lineHeight={1.4} style={{fontSize:isMobile ? '2rem' : '3.8rem',margin:isMobile ? '0px 10px 10px 20px': '150px 0px 0px 35px'}} gutterBottom>
              Lets learn together teach together make the future brighter
            </Typography>
          </Grid>
     </Grid>
     {/* Third Page */}
     <Typography gutterBottom align='center' color={'#1F2D5A'} sx={{fontSize:isMobile ? "2rem" : "3.8rem"}}marginTop={5} >
          Our Features
     </Typography>
     {/* <Grid container sx={12}  marginTop={5} marginBottom={15} paddingLeft={5} paddingRight={5}> */}
     <Grid container  spacing={3} marginTop={0} marginBottom={15} paddingLeft={5} paddingRight={5}>  
          <Grid item xs={6} md={3}>
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
          <Grid item xs={6} md={3}>
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
     {/* <Grid container xs={12} md={6} spacing={2} sx={{margin:isMobile ? '0 0 0 0' : '0 0 0 0 ' }}> */}
          <Grid item xs={6} md={3}>
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
          <Grid item xs={6} md={3}>
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
     {/* Footer Page */}
     <Box
      component="footer"
      sx={{
        backgroundColor: "#A47DFD",
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="white" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="white">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="white">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="white">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="white">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color={'inherit'}>
              <Facebook color="white" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />

            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Doodle
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
    </>
  )
}

export default HomePage