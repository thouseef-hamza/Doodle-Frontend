import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import SidebarComp from '../../../Components/Sidebar/SidebarComp'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; 
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";
import { Link } from 'react-router-dom';

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
  <Card sx={{ height: "90vh" }}>
    <CardContent>
      <Typography gutterBottom>Classroom #12121568</Typography>
      <Card>
        <CardMedia
          component={"img"}
          src="/src/assets/images/salman.png"

          sx={{ maxWidth: "50vw", maxHeight: "42vh",objectFit:"contain" }}
        ></CardMedia>
      </Card>
      <Box display={"flex"} marginTop={2} justifyContent={"space-between"}>
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
        <Link to={"detail"}>
          <Button variant="contained">Join Now</Button>
        </Link>
      </Box>
      <Typography marginTop={2} gutterBottom>
        Physics Chapter 2:
      </Typography>
      <Typography>
        Probability Theory Probability theory helps students to calculate the
        possibilities in cases like cards deck, heads, and tails in coins,
        probability of winning the match, and many more situations. This is
        considered one of the most important math topics in the class 9 math
        syllabus and for students preparing for other Competitive exams.
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