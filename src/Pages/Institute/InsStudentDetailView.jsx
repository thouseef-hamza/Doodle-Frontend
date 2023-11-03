import { Box, Button, Card, CardActionArea, CardMedia, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import SidebarComp from '../../Components/Sidebar/SidebarComp';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from 'react-router-dom';
import UploadIcon from "@mui/icons-material/Upload"; 
import EditNoteIcon from "@mui/icons-material/EditNote"; 
import useAxios from '../../Hooks/useAxios';
import { INS_BASE_URL } from '../../utils/api/api';
import SpinnerComp from '../../Components/SpinnerComp';

const InsStudentDetailView = () => {
     const navigate=useNavigate()
     const [edit, setEdit] = useState(false);
     const [loading,setLoading] = useState(true)
     const [studentDetail,setStudentDetail] = useState([])
     console.log(studentDetail);
     const api = useAxios()
     const {id} = useParams()

     useEffect(()=>{
          fetchStudentDetails()
     },[])

     const fetchStudentDetails = async () =>{
          try {
            const response = await api.get(INS_BASE_URL + `student/${id}/`);
            if (response.status === 200) {
              setStudentDetail(response.data);
              setLoading(false);
            }
          } catch (error) {
               setLoading(false)
               console.log(error)
          }
     }
  return (
    <>
      {loading ? (
        <SpinnerComp />
      ) : (
        <SidebarComp>
          <Box>
            <Button
              sx={{ position: "absolute", marginTop: 2.5 }}
              onClick={() => navigate("/institute/students")}
              size="large"
              color="secondary"
            >
              <ArrowBackIcon fontSize="large" sx={{ color: "#8338EC" }} />
            </Button>
            <Typography
              color={"#1F2D5A"}
              variant="h4"
              paddingLeft={1}
              marginLeft={7}
              paddingY={3}
            >
              {studentDetail.first_name || "Student"}
            </Typography>
          </Box>
          <Paper>
            <form>
              <Grid container spacing={2} margin={0} padding={1}>
                <Grid item xs={3}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        sx={{ maxHeight: "50vh" }}
                        image={
                          studentDetail.student_profile.profile_picture
                            ? studentDetail.student_profile?.profile_picture
                            : "/src/assets/images/Login.png"
                        }
                        onError={(e) => {
                          e.target.src = "/src/assets/images/Login.png";
                        }}
                        alt="Student Profile"
                      />
                    </CardActionArea>
                  </Card>
                  {edit ? (
                    <Button
                      variant="contained"
                      endIcon={<UploadIcon />}
                      fullWidth
                      sx={{ marginTop: 2 }}
                      onClick={() => setEdit(false)}
                    >
                      Update
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ marginTop: 2 }}
                      onClick={() => setEdit(true)}
                    >
                      Edit Profile <EditNoteIcon />
                    </Button>
                  )}
                  <Button fullWidth variant="outlined" sx={{ marginTop: 1 }}>
                    {studentDetail.unique_code}
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6" padding={2}>
                    Student Details
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Firstname"
                        variant="outlined"
                        name="first_name"
                        value={studentDetail.first_name}
                        // onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Lastname"
                        variant="outlined"
                        name="last_name"
                        value={studentDetail.last_name}
                        // onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        color="primary"
                        variant="outlined"
                        value={studentDetail.email}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        value={studentDetail.phone_number}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        label="Gender"
                        variant="outlined"
                        value={studentDetail.student_profile.gender}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Batch Name"
                        variant="outlined"
                        value={studentDetail.student_profile.batch.name}
                      />
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Typography variant="h6" padding={2}>
                      Student Profile Details
                    </Typography>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Address"
                        variant="outlined"
                        multiline
                        value={studentDetail.student_profile.address}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label="City"
                        variant="outlined"
                        value={studentDetail.student_profile.city}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label="State"
                        variant="outlined"
                        value={studentDetail.student_profile.state}
                      />
                    </Grid>
                    <Grid item xs={4} marginBottom={3}>
                      <TextField
                        fullWidth
                        label="Postal Code"
                        variant="outlined"
                        value={studentDetail.student_profile.postal_code}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </SidebarComp>
      )}
    </>
  );
}

export default InsStudentDetailView