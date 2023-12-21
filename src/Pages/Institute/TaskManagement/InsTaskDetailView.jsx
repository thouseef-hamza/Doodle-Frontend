import React, { useEffect, useState } from 'react'
import SidebarComp from '../../../Components/Sidebar/SidebarComp'
import { Autocomplete, Box, Button, Checkbox, CircularProgress, FormControl, Grid, IconButton, Input, InputLabel, LinearProgress, ListItemText, MenuItem, OutlinedInput, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography } from '@mui/material';
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
  // const {}
  const dispatch = useDispatch()
  let api=useAxios();
  const navigate=useNavigate()
  useEffect(()=>{
    dispatch(getTaskDetails({api,id}))
    if(taskDetails){
      setFormData(taskDetails)
    }
  },[])
  useEffect(()=>{
    if(!loading){
      dispatch(TaskAssignmentList({ api, task_id: id }));
      if(stulist){
        setStuFormData(stulist)
      }
    }
  },[])

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
  return (
    <>
      <SidebarComp>
        <ToastContainer/>
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
                      value={formData && formData.task_type == "individual" ? "individual" : "batch"}
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
                  {/* imp #TODO */}
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
                        <TableCell>
                          {" "}
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
                        <TableCell
                          color={
                            value.status === "good"
                              ? "success"
                              : value.status === "fair"
                              ? "warning"
                              : value.status === "needs_improvement"
                              ? "error"
                              : null
                          }
                          sx={{ color: "blue" }}
                        >
                          {value.status.toUpperCase()}
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
      </SidebarComp>
    </>
  );
}

export default InsTaskDetailView