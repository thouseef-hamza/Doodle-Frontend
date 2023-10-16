import { Grid, Typography,CardMedia, useMediaQuery,useTheme } from '@mui/material'

const SecondPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
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
    </>
  )
}

export default SecondPage