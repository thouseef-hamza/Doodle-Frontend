import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, CardContent, Container, Grid, IconButton, Typography } from '@mui/material'
import SidebarComp from '../../../Components/Sidebar/SidebarComp'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; 
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";

const StudentCard = () => (
    <Card sx={{marginBottom:1}}>
     <CardActionArea>
     <CardContent sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Typography color={"text.primary"}>
               Classroom for physics
          </Typography>
          <Typography fontSize={10} color={"text.primary"} sx={{color:"green"}} paddingLeft={22} >
               Ongoing
          </Typography>
        <ArrowForwardIcon color='primary'/>
     </CardContent>
     </CardActionArea>
    </Card>
);

const TeacherCard = () => (
  <Card sx={{ height: "70vh" }}>
    <CardContent>
      <Typography gutterBottom>Classroom #12121568</Typography>
      <Card sx={{ width: "50vw", height: "40vh" }}>
        <video
          //   autoPlay
          //   loop
          muted
          poster="https://assets.codepen.io/6093409/river.jpg"
        >
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
          />
        </video>
      </Card>
      <Box display={"flex"} marginTop={2}  justifyContent={"space-between"}>
      <Typography color={"text.secondary"}>
          Hosted by : Thouseef | You
      </Typography>
      <Typography color={"primary.main"}>
          Teacher : Mufees, Yaseen, Amal ,Anuroop
      </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={2}
        gap={3}
      >
        <Button variant="outlined">
          <VideocamOutlinedIcon />
        </Button>
        <Button variant="outlined">
          <VolumeOffOutlinedIcon />
        </Button>
        <Button variant="contained">
          Join Now
        </Button>
      </Box>
      <Typography marginTop={2}>
          Description:
          <Typography >
               Learn Physics First Chapter Second Topic 15th Section
          </Typography>
      </Typography>
    </CardContent>
  </Card>
);


const InsClassroomManagement = () => {
  return (
    <>
      <SidebarComp>
        <Box>
          <Typography
            color={"#1F2D5A"}
            variant="h4"
            paddingLeft={1}
            paddingY={3}
          >
            Classroom Management
          </Typography>
        </Box>
        <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingRight={2}
        >
          <Typography>Classroom List</Typography>
          <Typography>Classroom Detail</Typography>
          <Button variant="outlined">Add Classroom</Button>
        </Box>
        <Grid container md={12} spacing={2} marginTop={1} >
          <Grid item xs={12} md={5}>
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
          </Grid>
           <Grid item xs={12} md={7}>
            <TeacherCard />
          </Grid>
        </Grid>
         
      </SidebarComp>
    </>
  );
}

export default InsClassroomManagement