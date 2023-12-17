import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function CardComp({id,name,description,start_date,batch_fee,fee_penalty,is_scheduled,scheduled_date}) {
  const navigate = useNavigate()
  return (
    <>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: "100%", marginTop: 3 }}>
          <CardActionArea onClick={() => navigate(`/institute/batch/${id}`)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip
                  label={`Started ${dayjs(start_date).format("DD-MM-YYYY")}`}
                  color="primary"
                  size="small"
                  variant="outlined"
                />
                {is_scheduled?
                <Chip
                  label={`Reminder ${scheduled_date}`}
                  color="primary"
                  size="small"
                  variant="contained"
                />
                :null
                }
              </Stack>
              <Stack direction={"row"} spacing={1} marginTop={1}>
                <Chip
                  label={`Fee ${batch_fee}`}
                  color="success"
                  size="small"
                  variant="outlined"
                />
                <Chip
                  label={`Penalty ${fee_penalty}`}
                  color="error"
                  size="small"
                  variant="contained"
                />
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}
