import { Box, Button, Card, CardActionArea, CardMedia, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import React from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router-dom';
import UploadIcon from "@mui/icons-material/Upload"; 
import StuSidebarComp from '../../Components/Sidebar/StuSidebarComp';


const StuProfile = () => {
     const navigate = useNavigate()
  return (
    <>
    <StuSidebarComp>
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
          {/* {studentDetail && studentDetail.first_name} */}
        </Typography>
      </Box>
      <Paper>
        <form >
          <Grid container spacing={2} margin={0} padding={1}>
            <Grid item xs={3}>
              <Card>
                <CardActionArea
                  title="click to upload image here"
               //    onClick={handleCardClick}
                >
                  <input
                    type="file"
                    style={{ display: "none" }}
                    // ref={fileInputRef}
                    value={""}
                    // onChange={(e) => handleImageChange(e.target.files[0])}
                  />
                  <CardMedia
                    loading="lazy"
                    component="img"
                    sx={{ maxHeight: "50vh" }}
                    // image={
                    //   formData && formData.student_profile?.profile_picture
                    // }
                    alt="Student Profile"
                  />
                </CardActionArea>
              </Card>
              <Button fullWidth variant="outlined" sx={{ marginTop: 2 }}>
                {/* {studentDetail && studentDetail.unique_code} */}
              </Button>
              <Button
                variant="contained"
                endIcon={<UploadIcon />}
                fullWidth
                sx={{ marginTop: 1 }}
                type="submit"
               //  disabled={changes}
                onClick={() => window.alert("Are You Sure Want to update data")}
              >
                Update student
              </Button>
              {/* <Button
                variant="outlined"
                endIcon={<DeleteIcon />}
                fullWidth
                sx={{ marginTop: 1 }}
                color="error"
               //  onClick={handleDeleteStudent}
              >
                Delete Student
              </Button> */}
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
                    // value={formData && formData.first_name}
                    // onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Lastname"
                    variant="outlined"
                    name="last_name"
                    // value={formData && formData.last_name}
                    // onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    color="primary"
                    variant="outlined"
                    name="email"
                    // value={formData && formData.email}
                    // onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    name="phone_number"
                    // value={formData && formData.phone_number}
                    // onChange={handleInputChange}
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
                    //   onChange={handleInputChange}
                    //   value={
                    //     (formData && formData.student_profile?.gender) || "S"
                    //   }
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
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    variant="outlined"
                    name="date_of_birth"
                    // value={formData && formData.student_profile.date_of_birth}
                    // onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    label="Unique Code"
                    variant="outlined"
                    name="unique_code"
                    // value={formData && formData.unique_code}
                    // onChange={handleInputChange}
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
                    // value={formData && formData.student_profile?.address}
                    // onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="City"
                    variant="outlined"
                    name="city"
                    // value={formData && formData.student_profile?.city}
                    // onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="State"
                    variant="outlined"
                    name="state"
                    // value={formData && formData.student_profile?.state}
                    // onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4} marginBottom={3}>
                  <TextField
                    fullWidth
                    label="Postal Code"
                    name="postal_code"
                    variant="outlined"
                    // value={formData && formData.student_profile?.postal_code}
                    // onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </StuSidebarComp>
    </>
  );
}

export default StuProfile