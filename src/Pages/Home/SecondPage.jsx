import { Grid, Typography,CardMedia } from '@mui/material'

const SecondPage = () => {
  return (
    <>
     <Grid container spacing={2} height={'90vh'} style={{backgroundColor:"#F5F6FB"}} marginTop={10}>
          <Grid item sm={12} md={6}>
               <CardMedia style={{marginTop:"8%"}} component="img" image='src/assets/images/SecondImg.png' alt='dashboard image' />
          </Grid>
          <Grid  item sm={12} md={6}>
            <Typography color={'#1F2D5A'} marginTop={15} marginLeft={5} lineHeight={1.4} style={{fontSize:'3.8em'}} gutterBottom>
              Lets learn together teach together make the future brighter
            </Typography>
          </Grid>
     </Grid>
    </>
  )
}

export default SecondPage