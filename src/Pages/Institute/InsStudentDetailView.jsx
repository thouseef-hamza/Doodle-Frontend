import { Box, Button, Card, CardActionArea, CardMedia, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { useEffect,useLayoutEffect, useState } from 'react'
import SidebarComp from '../../Components/Sidebar/SidebarComp';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from 'react-router-dom';
import UploadIcon from "@mui/icons-material/Upload"; 
import EditNoteIcon from "@mui/icons-material/EditNote"; 
import useAxios from '../../Hooks/useAxios';
import SpinnerComp from '../../Components/SpinnerComp';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { editStudentDetail, getStudentDetail } from '../../Redux/Institute/InsStudents/InsStudentDetailAction';
import { ToastContainer, toast } from 'react-toastify';

const InsStudentDetailView = () => {
     const navigate=useNavigate()
     const [edit, setEdit] = useState(false);
     const { studentDetail,loading } = useSelector( 
       (state) => state.insStudentDetail,shallowEqual
     );
      const [formData, setFormData] = useState();
     const dispatch = useDispatch()
     const api = useAxios() 
     const {id} = useParams()
     useEffect(() => {
       dispatch(
         getStudentDetail({id,api})
       );
     },[]);

     useEffect(()=>{
      setFormData({...studentDetail})
     },[studentDetail])

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((state) => {
        //   const newState = { ...state };
        //   console.log(newState,"guvhguvhjb");
        //   if (name === "address" || name === "city" || name === "date_of_birth" || name === "gender" || name === "postal_code" || name === "profile_picture" || name === "state") {
        //     newState.student_profile={...newState.student_profile,[name]:value}
        //   } else if (name === "batch_name") {
        //     console.log("here");
        //       newState.student_profile={...newState.student_profile.batch,["name"]:value}
        //   } else {
        //     newState[name] = value;
        //   }
        //   return newState;
        // });
        const newState = { ...state };

          if (name === "address" || name === "city" || name === "date_of_birth" || name === "gender" || name === "postal_code" || name === "profile_picture" || name === "state") {
            newState.student_profile = { ...newState.student_profile, [name]: value };
          } else if (name === "batch_name") {
            newState.student_profile = {
              ...newState.student_profile,
              batch: { ...newState.student_profile.batch, "name": value }
            };
          } else {
            newState[name] = value;
          }

          console.log(newState, "guvhguvhjb");
          return newState;
        });
        };
      const handleSubmit = (e)=>{
        console.log("here");
        e.preventDefault()
        dispatch(
          editStudentDetail({
            id: id,
            values: formData,
            api: api,
            toast: toast,
          })
        );
      }
      
  return (
    <>
      {loading ? (
        <SpinnerComp />
      ) : (
        <SidebarComp>
          <ToastContainer />
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
              {studentDetail && studentDetail.first_name}
            </Typography>
          </Box>
          <Paper>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} margin={0} padding={1}>
                <Grid item xs={3}>
                  <Card>
                    <CardActionArea onClick={() => window.alert("jdhds")}>
                      <CardMedia
                        component="img"
                        sx={{ maxHeight: "50vh" }}
                        image={
                          formData && formData.student_profile?.profile_picture
                            ? formData.student_profile.profile_picture
                            : "/src/assets/images/Login.png"
                        }
                        // onError={(e) => {
                        //   e.target.src = "/src/assets/images/Login.png";
                        // }}
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
                      type="submit"
                      onClick={() =>
                        window.alert("Are You Sure Want to update data")
                      }
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
                    {formData && formData.unique_code}
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
                        value={formData && formData.first_name}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Lastname"
                        variant="outlined"
                        name="last_name"
                        value={formData && formData.last_name}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        color="primary"
                        variant="outlined"
                        name="email"
                        value={formData && formData.email}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        name="phone_number"
                        value={formData && formData.phone_number}
                        onChange={handleInputChange}
                        InputProps={{
                          readOnly: !edit,
                        }}
                      />
                    </Grid>
                    {/* <Grid item xs={3}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Gender
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Gender"
                          // name="gender"
                          disabled={!edit}
                          // onChange={handleInputChange}
                          value={
                            formData && formData.student_profile?.gender
                          }
                        >
                          <MenuItem value={"M"}>Male</MenuItem>
                          <MenuItem value={"F"}>Female</MenuItem>
                          <MenuItem value={"O"}>Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid> */}
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        label="Date of Birth"
                        variant="outlined"
                        name="date_of_birth"
                        value={
                          formData &&
                          formData.student_profile?.date_of_birth
                        }
                        onChange={handleInputChange}
                        InputProps={{
                          readOnly: !edit,
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        label="Unique Code"
                        variant="outlined"
                        name="unique_code"
                        value={formData && formData.unique_code}
                        onChange={handleInputChange}
                        InputProps={{
                          readOnly: !edit,
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        label="Batch Name"
                        variant="outlined"
                        name="batch_name"
                        value={
                          formData && formData.student_profile?.batch?.name
                            
                        }
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Typography variant="h6" padding={2}>
                      Student Profile Details
                    </Typography>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Address"
                        variant="outlined"
                        name="address"
                        multiline
                        value={
                          formData && formData.student_profile?.address
                            
                        }
                        InputProps={{
                          readOnly: !edit,
                        }}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    {/* <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Profile Picture"
                        variant="outlined"
                        name="profile_picture"
                        type="file"
                        multiline
                        value={
                          formData && formData.student_profile.profile_picture
                        }
                        onChange={handleInputChange}
                      />
                    </Grid> */}
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label="City"
                        variant="outlined"
                        name="city"
                        value={
                          formData && formData.student_profile.city
                            
                        }
                        InputProps={{
                          readOnly: !edit,
                        }}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label="State"
                        variant="outlined"
                        name="state"
                        value={
                          formData && formData.student_profile.state
                            
                        }
                        InputProps={{
                          readOnly: !edit,
                        }}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4} marginBottom={3}>
                      <TextField
                        fullWidth
                        label="Postal Code"
                        name="postal_code"
                        variant="outlined"
                        value={
                          formData && formData.student_profile.postal_code
                           
                        }
                        InputProps={{
                          readOnly: !edit,
                        }}
                        onChange={handleInputChange}
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