import SidebarComp from '../../../Components/Sidebar/SidebarComp'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, listTasks } from '../../../Redux/Institute/InsTasks/InsTasksListCreateAction';
import useAxios from '../../../Hooks/useAxios';
import StudentAddComp from '../../../Components/StudentAddComp';
import { listStudents } from '../../../Redux/Institute/InsStudents/InsStudentListCreateAction';
import { useTheme } from '@emotion/react';
import { ToastContainer, toast } from "react-toastify";
import SpinnerComp from '../../../Components/SpinnerComp';
import { listBatches } from '../../../Redux/Institute/InsBatches/InsBatchesListCreateAction';
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

const StudentCard = ({id,title,description}) => (
   <Grid item sm={4}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography >
          {description}
          <Link to={`/institute/task/detail/${id}`}>
            <Button endIcon={<ArrowForwardIcon />} size='small'>view</Button>
          </Link>
        </Typography>
      </AccordionDetails>
    </Accordion>
   </Grid>
);

const TeacherCard = ({ id, title, description }) => (
  <Grid item xs={12}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {description}
          <Link to={`/institute/task/detail/${id}`}>
            <Button endIcon={<ArrowForwardIcon />} size="small">
              view
            </Button>
          </Link>
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Grid>
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }


const InsTaskManagement = () => {
  const [open,setOpen] = useState(false)
  const dispatch = useDispatch()
  const {tasks,loading,error} = useSelector(state=>state.insTasksListCreate)
  console.log(tasks);
  const { students } = useSelector(
    (state) => state.insStudentsListCreate
  );
  const { batches } = useSelector(
    (state) => state.insBatchesListCreate
  );
  let api = useAxios();
  const [formData,setFormData] = useState({
    title:"",
    description:"",
    task_url:"",
    due_date:"",
    task_type:"",
    assigned_to:[],
  })

  useEffect(()=>{
    dispatch(listTasks({api:api}))
    dispatch(listStudents({api:api}))
  },[])

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({
      ...formData,
      [name] : value
    })
  }
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createTask({api:api,values:formData,toast:toast,setOpen:setOpen}))
    setFormData({
      title: "",
      description: "",
      task_url: "",
      due_date: "",
      task_type: "",
      assigned_to: [],
    });
  }
  const handleBatchesClick =()=>{
    dispatch(listBatches({api:api}))
  }

  return (
    <>
      <SidebarComp>
        {loading ? (
          <SpinnerComp />
        ) : (
          <>
            <ToastContainer />
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
                  <Button variant="outlined" onClick={() => setOpen(true)}>
                    Add Task
                  </Button>
                </Grid>
                {tasks.map((value) =>
                  value.task_type !== "teacher" ? (
                    <StudentCard
                      key={value.id}
                      id={value.id}
                      title={value.title}
                      description={value.description}
                    />
                  ) : null
                )}
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
                </Grid>
                {tasks.map((value) =>
                  value.task_type === "teacher" ? (
                    <TeacherCard
                      key={value.id}
                      id={value.id}
                      title={value.title}
                      description={value.description}
                    />
                  ) : null
                )}
              </Grid>
            </Box>
            <StudentAddComp open={open} title={"Task Form Filling"}>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="outlined-basic"
                  required
                  label="Task Title"
                  type="text"
                  variant="outlined"
                  name="title"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Description"
                  name="description"
                  type="text"
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Task Url"
                  type="text"
                  multiline
                  variant="outlined"
                  value={formData.task_url}
                  name="task_url"
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <FormControl sx={{ marginTop: 2 }} fullWidth>
                  <InputLabel id="demo-multiple-name-label">
                    Task Type
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    fullWidth
                    name="task_type"
                    label="Task Type"
                    onChange={handleChange}
                    defaultValue={"select"}
                  >
                    <MenuItem disabled value="select">
                      Select
                    </MenuItem>
                    <MenuItem
                      onClick={() => dispatch(listStudents({ api: api }))}
                      value="individual"
                    >
                      Individual
                    </MenuItem>
                    <MenuItem onClick={handleBatchesClick} value="batch">
                      Batch
                    </MenuItem>
                    <MenuItem value="teacher">Teacher</MenuItem>
                  </Select>
                </FormControl>
                {formData.task_type === "individual" ? (
                  <FormControl sx={{ marginTop: 2 }} fullWidth>
                    <InputLabel id="demo-multiple-name-label">
                      Select Students
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={formData.assigned_to}
                      name="assigned_to"
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map(
                            (id) =>
                              students.find((obj) => obj.id === id)?.first_name
                          )
                          .join(", ")
                      }
                      input={<OutlinedInput label="Select Students" />}
                    >
                      {students.map((student) => (
                        <MenuItem key={student.id} value={student.id}>
                          {student.first_name + " " + student.last_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ) : formData.task_type === "batch" ? (
                  <FormControl sx={{ marginTop: 2 }} fullWidth>
                    <InputLabel id="demo-multiple-name-label">
                      Select Batches
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={formData.assigned_to}
                      name="assigned_to"
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map(
                            (id) => batches.find((obj) => obj.id === id)?.name
                          )
                          .join(", ")
                      }
                      input={<OutlinedInput label="Select Batches" />}
                    >
                      {batches.map((batch) => (
                        <MenuItem key={batch.id} value={batch.id}>
                          {batch.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ) : null}
                <TextField
                  id="outlined-basic"
                  label="Due Date"
                  type="date"
                  multiline
                  variant="outlined"
                  name="due_date"
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <Button onClick={() => setOpen(false)} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </form>
            </StudentAddComp>
          </>
        )}
      </SidebarComp>
    </>
  );
}

export default InsTaskManagement