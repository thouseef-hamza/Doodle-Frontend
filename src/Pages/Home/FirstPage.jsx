import HeaderComp from '../../Components/Header/HeaderComp'
import { Grid, Typography,CardMedia, useMediaQuery,useTheme } from '@mui/material'

const FirstPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
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
    </>
  )
}

export default FirstPage