import SidebarComp from '../../../Components/Sidebar/SidebarComp'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from 'react-router-dom';
// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });

const StudentCard = () => (
   <Grid item sm={4}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Task for Batch 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          <Link to={"/institute/task/detail"}>
            <Button endIcon={<ArrowForwardIcon />} size='small'>view</Button>
          </Link>
        </Typography>
      </AccordionDetails>
    </Accordion>
   </Grid>
);

const TeacherCard = () => (
  <Grid item xs={12}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Task for Mr Thousi</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Grid>
);


const InsTaskManagement = () => {
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
            Task Management
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          marginLeft={0}
        >
          <Grid container md={8} spacing={2}>
            {/* Student Section */}
            <Grid
              item
              xs={12}
              sx={{ display: "flex" }}
              justifyContent={"space-between"}
            >
              <Typography color={"text.primary"} variant="h5">
                Students
              </Typography>
              <Button variant="outlined">Add Task</Button>
            </Grid>
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
          </Grid>
          <Grid container md={3} spacing={2} marginLeft={2}>
            {/* Teacher Section */}
            <Grid
              item
              xs={12}
              sx={{ display: "flex" }}
              justifyContent={"space-between"}
            >
              <Typography color={"text.primary"} variant="h5">
                Teachers
              </Typography>
              <Button variant="outlined">Add Task</Button>
            </Grid>
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
          </Grid>
        </Box>
        
      </SidebarComp>
    </>
  );
}

export default InsTaskManagement