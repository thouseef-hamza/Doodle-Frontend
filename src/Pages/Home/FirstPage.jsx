import HeaderComp from '../../Components/Header/HeaderComp'
import { Grid, Typography,CardMedia } from '@mui/material'

const FirstPage = () => {
  return (
    <>
     <HeaderComp />
     <br/>
     <Grid container spacing={2}>
          <Grid  item sm={10} md={6}>
            <Typography color={'#1F2D5A'} marginTop={5} marginLeft={5} lineHeight={1.4} style={{fontSize:'3.8em'}} gutterBottom>
              Lets Educate and Empower, make the next Generation with teaching
            </Typography>
            <Typography color={'#1F2D5A'} marginLeft={5}  variant="body2">
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