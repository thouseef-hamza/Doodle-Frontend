
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import CallEndIcon from '@mui/icons-material/CallEnd';
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";
import { useNavigate } from "react-router-dom";

// const StudentCard = () => (
//   <Grid
// )
const InsClassroomDetailView = () => {
  const navigate = useNavigate()
  return (
    <>
      <Grid
        padding={3}
        container
        display={"flex"}
        spacing={1}
        justifyContent={"flex-start"}
      >
        <Grid item xs={10}>
          <Card>
            <CardMedia
              sx={{ objectFit: "contain", maxHeight: "78vh" }}
              component={"img"}
              src="/src/assets/images/Shammas.jpg"
              alt="pic"
              title="hcg"
            ></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card sx={{ maxHeight: "18vh" }}>
            <CardMedia
              component={"img"}
              src="/src/assets/images/salman.png"
            ></CardMedia>
            <Typography marginLeft={1}>Salman</Typography>
          </Card>
          <Card sx={{ marginTop: 1, maxHeight: "18vh" }}>
            <CardMedia
              component={"img"}
              src="/src/assets/images/mufees.png"
            ></CardMedia>
            <Typography>Mufees</Typography>
          </Card>
          <Card sx={{ marginTop: 1, maxHeight: "18vh" }}>
            <CardMedia
              component={"img"}
              src="https://assets.codepen.io/6093409/river.jpg"
            ></CardMedia>
            {/* <CardContent></CardContent> */}
          </Card>
          <Card sx={{ marginTop: 1, maxHeight: "18vh" }}>
            <CardMedia
              component={"img"}
              src="https://assets.codepen.io/6093409/river.jpg"
            ></CardMedia>
            <CardContent>gj</CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box display={"flex"} justifyContent={"space-between"} paddingX={4}>
        <Typography>Classroom #12312567</Typography>
        <Box>
          <Button
            onClick={() => {
              alert("Are You Sure Want to quit the class");
              navigate("/institute/classroom");
            }}
            variant="contained"
            sx={{
              backgroundColor: "red",
              "&:hover": { backgroundColor: "#f5222d" },
            }}
          >
            <CallEndIcon />
          </Button>
          <Button variant="outlined" sx={{ marginX: 3 }}>
            <VideocamOutlinedIcon />
          </Button>
          <Button variant="outlined">
            <VolumeOffOutlinedIcon />
          </Button>
        </Box>
        <AvatarGroup
          max={4}
          total={1235}
          renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
        >
          <Avatar alt="Remy Sharp" src="/src/assets/images/salman.png" />
          <Avatar alt="Travis Howard" src="/src/assets/images/salman.png" />
          <Avatar alt="Cindy Baker" src="/src/assets/images/salman.png" />
          <Avatar alt="Agnes Walker" src="/src/assets/images/salman.png" />
          <Avatar alt="Trevor Henderson" src="/src/assets/images/salman.png" />
        </AvatarGroup>
      </Box>
    </>
  );
}

export default InsClassroomDetailView