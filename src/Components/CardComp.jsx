import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CardComp({id,name,description}) {
  const navigate = useNavigate()
  return (
    <>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: "100%", marginTop: 3 }}>
            <CardActionArea onClick={()=> navigate(`/institute/batch/${id}`)} >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
    </>
  );
}
