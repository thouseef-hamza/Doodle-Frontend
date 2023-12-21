import React, { useEffect, useState } from 'react'
import SidebarComp from '../../../Components/Sidebar/SidebarComp'
import { Autocomplete, Box, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, Grid, IconButton, Input, InputLabel, LinearProgress, ListItemText, MenuItem, OutlinedInput, Paper, Radio, RadioGroup, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Search, SearchIconWrapper, StyledInputBase } from '../../../Components/SearchBar';
import SearchIcon from "@mui/icons-material/Search";  
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskDetail, editTaskDetails, getTaskDetails } from '../../../Redux/Institute/InsTasks/InsTaskDetailAction';
import useAxios from '../../../Hooks/useAxios';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { DatePicker } from "@mui/x-date-pickers"; 
import { styled } from "@mui/material/styles";
import dayjs from 'dayjs';
import SpinnerComp from '../../../Components/SpinnerComp';
import  {TaskAssignmentList}  from '../../../Redux/Institute/InsTaskAssignment/InsStudTaskAssignmentListAction';
import { listStudents } from '../../../Redux/Institute/InsStudents/InsStudentListCreateAction';
import { ToastContainer, toast } from "react-toastify";
import StudentAddComp from '../../../Components/StudentAddComp';
import { editTaskAssignment, getTaskAssignment } from '../../../Redux/Institute/InsTaskAssignment/InsStudTaskAssignmentDetailAction';


