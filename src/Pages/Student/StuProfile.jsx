import { Box, Button, Card, CardActionArea, CardMedia, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router-dom';
import UploadIcon from "@mui/icons-material/Upload"; 
import StuSidebarComp from '../../Components/Sidebar/StuSidebarComp';
import {useDispatch, useSelector} from "react-redux"
import { ToastContainer,toast } from 'react-toastify';
import useAxios from '../../Hooks/useAxios';
import { editStuProfile, getStuProfile } from '../../Redux/Student/StuProfile/StuProfileAction';
import SpinnerComp from '../../Components/SpinnerComp';
import axios from 'axios';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const StuProfile = () => {
     const navigate = useNavigate()
     const { stuDetails,loading } = useSelector((state) => state.stuProfile);
     const [formData,setFormData]=useState({})
      const fileInputRef = useRef(null);
      const handleCardClick = () => {
        fileInputRef.current.click();
      };
     const api=useAxios()
     const dispatch=useDispatch()
     useEffect(()=>{
      dispatch(getStuProfile({api}))
      setFormData(stuDetails)
     },[])
     const handleImageChange = (file) => {
       const imageData = new FormData();
       imageData.append("file", file);
       imageData.append(
         "upload_preset",
         import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
       );
       axios
         .post(
           `https://api.cloudinary.com/v1_1/${
             import.meta.env.VITE_CLOUDINARY_NAME
           }/upload/`,
           imageData
         )
         .then((response) => {
           setFormData({
             ...formData,
             profile: {
               ...formData.profile,
               profile_picture: response.data["secure_url"],
             },
           });
         });
     };
     const handleInputChange = (e) => {
      const {name,value} = e.target;
      setFormData((state)=>{
        const newState =  {...state}
        if (name === "profile_picture" || name === "date_of_birth" || name === "gender" || name === "address" || name === "city" || name === "state" || name === "postal_code"){
          newState.profile={
            ...newState.profile,
            [name]:value
          }
        }else{
          newState[name]=value
        }
        return newState
      })
     } 
     const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(editStuProfile({api,values:formData,toast}))
     }
  return (
    <>
      <StuSidebarComp>
        <ToastContainer />
        <Box>
          <Typography
            color={"#1F2D5A"}
            variant="h4"
            paddingLeft={1}
            paddingY={3}
          >
            Profile
          </Typography>
        </Box>
        {loading ? (
          <SpinnerComp />
        ) : (
          <Paper>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} margin={0} padding={1}>
                <Grid item xs={3}>
                  <Card>
                    <CardActionArea
                      title="click to upload image here"
                      onClick={handleCardClick}
                    >
                      <input
                        type="file"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        value={""}
                        onChange={(e) => handleImageChange(e.target.files[0])}
                      />
                      <CardMedia
                        loading="lazy"
                        component="img"
                        sx={{ maxHeight: "50vh" }}
                        image={formData && formData.profile?.profile_picture}
                        alt="Student Profile"
                      />
                    </CardActionArea>
                  </Card>
                  <Button fullWidth variant="outlined" sx={{ marginTop: 2 }}>
                    {formData && formData?.unique_code}
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<UploadIcon />}
                    fullWidth
                    sx={{ marginTop: 1 }}
                    type="submit"
                    onClick={() =>
                      window.alert("Are You Sure Want to update data")
                    }
                  >
                    Update student
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
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Gender
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Gender"
                          name="gender"
                          onChange={handleInputChange}
                          value={
                            (formData && formData.student_profile?.gender) ||
                            "S"
                          }
                        >
                          <MenuItem disabled value={"S"}>
                            Select
                          </MenuItem>
                          <MenuItem value={"M"}>Male</MenuItem>
                          <MenuItem value={"F"}>Female</MenuItem>
                          <MenuItem value={"O"}>Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                      <DatePicker
                        label="Start Date"
                        format="DD-MM-YYYY"
                        disableFuture
                        onChange={(date) =>
                          setFormData({ ...formData,profile:{...formData.profile ,date_of_birth: date} })
                        }
                        value={dayjs(
                          formData && formData.profile?.date_of_birth
                        )}
                        name="date_of_birth"
                        views={["year", "month", "day"]}
                        slotProps={(props) => <TextField {...props} />}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        label="Batch Name"
                        variant="outlined"
                        name="batch_name"
                        value={formData && formData.profile?.batch_name}
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
                        value={formData && formData.profile?.address}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label="City"
                        variant="outlined"
                        name="city"
                        value={formData && formData.profile?.city}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label="State"
                        variant="outlined"
                        name="state"
                        value={formData && formData.profile?.state}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4} marginBottom={3}>
                      <TextField
                        fullWidth
                        label="Postal Code"
                        name="postal_code"
                        variant="outlined"
                        value={formData && formData.profile?.postal_code}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
        )}
      </StuSidebarComp>
    </>
  );
}

export default StuProfile