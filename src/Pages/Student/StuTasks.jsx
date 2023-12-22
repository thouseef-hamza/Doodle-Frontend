import React from 'react'
import StuSidebarComp from '../../Components/Sidebar/StuSidebarComp'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StuTasks = () => {
  return (
    <>
      <StuSidebarComp>
        <Box>
          <Typography
            color={"#1F2D5A"}
            variant="h4"
            paddingLeft={1}
            paddingY={3}
          >
            Tasks
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {/* {tasks.tasks &&
            tasks?.tasks.length > 0 &&
            tasks?.tasks.map((value) =>
              value.task_type !== "teacher" ? ( */}
                <Grid item sm={4}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      {/* <Typography>{title}</Typography> */}
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {/* {description} */}
                        {/* <Link to={`/institute/task/detail/${id}`}> */}
                        <Button endIcon={<ArrowForwardIcon />} size="small">
                          view
                        </Button>
                        {/* </Link> */}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              {/* ) : null
            )} */}
        </Grid>
      </StuSidebarComp>
    </>
  );
}

export default StuTasks