const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const InsTaskDetailView = () => {
  const {id} = useParams() 
  const [formData,setFormData] = useState({})
  // const [searchQuery,setSearchQuery] = useState("")
  const { taskDetails, loading } = useSelector((state) => state.insTasksDetail);
  const { stulist,loading:taskStudentsLoading } = useSelector((state) => state.insStudTaskAssignmentList);
  const [stuFormData,setStuFormData]=useState({})
  const { students ,loading:studentsLoading } = useSelector((state) => state.insStudentsListCreate);
  const [fetchStudents,setfetchStudents]=useState(true)
  const [studTaskOpen,setStudTaskOpen]=useState(false)
  const {taskAssignDetails}=useSelector((state)=>state.insStudTaskAssignmentDetail)
  const [studTaskID,setStudTaskID]=useState(null)
  const [studTaskFormData,setStudTaskFormData]=useState({})
  const dispatch = useDispatch()
  let api=useAxios();
  const navigate=useNavigate()
  useEffect(()=>{
    dispatch(getTaskDetails({api,id}))
    if(taskDetails){
      setFormData(taskDetails)
    }
  },[])
  useEffect(() => {
    if (!loading && !studTaskOpen) {
      dispatch(TaskAssignmentList({ api, task_id: id }));
      if (stulist) {
        setStuFormData(stulist);
      }
    }
  }, [studTaskOpen]);

  useEffect(()=>{
    if(fetchStudents){
      dispatch(listStudents({api}))
    }
  },[fetchStudents])
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(editTaskDetails({api,values:formData,id,toast}))
    }
    useEffect(() => {
      if (studTaskOpen) {
        dispatch(getTaskAssignment({ api, task_id: id, id: studTaskID }));
        setStudTaskFormData(taskAssignDetails)
      }
    }, [studTaskOpen]);

    const handleStudTaskSubmit=(e)=>{
      e.preventDefault()
      alert("Are You Sure Want To Update")
      dispatch(
        editTaskAssignment({
          api,
          id: studTaskID,
          task_id: id,
          values: studTaskFormData,
          setStudTaskOpen,
        })
      );
    }
    console.log(studTaskFormData);
  return (
    <>
      <SidebarComp>
        <ToastContainer />
        <Box>
          <Link to={"/institute/task"}>
            <Button
              sx={{ marginTop: 2.5, position: "absolute" }}
              size="medium"
              color="secondary"
            >
              <ArrowBackIcon fontSize="large" sx={{ color: "#8338EC" }} />
            </Button>
          </Link>
          <Typography
            color={"#1F2D5A"}
            variant="h4"
            paddingLeft={8}
            paddingY={3}
          >
            Task Detail View
          </Typography>
        </Box>
        {loading && !formData ? (
          <SpinnerComp />
        ) : (
          <Paper>
            <form onSubmit={handleSubmit}>
              <Grid container padding={2} spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic-1"
                    label="Task Name"
                    value={formData && formData.title}
                    name="title"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <DatePicker
                    sx={{ width: "100%" }}
                    label="Due Date"
                    format="DD-MM-YYYY"
                    onChange={(date) =>
                      setFormData({ ...formData, start_date: date })
                    }
                    value={formData && dayjs(formData.due_date)}
                    name="due_date"
                    slotProps={(props) => <TextField fullWidth {...props} />}
                  />
                </Grid>
                <Grid item xs={2}>
                  <FormControl sx={{ minWidth: 120 }} fullWidth>
                    <InputLabel id="demo-select-small-label">
                      Task Type
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Task Type"
                      onChange={handleChange}
                      value={
                        formData && formData.task_type == "individual"
                          ? "individual"
                          : "batch"
                      }
                    >
                      <MenuItem value="select" disabled>
                        <em>Select</em>
                      </MenuItem>
                      <MenuItem value={"individual"}>Individual</MenuItem>
                      <MenuItem value={"batch"}>Batch</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic-2"
                    label="Task URL"
                    name="task_url"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <Link
                          href={formData && formData.task_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {formData && formData.task_url}
                        </Link>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl sx={{ marginTop: 2 }} fullWidth>
                    <InputLabel id="demo-multiple-name-label">
                      Select Students
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={
                        formData && Array.isArray(formData.assigned_to)
                          ? formData.assigned_to
                          : []
                      }
                      name="assigned_to"
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map(
                            (id) =>
                              students &&
                              students.students.find((obj) => obj.id === id)
                                ?.first_name
                          )
                          .join(", ")
                      }
                      input={<OutlinedInput label="Select Students" />}
                    >
                      {students &&
                        students.students?.map((student) => (
                          <MenuItem key={student.id} value={student.id}>
                            {student.first_name + " " + student.last_name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  {/* </form> */}
                </Grid>
                {/* <Grid item xs={12} sm={4}>
                <Tooltip title="Upload for Task Document">
                <TextField
                  fullWidth
                  name="Document"
                  type='file'
                  id="outlined-basic-2"
                  
                  variant="outlined"
                  // value={formData.description}
                  // onChange={handleInputChange}
                /> */}
                {/* </Tooltip> */}
                {/* </Grid> */}
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    multiline
                    name="description"
                    id="outlined-basic-2"
                    label="Description"
                    variant="outlined"
                    value={formData && formData.description}
                    onChange={handleChange}
                  />
                </Grid>

                {/* <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button> */}
                <Button
                  sx={{ marginTop: 1, marginLeft: 2 }}
                  variant="contained"
                  type="submit"
                >
                  Update
                </Button>
                <Button
                  sx={{ marginTop: 1, marginLeft: 2 }}
                  color="error"
                  variant="contained"
                  onClick={() => {
                    alert("Are you sure want to delete");
                    dispatch(deleteTaskDetail({ id, api, navigate }));
                  }}
                >
                  Delete
                </Button>
              </Grid>
            </form>
          </Paper>
        )}
        {!taskStudentsLoading ? (
          <>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              paddingRight={5}
              marginTop={2}
              marginBottom={4}
            >
              <TextField
                id="outlined-size-small"
                placeholder="Search"
                size="small"
                margin={"normal"}
                sx={{ width: "40%", marginRight: 1 }}
              />
              <FormControl sx={{ minWidth: 120, marginTop: 2 }} size="small">
                <InputLabel id="demo-select-small-label">Filter</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Filter"
                  value={"none"}
                >
                  <MenuItem value="none">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"completed"}>Completed</MenuItem>
                  <MenuItem value={"completed"}>Submitted</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#ECE9FD" }}>
                    <TableCell>Student ID</TableCell>
                    <TableCell>Student Name</TableCell>
                    <TableCell>Student Batch</TableCell>
                    <TableCell>Submitted</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stulist &&
                    stulist.length > 0 &&
                    stulist.map((value) => (
                      <TableRow key={value.id}>
                        <TableCell>{value.user.unique_code}</TableCell>
                        <TableCell>
                          {value.user.first_name + " " + value.user.last_name}
                        </TableCell>
                        <TableCell>{value.user.batch_name}</TableCell>
                        <TableCell>
                          {value.is_submitted ? (
                            <IconButton color="green">
                              <CheckCircleRoundedIcon
                                sx={{ color: "green" }}
                                color="green"
                              />
                            </IconButton>
                          ) : (
                            <IconButton color="green">
                              <CancelRoundedIcon sx={{ color: "red" }} />
                            </IconButton>
                          )}
                        </TableCell>
                        <TableCell>
                          {" "}
                          {value.is_completed ? (
                            <IconButton color="green">
                              <CheckCircleRoundedIcon
                                sx={{ color: "green" }}
                                color="green"
                              />
                            </IconButton>
                          ) : (
                            <IconButton color="green">
                              <CancelRoundedIcon sx={{ color: "red" }} />
                            </IconButton>
                          )}
                        </TableCell>
                        <TableCell color={"error"}>
                          <span
                            style={{
                              color:
                                value.status == "good"
                                  ? "green"
                                  : value.status == "fair"
                                  ? "yellow"
                                  : value.status == "needs_improvement"
                                  ? "red"
                                  : "blue",
                            }}
                          >
                            {value.status.toUpperCase()}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outlined"
                            onClick={() => {
                              setStudTaskOpen(true);
                              setStudTaskID(value.id);
                            }}
                          >
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  {/*  */}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : !loading ? (
          <LinearProgress color="primary" />
        ) : null}
        {studTaskOpen && studTaskFormData ? (
          <StudentAddComp
            key={studTaskFormData.id}
            open={studTaskOpen}
            title={
              studTaskFormData.user?.first_name +
              " " +
              studTaskFormData.user?.last_name
            }
          >
            <form onSubmit={handleStudTaskSubmit}>
              <TextField
                fullWidth
                id="outlined-basic-2"
                label="Submitted URL"
                name="submitted_url"
                type="text"
                variant="outlined"
                value={studTaskFormData.submitted_url}
                sx={{ marginTop: 1 }}
                InputProps={{
                  startAdornment: (
                    <Link
                      href={studTaskFormData.submitted_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {studTaskFormData.submitted_url}
                    </Link>
                  ),
                }}
              />
              <Grid item xs={2}>
                <FormControl sx={{ minWidth: 120, marginTop: 1 }} fullWidth>
                  <InputLabel id="demo-select-small-label">
                    Task Status
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Task Status"
                    onChange={(e) =>
                      setStudTaskFormData({
                        ...studTaskFormData,
                        status: e.target.value,
                      })
                    }
                    value={studTaskFormData.status}
                  >
                    <MenuItem value={"reviewing"}>Reviewing</MenuItem>
                    <MenuItem value={"good"}>Good</MenuItem>
                    <MenuItem value={"fair"}>Fair</MenuItem>
                    <MenuItem value={"needs_improvement"}>
                      Needs Improvement
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl
                  sx={{ minWidth: 120, marginTop: 1, marginBottom: 1 }}
                  fullWidth
                >
                  <InputLabel id="demo-select-small-label">
                    Task Status
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Task Status"
                    onChange={(e) =>
                      setStudTaskFormData({
                        ...studTaskFormData,
                        is_completed: e.target.value,
                      })
                    }
                    value={studTaskFormData.is_completed}
                  >
                    <MenuItem value={true}>Completed</MenuItem>
                    <MenuItem value={false}>Not Completed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl
                  sx={{ minWidth: 120, marginTop: 1, marginBottom: 1 }}
                  fullWidth
                >
                  <InputLabel id="demo-select-small-label">
                    Task Status
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Task Status"
                    onChange={(e) =>
                      setStudTaskFormData({
                        ...studTaskFormData,
                        is_submitted: e.target.value,
                      })
                    }
                    value={studTaskFormData.is_submitted}
                  >
                    <MenuItem value={true}>Submitted</MenuItem>
                    <MenuItem value={false}>Not Submitted</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* <TextField
                id="outlined-basic"
                label="Fee Penalty"
                type="number"
                variant="outlined"
                name="fee_penalty"
                fullWidth
                margin="normal"
                // onChange={handleChange}
              /> */}
              {/* <DatePicker
                sx={{ width: "100%" }}
                label="Start Date"
                format="DD-MM-YYYY"
                onChange={(date) =>
                  setFormData({ ...studTaskFormData, start_date: date })
                }
                value={dayjs(studTaskFormData.start_date)}
                name="start_date"
                slotProps={(props) => <TextField fullWidth {...props} />}
              /> */}
              <TextField
                id="outlined-basic"
                label="Feed Back"
                type="text"
                disabled
                multiline
                variant="outlined"
                name="description"
                onChange={(e) =>
                  setStudTaskFormData({
                    ...studTaskFormData,
                    feed_back: e.target.value,
                  })
                }
                fullWidth
                margin="normal"
              />
              <Button onClick={() => setStudTaskOpen(false)} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Update
              </Button>
            </form>
          </StudentAddComp>
        ) : null}
      </SidebarComp>
    </>
  );
}

export default InsTaskDetailView