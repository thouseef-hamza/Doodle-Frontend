import React from 'react'
import SidebarComp from '../../../Components/Sidebar/SidebarComp'
import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from 'react-router-dom';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Search, SearchIconWrapper, StyledInputBase } from '../../../Components/SearchBar';
import SearchIcon from "@mui/icons-material/Search";

const InsTaskDetailView = () => {
  return (
    <>
      <SidebarComp>
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
        <Paper>
          <form>
            <Grid container padding={2} spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic-1"
                  label="Task Name"
                  name="name"
                  variant="outlined"
                  // value={formData.name}
                  // onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic-2"
                  label="Start Date"
                  variant="outlined"
                  name="start_date"
                  type="date"
                  format="YYYY-MM-DD"
                  // value={formData.start_date}
                  // onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  multiline
                  name="description"
                  id="outlined-basic-2"
                  label="Description"
                  variant="outlined"
                  // value={formData.description}
                  // onChange={handleInputChange}
                />
              </Grid>
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
                // onClick={() => {
                //   alert("Are you sure want to delete");
                //   dispatch(deleteBatchDetail({ id, api, toast, navigate }));
                // }}
              >
                Delete
              </Button>
            </Grid>
          </form>
        </Paper>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          paddingRight={5}
          marginTop={4}
          marginBottom={4}
        >
          <TextField
            id="outlined-size-small"
            placeholder="Search"
            size="small"
            margin={"auto"}
            sx={{ width: "40%", marginRight: 1 }}
          />
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Filter</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Filter"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Completed</MenuItem>
              <MenuItem value={20}>Submitted</MenuItem>
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
              <TableRow>
                <TableCell>STU 00001</TableCell>
                <TableCell>Thouseef</TableCell>
                <TableCell>Batch 1</TableCell>
                <TableCell>
                  <IconButton color="green">
                    <CheckCircleRoundedIcon
                      sx={{ color: "green" }}
                      color="green"
                    />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton color="green">
                    <CancelRoundedIcon sx={{ color: "red" }} color="green" />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ color: "green" }}>Good</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>h</TableCell>
                <TableCell>hg</TableCell>
                <TableCell>uh</TableCell>
                <TableCell>
                  <IconButton color="green">
                    <CheckCircleRoundedIcon
                      sx={{ color: "green" }}
                      color="green"
                    />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <CancelRoundedIcon sx={{ color: "red" }} />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ color: "green" }}>Good</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>h</TableCell>
                <TableCell>hg</TableCell>
                <TableCell>uh</TableCell>
                <TableCell>
                  <IconButton>
                    <CheckCircleRoundedIcon sx={{ color: "green" }} />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <CancelRoundedIcon sx={{ color: "red" }} />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ color: "red" }}>
                  Fair
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>h</TableCell>
                <TableCell>hg</TableCell>
                <TableCell>uh</TableCell>
                <TableCell>
                  <IconButton>
                    <CancelRoundedIcon sx={{ color: "red" }} />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <CheckCircleRoundedIcon sx={{ color: "green" }} />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ color: "#ffc53d" }}>
                  Need Improvement
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>h</TableCell>
                <TableCell>hg</TableCell>
                <TableCell>uh</TableCell>
                <TableCell>
                  <IconButton>
                    <CheckCircleRoundedIcon sx={{ color: "green" }} />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton disabled>
                    <CancelRoundedIcon sx={{ color: "red" }} />
                  </IconButton>
                </TableCell>
                <TableCell  sx={{ color: "red" }}>Fair</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </SidebarComp>
    </>
  );
}

export default InsTaskDetailView