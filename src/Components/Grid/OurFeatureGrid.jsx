// import { Card, CardContent, CardMedia, Grid, Typography, useMediaQuery,useTheme } from "@mui/material";
// import { useState } from "react";

// export const OurFeatureGrid = () => {
//      const [elevation, setElevation] = useState({
//           Card1:0,
//           Card2:0,
//           Card3:0,
//           Card4:0
//      })
//      const theme = useTheme();
//      const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//      const cardsData = [
//           { id: 1, content: 'Card 1' },
//           { id: 2, content: 'Card 2' },
//           { id: 3, content: 'Card 3' },
//           { id: 4, content: 'Card 4' },
//      ];
//   return (
//     <>
//      <Grid item sm={6}>
//           <Card onMouseEnter={()=>setElevation(prevElevation=>({...prevElevation,Card1:5}))} onMouseLeave={()=>setElevation(prevElevation=>({...prevElevation,Card1:0}))} elevation={elevation.Card1}>
//                <CardMedia
//                sx={{height:300}}
//                image='src/assets/images/2672292.jpg'
//                />
//                <CardContent>
//                     <Typography variant='h6'>You can find jobs and hire teachers easily </Typography>
//                </CardContent>
//           </Card>
//      </Grid>
//     </>
//   )
// }
