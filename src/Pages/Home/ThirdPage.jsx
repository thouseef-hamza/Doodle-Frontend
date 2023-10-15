import { Grid,Card, CardMedia, CardContent, Typography,} from '@mui/material'

const ThirdPage = () => {
  return (
    <>
    <Typography gutterBottom align='center' variant="h3" marginTop={5} component="div">
          Our Features
        </Typography>
     <Grid container spacing={2} margin={7}>
          <Grid  item sm={12} md={6}>
               <Card sx={{maxWidth:345}}>
                    <CardMedia
                    sx={{height:300}}
                    image='src/assets/images/2672292.jpg'
                    />
                    <CardContent>
                         <Typography align='' variant='h4'>You can find and hire teachers easily </Typography>
                    </CardContent>
               </Card>
          </Grid>
          <Grid item sm={12} md={6}>

          </Grid>
     </Grid>
    </>
  ) 
}

export default ThirdPage