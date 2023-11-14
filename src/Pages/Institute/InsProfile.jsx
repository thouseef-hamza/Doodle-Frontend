import {  Box, Button, Card, CardActionArea, CardMedia, Grid, IconButton, TextField, Typography } from '@mui/material';
import SidebarComp from '../../Components/Sidebar/SidebarComp';
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useNavigate } from 'react-router-dom';
import UploadIcon from "@mui/icons-material/Upload";
import { useEffect, useRef, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import SpinnerComp from '../../Components/SpinnerComp';
import { useDispatch, useSelector } from 'react-redux';
import { editInsProfile, getInsProfile } from '../../Redux/Institute/InsProfile/InsProfileAction';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ToastContainer, toast } from "react-toastify";

import axios from 'axios';
 
const InsProfile = () => {
  const dispatch = useDispatch()
  const {insDetails,loading} = useSelector((state)=>state.insProfile)
  const [formData,setFormData] = useState()
  const navigate = useNavigate()
  const api=useAxios()

  useEffect(()=>{
    dispatch(getInsProfile({api:api}))
  },[dispatch])
  
  useEffect(()=>{
    setFormData({
      first_name: insDetails.first_name,
      last_name: insDetails.last_name,
      email: insDetails.email,
      phone_number: insDetails.phone_number,
      institute_profile: {
        profile_picture: insDetails.institute_profile?.profile_picture,
        address: insDetails.institute_profile?.address,
        city: insDetails.institute_profile?.city,
        state: insDetails.institute_profile?.state,
        postal_code: insDetails.institute_profile?.postal_code,
        establishment_year: insDetails.institute_profile?.establishment_year,
        description: insDetails.institute_profile?.description,
      },
    });
  },[insDetails])
  const fileInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault()
     window.alert("Are You Sure Want To Update Student");
     e.preventDefault();
     dispatch(
       editInsProfile({
         values: formData,
         api: api,
         toast: toast,
       })
     );
  }

  const handleCardClick = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((state) => {
      const newState = { ...state };
      if (
        name === "address" ||
        name === "city" ||
        name === "state" ||
        name === "description" ||
        name === "postal_code" ||
        name === "profile_picture" ||
        name === "establishment_year"
      ) {
        newState.institute_profile = {
          ...newState.institute_profile,
          [name]: value,
        };
      } else {
        newState[name] = value;
      }
      return newState;
    });
  };

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
          institute_profile: {
            ...formData.institute_profile,
            profile_picture: response.data["secure_url"],
          },
        });
      });
  };

  return (
        <SidebarComp>
      {loading ? (
        <SpinnerComp />
      ) : (
        <>
          <ToastContainer/>
          <Box>
            <Typography
              color={"#1F2D5A"}
              variant="h4"
              paddingLeft={1}
              paddingY={3}
            >
              Edit Profile
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} margin={0}>
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
                      onChange={(e) => handleImageChange(e.target.files[0])}
                    />
                    <CardMedia
                      loading="lazy"
                      component="img"
                      sx={{ maxHeight: "50vh" }}
                      image={
                        formData && formData.institute_profile?.profile_picture
                      }
                      alt="Institute Profile"
                    />
                  </CardActionArea>
                </Card>
                <Button
                  variant="contained"
                  endIcon={<UploadIcon />}
                  fullWidth
                  sx={{ marginTop: 2 }}
                  type="submit"
                >
                  Update
                </Button>
                <Button fullWidth variant="outlined" sx={{ marginTop: 1 }}>
                  {insDetails.unique_code}
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" padding={2}>
                  Institute Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      color="primary"
                      name="first_name"
                      variant="outlined"
                      value={formData && formData.first_name}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      color="primary"
                      name="last_name"
                      variant="outlined"
                      value={formData && formData.last_name}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      color="primary"
                      name="email"
                      variant="outlined"
                      value={formData && formData.email}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      color="primary"
                      name="phone_number"
                      variant="outlined"
                      value={formData && formData.phone_number}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label="Establishment Year"
                      color="primary"
                      name="establishment_year"
                      variant="outlined"
                      value={
                        formData &&
                        formData.institute_profile.establishment_year
                      }
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Typography variant="h6" padding={2}>
                    Institute Profile Details
                  </Typography>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      name="address"
                      variant="outlined"
                      multiline
                      value={formData && formData.institute_profile.address}
                      maxRows={5}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="City"
                      variant="outlined"
                      name="city"
                      value={formData && formData.institute_profile.city}
                      maxRows={5}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="State"
                      name="state"
                      variant="outlined"
                      value={formData && formData.institute_profile.state}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="Postal Code"
                      name="postal_code"
                      variant="outlined"
                      value={formData && formData.institute_profile.postal_code}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="About"
                      variant="outlined"
                      name="description"
                      multiline
                      value={formData && formData.institute_profile.description}
                      onChange={handleInputChange}
                      maxRows={10}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
          </>
      )}
      </SidebarComp>
  );
}

export default InsProfile

